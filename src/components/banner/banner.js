import './banner.css';
import usama from '../assets/ll.png';
import dot from '../assets/الدايره فقط.png';
function Banner() {
  return (
    <div className='main-banner'>
      {/* 1. The Text */}
      <h1 className='banner-text'>
        <span>Rehabilitation Using</span>
        <span id='ai-tex-ban'>Artificial Intelligence</span>
      </h1>
      {/* 2. The Dot */}
      {/* <img className='banner-dot' src={dot} alt="decoration dot" />  */}
      <div className="behind-dot">
          <span className="pulse-dot"></span>
      </div>
      {/* 3. Usama */}
      <img className='banner-usama' src={usama} alt="usama" />

      {/* 4. Social Media Links (Bottom Left) */}

    </div>
  );
}

export default Banner;