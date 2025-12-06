import React, { Suspense, useEffect, useState, useRef } from 'react'; 
import { Canvas, useThree, useFrame } from '@react-three/fiber'; 
import { OrbitControls, useGLTF, Environment, Center, useAnimations, ContactShadows } from '@react-three/drei'; 
import dmodel from "../assets/lower-limb.glb"; 
import './anatomy.css';

// --- CONFIGURATION ---
const TARGET_POINT = [0, -1.2, 0]; 
const INITIAL_CAMERA_POS = [0, -1.3, 1.5]; 
// ---------------------

const LegModel = () => {
  const { scene, animations } = useGLTF(dmodel);
  const { actions, names } = useAnimations(animations, scene);

  useEffect(() => {
    if (names.length > 0) {
      actions[names[0]].reset().fadeIn(0.5).play();
    }
  }, [actions, names]);

  return (
    <Center position={[0, 0, 0]}>
      <primitive 
        object={scene} 
        scale={3} 
        rotation={[0, 0, 0]} 
      />
    </Center>
  );
};

const CameraController = () => {
  const { camera } = useThree();
  useEffect(() => {
    camera.position.set(...INITIAL_CAMERA_POS);
    camera.updateProjectionMatrix();
  }, [camera]);
  return null;
}

const CinematicLighting = () => {
  const light1 = useRef();
  const light2 = useRef();
  const light3 = useRef();

  useFrame(({ clock }) => {
    const t = clock.getElapsedTime();
    if (light1.current) {
      light1.current.position.x = Math.sin(t * 0.5) * 4;
      light1.current.position.z = Math.cos(t * 0.5) * 4;
    }
    if (light2.current) {
      light2.current.position.x = Math.sin(t * 0.3 + 2) * 5;
      light2.current.position.y = Math.sin(t * 0.5) * 2; 
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} color="#ffffff" />
      <spotLight ref={light1} color="#fed425" intensity={20} distance={10} angle={0.5} penumbra={1} position={[3, 2, 3]} />
      <spotLight ref={light2} color="#4c6ef5" intensity={10} distance={10} angle={0.6} penumbra={1} position={[-3, 0, -3]} />
      <spotLight ref={light3} color="#ffffff" intensity={5} position={[0, 5, 2]} angle={0.3} penumbra={0.5} />
    </>
  );
};

const AnatomyViewer = () => {
  const [hasInteracted, setHasInteracted] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // --- Check for Mobile Screen ---
  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900);
    checkMobile(); // Check on mount
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // --- Animation Logic: Reveal on Scroll ---
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('active');
        else entry.target.classList.remove('active'); 
      });
    }, { threshold: 0.1 }); 
    reveals.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div className="anatomy-wrapper">
      
      {/* 
         On mobile, this div is now 90% width with margins.
         Users can scroll by touching the margins.
      */}
      <div className="anatomy-visuals" onPointerDown={() => setHasInteracted(true)}>
        <Canvas shadows dpr={[1, 2]}> 
          <CameraController />
          <CinematicLighting />
          <Environment preset="city" environmentIntensity={0.5} blur={0.8} />

          <Suspense fallback={null}>
            <LegModel />
            <ContactShadows position={[0, -2, 0]} opacity={0.6} scale={10} blur={2.5} far={4} color="#000000" />
          </Suspense>

          <OrbitControls 
            makeDefault 
            target={TARGET_POINT}
            // Mobile Optimization:
            // 1. Disable Zoom on mobile (it feels weird when scrolling)
            enableZoom={!isMobile} 
            // 2. Disable Pan on mobile (keeps model centered)
            enablePan={!isMobile}
            enableRotate={true} // User can still rotate
            minDistance={1}
            autoRotate={true} 
            autoRotateSpeed={0.5} 
            maxDistance={10}
          />
        </Canvas>

        <div className="interaction-hint" style={{ opacity: hasInteracted ? 0 : 1 }}>
          <svg className="hint-icon" viewBox="0 0 24 24">
            <path d="M9,11.24V7.5C9,6.12 10.12,5 11.5,5S14,6.12 14,7.5v3.74c1.21-0.81 2-2.18 2-3.74c0-2.49-2.01-4.5-4.5-4.5S7,5.01 7,7.5c0,1.56 0.79,2.93 2,3.74z M17.28,12.72c-0.29-0.88-0.95-1.57-1.78-1.92V7.5c0-2.21-1.79-4-4-4s-4,1.79-4,4v3.3c-0.83,0.35-1.49,1.04-1.78,1.92C5.6,13.12 6,14.61 6,14.61l1.5,4.71C7.88,20.53 9.04,21.5 10.33,21.5h2.34c1.29,0 2.45-0.97 2.83-2.18l1.5-4.71C17,14.61 17.4,13.12 17.28,12.72z"/>
          </svg>
          <span className="hint-text">{isMobile ? "Swipe to Rotate" : "Drag to Rotate"}</span>
        </div>
      </div>

      <div className="anatomy-content">
        <h1 className="anatomy-title reveal">Ankle Joint Anatomy</h1>
        <p className="anatomy-subtitle reveal">
          Explore the complete anatomy of the ankle joint in this video series. 
          You’ll get to know the key parts, muscles, and ligaments, and how they all work together. 
          These videos are designed to give you a clear and simple understanding that will help 
          you in AI-based sports rehabilitation.
        </p>
      </div>

    </div>
  );
};

export default AnatomyViewer;