import React, { useState, useEffect } from 'react';
import Navbar from '../components/Navbar';
import './Login.css';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';


const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });
   const navigate= useNavigate()

  useEffect(() => {
    // Add floating flowers
    const container = document.querySelector('.flower-container');
    const numFlowers = 5;

    for (let i = 0; i < numFlowers; i++) {
      const flower = document.createElement('div');
      flower.className = 'flower';
      flower.style.left = `${Math.random() * 100}%`;
      flower.style.top = `${Math.random() * 100}%`;
      container.appendChild(flower);
    }

    return () => {
      container.innerHTML = '';
    };
  }, []);

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (isSignUp) {
      console.log('Sign up:', formData);
      setFormData({
        name :'',
       email: '',
    password: '',
    confirmPassword: ''
      });
      toast.success("User Signed In")
      localStorage.setItem('user', JSON.stringify({
        name: formData.name,
        email: formData.email,
        password: formData.password
      }));
    } else {
      const getuser = localStorage.getItem("user");
      const user = getuser ? JSON.parse(getuser) : null;
      if (user && formData.email === user.email && formData.password === user.password) {
        localStorage.setItem('newuser', JSON.stringify({
        email: formData.email,
        password: formData.password
      }));
      navigate("/")
      toast.success("user login successfully")
      setFormData({
        name :'',
       email: '',
    password: '',
    confirmPassword: ''
      });
      }
      else{
        toast.error("Login unsuccessfull")
      }
    }
    
  };
   

  return (
    <div className="login-container">
      <div className="flower-container"></div>
      <div className="login-content">
        <div className="login-form-container">
          <div className="login-form-wrapper">
            <h2>{isSignUp ? 'Create Account' : 'Welcome Back'}</h2>
            <p className="login-subtitle">
              {isSignUp ? 'Join our community today' : 'Sign in to your account'}
            </p>
            
            <form onSubmit={handleSubmit} className="login-form">
              {isSignUp && (
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              <div className="form-group">
                <input
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={formData.password}
                  onChange={handleInputChange}
                  required
                />
              </div>
              
              {isSignUp && (
                <div className="form-group">
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    required
                  />
                </div>
              )}
              
              <button type="submit" className="submit-btn">
                {isSignUp ? 'Create Account' : 'Sign In'}
              </button>
            </form>
            
            <div className="form-footer">
              <p>
                {isSignUp ? 'Already have an account?' : "Don't have an account?"}{' '}
                <button
                  type="button"
                  className="switch-btn"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign In' : 'Sign Up'}
                </button>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;