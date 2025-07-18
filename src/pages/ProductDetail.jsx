import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, removeFromWishlist } from '../redux/cartWishlistSlice';
import { FaHeart, FaRegHeart, FaStar, FaTruck, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import products from '../data/products';
import './ProductDetail.css';

const ProductDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const [selectedImage, setSelectedImage] = useState(0);

  const product = products.find(p => p.id === parseInt(id));
  const wishlist = useSelector((state) => state.cartWishlist.wishlist.items);
  const isWishlisted = wishlist.some((item) => item.id === product?.id);

  useEffect(() => {
    if (product) {
      setLoading(false);
    }
  }, [product]);

  const handleWishlistToggle = () => {
    if (isWishlisted) {
      dispatch(removeFromWishlist(product));
      toast.success('Removed from wishlist! 💔');
    } else {
      dispatch(addToWishlist(product));
      toast.success('Added to wishlist! ❤️');
    }
  };

  const handleAddToCart = () => {
    const productToAdd = {
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      quantity
    };

    dispatch(addToCart(productToAdd));
    toast.success('Added to cart successfully! 🛒');
  };

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="star filled" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="star half" />);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="star empty" />);
    }

    return stars;
  };

  const getProductDescription = (product) => {
    const descriptions = {
      "Red Rose Bouquet": {
        main: "A breathtaking collection of 12 premium red roses, each carefully selected for its perfect bloom and vibrant color. These roses symbolize deep love and passion, making them the perfect choice for romantic occasions, anniversaries, or expressing heartfelt emotions.",
        features: [
          "12 premium red roses with lush green foliage",
          "Long-lasting freshness with proper care",
          "Perfect for romantic occasions and anniversaries",
          "Includes care instructions for extended bloom life",
          "Elegant presentation with decorative wrapping"
        ],
        care: "Keep in a cool place, change water every 2-3 days, trim stems at an angle"
      },
      "Tropical Orchid": {
        main: "Exquisite tropical orchid arrangement featuring vibrant, exotic blooms that bring a touch of paradise to any space. These stunning orchids are known for their long-lasting beauty and elegant appearance, perfect for modern home decor or as a sophisticated gift.",
        features: [
          "Exotic tropical orchid variety",
          "Long-lasting blooms (2-3 weeks)",
          "Perfect for modern home decor",
          "Low maintenance and easy care",
          "Comes in elegant ceramic pot"
        ],
        care: "Place in bright, indirect light, water weekly, avoid direct sunlight"
      },
      "Sunflower Bundle": {
        main: "Bright and cheerful sunflower bundle that radiates happiness and positivity. These golden blooms bring warmth and sunshine to any room, perfect for brightening someone's day or adding a touch of summer to your home decor.",
        features: [
          "Fresh, vibrant sunflowers",
          "Cheerful and uplifting presence",
          "Perfect for brightening any space",
          "Long-lasting blooms",
          "Natural, rustic charm"
        ],
        care: "Place in bright light, change water daily, trim stems regularly"
      },
      "Lavender Bouquet": {
        main: "Delicate lavender bouquet with its signature soothing fragrance and calming purple hues. This beautiful arrangement creates a peaceful, serene ambiance perfect for relaxation spaces, meditation rooms, or as a thoughtful gift for someone who needs tranquility.",
        features: [
          "Soothing lavender fragrance",
          "Calming purple color palette",
          "Perfect for relaxation spaces",
          "Dried lavender can be preserved",
          "Elegant, minimalist design"
        ],
        care: "Keep in cool, dry place, can be dried for long-term display"
      },
      "Peony Collection": {
        main: "Luxurious peony collection featuring rich, velvety petals in stunning colors. These premium blooms are known for their opulent appearance and romantic symbolism, making them perfect for special occasions, weddings, or as a sophisticated gift for someone special.",
        features: [
          "Luxurious peony blooms",
          "Rich, velvety petals",
          "Perfect for special occasions",
          "Romantic and elegant appearance",
          "Premium quality selection"
        ],
        care: "Keep in cool environment, change water every 2 days, avoid direct heat"
      }
    };

    return descriptions[product.name] || {
      main: product.description,
      features: [
        "Premium quality flowers",
        "Fresh and long-lasting",
        "Beautiful presentation",
        "Perfect for any occasion",
        "Care instructions included"
      ],
      care: "Keep in cool place, change water regularly, trim stems as needed"
    };
  };

  if (loading) {
    return (
      <div className="product-detail-container">
        <Navbar />
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Loading beautiful flowers... 🌸</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="product-detail-container">
        <Navbar />
        <div className="container product-not-found">
          <h2>Product Not Found 🌸</h2>
          <p>The flower you're looking for doesn't exist in our garden. Please check back later!</p>
          <Link to="/shopping" className="back-btn">
            <span className="emoji">🌸</span> Back to Shopping
          </Link>
        </div>
      </div>
    );
  }

  const productInfo = getProductDescription(product);

  return (
    <div className="product-detail-container-floral">
      <Navbar />
      <div className="container">
        <div className="product-detail-floral-card">
          {/* Main Product Image */}
          <div className="product-detail-image-floral">
            <img src={product.image} alt={product.name} className="product-detail-img-floral" />
            <button
              className={`wishlist-btn-floral ${isWishlisted ? 'active' : ''}`}
              onClick={handleWishlistToggle}
              aria-label={isWishlisted ? 'Remove from wishlist' : 'Add to wishlist'}
            >❤️
              {isWishlisted ? <FaHeart /> : <FaRegHeart />}
            </button>
          </div>
          {/* Name, Price, Rating */}
          <div className="product-detail-header-floral">
            <div className="product-detail-title-row">
              <span className="product-detail-flower-icon" role="img" aria-label="flower">🌸</span>
              <h1 className="product-detail-title-floral">{product.name}</h1>
            </div>
            <div className="product-detail-price-floral">₹{product.price}</div>
            <div className="product-detail-rating-floral">
              {renderStars(product.rating)}
              <span className="product-detail-rating-text">({product.rating} out of 5)</span>
            </div>
          </div>
          {/* Description */}
          <div className="product-detail-description-floral">
            <h3>About This Flower 🌸</h3>
            <p>{productInfo.main}</p>
          </div>
          {/* Features */}
          <div className="product-detail-features-floral">
            <h3>Key Features ✨</h3>
            <ul>
              {productInfo.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </div>
          {/* Quantity and Add to Cart */}
          <div className="product-detail-actions-floral">
            <div className="product-detail-quantity-selector">
              <label>Quantity:</label>
              <div className="product-detail-quantity-controls">
                <button 
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="product-detail-quantity-btn"
                >
                  -
                </button>
                <span className="product-detail-quantity-display">{quantity}</span>
                <button 
                  onClick={() => setQuantity(quantity + 1)}
                  className="product-detail-quantity-btn"
                >
                  +
                </button>
              </div>
            </div>
            <button 
              onClick={handleAddToCart}
              className="product-detail-add-to-cart-btn"
            >
              <FaLeaf /> Add to Cart
            </button>
          </div>
          {/* Reviews (Stars) */}
          <div className="product-detail-reviews-floral">
            <div className="product-detail-reviews-stars">
              {renderStars(product.rating)}
            </div>
            <div className="product-detail-reviews-text">
              <span>{product.rating} / 5.0</span>
            </div>
          </div>
          {/* Care Instructions & Note */}
          <div className="product-detail-care-floral">
            <h3>Care Instructions 🌱</h3>
            <p>{productInfo.care}</p>
          </div>
          <div className="product-detail-note-floral">
            <span>Note: All flowers are handpicked and delivered fresh for every order. 🌷</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;