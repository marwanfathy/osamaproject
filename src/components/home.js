import React from 'react';
import Banner from './banner/banner';
import Navbar from './navbar/navbar';
import VideosSection from './VideosSection/VideosSection';
import AboutMe from './AboutMe/AboutMe';
import Ai from './Ai/Ai';
import Footer from './Footer/Footer';
import '../App.css'

// Add onOpenLogin to props
function Home({ username, onLogout, onOpenLogin }) {
  return (
    <div className='Landing-page'>
      <Navbar 
        username={username} 
        onLogout={onLogout} 
        onOpenLogin={onOpenLogin} // Pass it to Navbar
      />
      <Banner />
      <VideosSection />
      <AboutMe />
      <Ai />
      <Footer />
    </div>
  );
}

export default Home;