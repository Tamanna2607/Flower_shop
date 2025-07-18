import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, updateQuantity } from '../redux/cartWishlistSlice';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';
import './Cart.css';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cartWishlist.cart.items);
  const total = useSelector(state => state.cartWishlist.cart.total);

  const handleQuantityChange = (id, type) => {
    const item = cartItems.find(item => item.id === id);
    if (item) {
      const newQuantity = type === 'increase' ? item.quantity + 1 : Math.max(1, item.quantity - 1);
      dispatch(updateQuantity({ id, quantity: newQuantity }));
    }
  };

  const handleRemoveItem = (id) => {
    dispatch(removeFromCart({ id }));
  };

  const handleClearCart = () => {
    if (window.confirm('Are you sure you want to clear your cart?')) {
      dispatch(clearCart());
    }
  };

  if (cartItems.length === 0) {
    return (
      <div className="cart-container">
        <Navbar />
        <div className="cart-empty">
          <div className="cart-empty-content">
            <h2>Your Cart is Empty 🌸</h2>
            <p>Add some beautiful flowers to your cart!</p>
            <Link to="/shopping" className="continue-shopping-btn">
              <span className="emoji">🌸</span> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="cart-container">
      <Navbar />
      <button className="clear-cart-btn" onClick={handleClearCart}>
          Clear Cart
        </button>
      <div className="cart-items">
        <div className="cart-content">
          <h1 className="cart-title">Your Shopping Cart</h1>
          <div className="cart-items">
            {cartItems.map(item => (
              <div key={item.id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.image} alt={item.name} />
                </div>
                <div className="cart-item-details">
                  <div className="product-info">
                    <div className="product-name">{item.name}</div>
                    <div className="product-price">₹{item.price}</div>
                    <div className="product-description">{item.description}</div>
                    <div className="reviews-section">
                      <span className="rating-star">⭐</span>
                      <span>{item.rating} ({item.reviews} reviews)</span>
                    </div>
                  </div>
                  <div className="quantity-section">
                    <div className="quantity-display">{item.quantity}</div>
                  </div>
                  <button 
                    className="remove-btn" 
                    onClick={() => handleRemoveItem(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
          <div className="cart-total">
            <h3>Total: ₹{total}</h3>
          </div>
          <div className="checkout-btn">
            <Link to="/checkout" className="checkout-link">
              Proceed to Checkout
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
