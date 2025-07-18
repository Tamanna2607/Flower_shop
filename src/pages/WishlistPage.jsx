import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeFromWishlist, clearWishlist, addToCart } from '../redux/cartWishlistSlice';
import { Link } from 'react-router-dom';
import './WishlistPage.css';

const WishlistPage = () => {
  const dispatch = useDispatch();
  const items = useSelector((state) => state.cartWishlist.wishlist.items);

  const handleRemoveFromWishlist = (item) => {
    dispatch(removeFromWishlist(item));
  };

  const handleMoveToCart = (item) => {
    dispatch(addToCart({
      id: item.id,
      name: item.name,
      price: item.price,
      image: item.image,
      quantity: 1
    }));
    dispatch(removeFromWishlist(item));
  };

  const handleClearWishlist = () => {
    dispatch(clearWishlist());
  };

  if (items.length === 0) {
    return (
      <div className="wishlist-empty">
        <h2>Your wishlist is empty</h2>
        <Link to="/shopping" className="shop-now-btn">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="wishlist-container">
      <h1>Wishlist</h1>
      <div className="wishlist-items">
        {items.map((item) => (
          <div key={item.id} className="wishlist-item">
            <img src={item.image} alt={item.name} className="wishlist-item-image" />
            <div className="wishlist-item-details">
              <h3>{item.name}</h3>
              <p>Price: ₹{item.price}</p>
              <p>Category: {item.category}</p>
              <div className="wishlist-actions">
                <button 
                  onClick={() => handleMoveToCart(item)}
                  className="move-to-cart-btn"
                >
                  Move to Cart
                </button>
                <button 
                  onClick={() => handleRemoveFromWishlist(item)}
                  className="remove-btn"
                >
                  Remove
                </button>
                <Link to={`/product/${item.id}`} className="view-btn">
                  View Product
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="wishlist-actions">
        <button onClick={handleClearWishlist} className="clear-wishlist-btn">
          Clear Wishlist
        </button>
      </div>
    </div>
  );
};

export default WishlistPage;