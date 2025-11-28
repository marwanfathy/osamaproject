import React, { useEffect } from 'react';
import './VideosSection.css';

// --- IMPORT YOUR THUMBNAILS HERE ---
import thumb1 from '../assets/PHOTO-2025-11-28-00-44-28 3.jpg'; 
import thumb2 from '../assets/PHOTO-2025-11-28-00-44-28.jpg'; 
import thumb3 from '../assets/PHOTO-2025-11-28-00-44-28 2.jpg'; 

import thumb4 from '../assets/PHOTO-2025-11-28-00-44-44.jpg'; 
import thumb5 from '../assets/PHOTO-2025-11-28-00-44-43.jpg'; 
import thumb6 from '../assets/PHOTO-2025-11-28-00-44-43 2.jpg'; 


import week1 from '../assets/red1.mp4'
import week2 from '../assets/red2.mp4'
import week3 from '../assets/red3.mp4'

import week1vr from '../assets/twored1.mp4'
import week2vr from '../assets/twored2.mp4'
import week3vr from '../assets/twored3.mp4'

function VideosSection() {

  // --- Animation Logic: Reveal on Scroll ---
  useEffect(() => {
    const reveals = document.querySelectorAll('.reveal');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('active');
        } else {
          // Optional: Remove this else block if you want it to stay visible once revealed
          entry.target.classList.remove('active'); 
        }
      });
    }, { threshold: 0.1 }); // Trigger when 10% of the item is visible

    reveals.forEach((element) => observer.observe(element));
  }, []);

  return (
    <div id='rehabilitation' className='videos-section'>
      
      {/* Container that splits screen: Left (Videos) | Right (Text) */}
      <div className='split-container'>

        {/* --- LEFT SIDE: THE 6 VIDEOS (3 Cols x 2 Rows) --- */}
        <div className='left-video-grid reveal'>
          
          {/* Row 1: Standard Videos */}
          <div className='video-item'>
            <video controls poster={thumb1} className='video-player'>
              <source src={`${week1}`} type="video/mp4" />
            </video>
            <span className='video-label'>Week 1</span>
          </div>

          <div className='video-item'>
            <video controls poster={thumb2} className='video-player'>
              <source src={`${week2}`} type="video/mp4" />
            </video>
            <span className='video-label'>Week 2</span>
          </div>

          <div className='video-item'>
            <video controls poster={thumb3} className='video-player'>
              <source src={`${week3}`} type="video/mp4" />
            </video>
            <span className='video-label'>Week 3</span>
          </div>

          {/* Row 2: VR Videos */}
          <div className='video-item'>
            <video controls poster={thumb4} className='video-player'>
              <source src={`${week1vr}`} type="video/mp4" />
            </video>
            <span className='video-label'>VR Week 1</span>
          </div>

          <div className='video-item'>
            <video controls poster={thumb5} className='video-player'>
              <source src={`${week2vr}`} type="video/mp4" />
            </video>
            <span className='video-label'>VR Week 2</span>
          </div>

          <div className='video-item'>
            <video controls poster={thumb6} className='video-player'>
              <source src={`${week3vr}`} type="video/mp4" />
            </video>
            <span className='video-label'>VR Week 3</span>
          </div>

        </div>

        {/* --- RIGHT SIDE: TEXT & DESCRIPTION --- */}
        <div className='right-text-content reveal'>
          <h2 className='main-title'>Rehabilitation Program</h2>
          <h3 className='subtitle'>Full 3-Week Course & VR Sessions</h3>
          
          <p className='description'>
            Welcome to the comprehensive rehabilitation program. On the left, you will find 
            the complete schedule for your recovery journey.
          </p>
          
          <p className='description'>
            <strong>Top Row:</strong> Standard rehabilitation exercises focusing on mobility and strength for Week 1, 2, and 3.
          </p>
          
          <p id='bottom-row' className='description'>
            <strong>Bottom Row:</strong> VR Box specialized sessions designed to enhance your cognitive and physical coordination.
          </p>

        </div>

      </div>
    </div>
  );
}

export default VideosSection;