import React, { useEffect } from 'react';
import './AboutMe.css';
import Usama2 from '../assets/aboutme.png';

function AboutMe() {

  // --- Animation Logic: Reveal on Scroll (Same as VideosSection) ---
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Removes the class when scrolling away (creates the re-appearing effect)
          entry.target.classList.remove('active'); 
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% is visible

    reveals.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div id='aboutme' className='AboutMe'>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@3.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      
      {/* Added 'reveal' class here */}
      <img className='abt-me-img' src={`${Usama2}`} alt="Usama Profile"></img>
      
      {/* Added 'reveal' class here */}
      <div className='abt-me-right-text-content reveal'>
        <h2 className='abt-me-main-title'>About Me</h2>
        <p className='abt-me-description'>
          I’m a Master’s researcher at the Faculty of Sport Sciences, Port Said University, specializing in sports injury rehabilitation using artificial intelligence. My research focuses on developing innovative rehabilitation programs to enhance recovery outcomes and athletic performance.
        </p>

        <p className='abt-me-description'>
          <strong>In addition</strong> to my academic journey, I’m also a professional graphic designer with a deep passion for creativity and visual storytelling. I enjoy merging my design background with my interest in sports science and technology, believing that innovation and creativity can transform the future of sports rehabilitation.
        </p>

        <p className='abt-me-description'>
          <strong>Always eager to learn,</strong> collaborate, and contribute to projects that combine health, design, and technology to make a real impact.
        </p>
      </div>

      {/* Added 'reveal' class here */}
      <div  className="abt-home-social">
        <a
          href="https://www.facebook.com/share/1Do9KKxrDE/?mibextid=wwXIfr"
          target="_blank"
          rel="noreferrer"
          className="abt-home__social-link"
        >
          <i className="ri-facebook-circle-fill"></i>
        </a>

        <a
          href="https://www.instagram.com/iamusamanabil"
          target="_blank"
          rel="noreferrer"
          className="abt-home__social-link"
        >
          <i className="ri-instagram-fill"></i>
        </a>

        <a
          href="https://www.tiktok.com/@immusamaa?_r=1&_t=ZS-91ECuEp0Lkj"
          target="_blank"
          rel="noreferrer"
          className="abt-home__social-link"
        >
          <i className="ri-tiktok-line"></i>
        </a>
      </div>

    </div>
  );
}
export default AboutMe;