import React from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import './Profile.css';

const Profile = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));

  if (!user) {
    navigate('/login');
    return null;
  }

  const fullName = user.name ? user.name : "No Name";
  const initials = fullName
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();

  return (
    <>
      <Navbar />
      <div className="profile-container">
        <div className="profile-header">
          <div className="profile-avatar">
            <div className="avatar-placeholder">
              {initials}
            </div>
          </div>
          <div className="profile-info-header">
            <h1>{fullName}</h1>
            <p className="profile-email">{user.email}</p>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>Personal Information</h2>
            <div className="profile-details">
              <div className="detail-item">
                <span className="detail-label">Full Name:</span>
                <span className="detail-value">{user.name}</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">Email:</span>
                <span className="detail-value">{user.email}</span>
              </div>
              {user.phone && (
                <div className="detail-item">
                  <span className="detail-label">Phone:</span>
                  <span className="detail-value">{user.phone}</span>
                </div>
              )}
              {user.address && (
                <div className="detail-item">
                  <span className="detail-label">Address:</span>
                  <span className="detail-value">{user.address}</span>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
