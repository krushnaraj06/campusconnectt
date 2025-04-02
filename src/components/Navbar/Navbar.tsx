import React from 'react';
import { Menu, Bell, MessageSquare, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-brand">
        <Link to="/" className="brand-link">
          <GraduationCap className="brand-logo" />
          <h1>Campus Connect</h1>
        </Link>
      </div>
      <div className="nav-menu">
        <Link to="/" className="nav-link">Home</Link>
        <Link to="/study-buddy" className="nav-link">Study Buddy</Link>
        <Link to="/budget-buddy" className="nav-link">Budget Buddy</Link>
        <Link to="/market-mingle" className="nav-link">MarketMingle</Link>
        <Link to="/pack-pal" className="nav-link">PackPal</Link>
      </div>
      <div className="nav-actions">
        <Bell className="nav-icon" />
        <MessageSquare className="nav-icon" />
        <Menu className="nav-icon menu-icon" />
      </div>
    </nav>
  );
};

export default Navbar;