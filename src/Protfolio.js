import React from 'react';
import './Protfolio.css';
import { Link } from 'react-router-dom';


const Protfolio = () => {
  return (
    <>
    <div className="profile-container">
      {/* Explore Button */}
      <button className="explore-button" type='submit'> <Link to='SecondPage' className='link'>Get Started</Link> </button>
      {/* Image and Details */}
      <div className="image-details-container">
        <div className="image-container">
          <img src="https://static.vecteezy.com/system/resources/thumbnails/038/962/461/small/ai-generated-caucasian-successful-confident-young-businesswoman-ceo-boss-bank-employee-worker-manager-with-arms-crossed-in-formal-wear-isolated-in-white-background-photo.jpg" alt="Profile" />
        </div>
        <div className="details">
          <h1>Aparna Ganeshan</h1>
          <p>Email: <a href="mailto:aparna.ganeshan11@gmail.com">aparna.ganeshan11@gmail.com</a>
          </p>
        </div>
      </div>
     
    </div>
    <div className='footer' >
    <small>Copy write @2024</small>
    </div>
    </>
  )
}
export default Protfolio