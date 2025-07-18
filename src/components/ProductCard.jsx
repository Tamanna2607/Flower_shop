import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishlist, removeFromWishlist, addToCart } from '../redux/cartWishlistSlice';
import { FaHeart, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const wishlist = useSelector((state) => state.cartWishlist.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product.id);
  const [quantity, setQuantity] = useState(1);

  const handleQuantityChange = (e) => {
    const value = Math.max(1, parseInt(e.target.value) || 1);
    setQuantity(value);
  };

  const handleAddToCart = () => {
    dispatch(addToCart({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity: quantity
    }));
    navigate('/cart');
  };

  const handleWishlist = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isWishlisted) {
      dispatch(removeFromWishlist(product));
    } else {
      dispatch(addToWishlist(product));
    }
  };

  return (
    <div className="product-card-floral-minimal" onClick={() => navigate(`/product/${product.id}`)}>
      <div className="product-card-header">
        <button
          className={`wishlist-heart-floral ${isWishlisted ? 'active' : ''}`}
          onClick={handleWishlist}
          aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
        >
          {isWishlisted ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
      <div className="product-image-floral">
        <img src={product.image} alt={product.name} className="product-image-floral-img" />
      </div>
      <div className="product-info-floral-minimal">
        <div className="product-title-row">
          <span className="product-flower-icon" role="img" aria-label="flower">🌸</span>
          <h3 className="product-name-floral">{product.name}</h3>
        </div>
        <div className="product-price-floral">₹{product.price}</div>
      </div>
    </div>
  );
};

export default ProductCard;