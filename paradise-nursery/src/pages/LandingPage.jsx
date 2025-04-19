import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/LandingPage.css';

const LandingPage = () => (
  <div className="landing">
    <h1>Welcome to Paradise Nursery</h1>
    <p>Bringing nature to your home with our finest houseplants.</p>
    <Link to="/products"><button>Get Started</button></Link>
  </div>
);

export default LandingPage;
