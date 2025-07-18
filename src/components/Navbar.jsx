import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();

  const categories = [
    { name: 'Flowers', emoji: '🌹' },
    { name: 'Vases', emoji: '🪴' },
    { name: 'Tools', emoji: '🛠️' },
    { name: 'Gifts', emoji: '🎁' }
  ];

  const storedUser = localStorage.getItem('user');
  const user = JSON.parse(storedUser);

  const handleLogout = () => {
    localStorage.removeItem('newuser');
    setShowDropdown(false);
    navigate('/login');
  };

  return (
    <nav className="navbar">
      
      <div className="navbar-brand">
        <span className="navbar-logo">🌸</span>
        <h1 className="shop-title">Tamanna Flower Shop</h1>
      </div>

      <div className="navbar-links">
        <Link to="/" className="nav-link">Home</Link>

        <div className="dropdown">
          <button className="nav-link dropdown-btn">Categories</button>
          <div className="dropdown-content">
            {categories.map((category) => (
              <Link 
                key={category.name}
                to={`/shopping?category=${category.name.toLowerCase()}`}
                className="dropdown-item"
              >
                <span className="category-emoji">{category.emoji}</span>
                {category.name}
              </Link>
            ))}
          </div>
        </div>

        <Link to="/wishlist" className="nav-link">
          ❤️ Wishlist
        </Link>

        <Link to="/cart" className="nav-link">
          🛒 Cart
        </Link>

        {!user ? (
          <Link to="/login" className="login-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M20 21V19C20 17.9391 19.5786 16.9217 18.8284 16.1716C18.0783 15.4214 17.0609 15 16 15H8C6.93913 15 5.92172 15.4214 5.17157 16.1716C4.42143 16.9217 4 17.9391 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Login
          </Link>
        ) : (
          <div className="profile-dropdown">
            <button onClick={() => setShowDropdown(!showDropdown)} className="profile-icon">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2" />
                <path d="M4 21V19C4 17.3431 5.34315 16 7 16H17C18.6569 16 20 17.3431 20 19V21" stroke="currentColor" strokeWidth="2" />
              </svg>
            </button>
            {showDropdown && (
              <div className="dropdown-menu">
                <Link to="/profile">Profile</Link>
                <button onClick={handleLogout}>Logout</button>
              </div>
            )}
          </div>
        )}
      </div>

      <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
          <path d="M3 6H21M3 12H21M3 18H21" stroke="#6C1D45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </button>

      <div className={`mobile-menu ${isMobileMenuOpen ? 'active' : ''}`}>
        <Link to="/" className="mobile-menu-link">
          <span className="category-emoji">🏠</span> Home
        </Link>
        {categories.map((category) => (
          <Link 
            key={category.name}
            to={`/shopping?category=${category.name.toLowerCase()}`}
            className="mobile-menu-link"
          >
            <span className="category-emoji">{category.emoji}</span> {category.name}
          </Link>
        ))}
        <Link to="/wishlist" className="mobile-menu-link">
          <span className="category-emoji">❤️</span> Wishlist
        </Link>
        <Link to="/cart" className="mobile-menu-link">
          <span className="category-emoji">🛒</span> Cart
        </Link>
        {!user ? (
          <Link to="/login" className="mobile-menu-link">
            <span className="category-emoji">👤</span> Login
          </Link>
        ) : (
          <>
            <Link to="/profile" className="mobile-menu-link">
              <span className="category-emoji">👤</span> Profile
            </Link>
            <button onClick={handleLogout} className="mobile-menu-link logout-btn">
              <span className="category-emoji">🚪</span> Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
