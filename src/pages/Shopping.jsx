import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useLocation, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, addToWishlist, removeFromWishlist } from '../redux/cartWishlistSlice';
import { toast } from 'react-toastify';
import Navbar from '../components/Navbar';
import products from '../data/products';
import ProductCard from '../components/ProductCard';
import './Shopping.css';

const Shopping = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [sortBy, setSortBy] = useState('featured');
  const [priceRange, setPriceRange] = useState('all');

  // Get category from URL params
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const category = urlParams.get('category');
    if (category) {
      setSelectedCategory(category);
    }
  }, [location.search]);

  // Get unique categories from products
  const categories = [...new Set(products.map(product => product.category))];

  // Get category from URL params
  const urlParams = new URLSearchParams(location.search);
  const categoryParam = urlParams.get('category');
  
  // Set selectedCategory from URL if available
  useEffect(() => {
    if (categoryParam) {
      setSelectedCategory(categoryParam.toLowerCase());
    }
  }, [location.search]);

  // Filter products based on selected category
  const filteredProducts = products.filter(product => {
    if (selectedCategory === 'all') return true;
    return product.category.toLowerCase() === selectedCategory;
  });

  const sortedProducts = [...filteredProducts].sort((a, b) => {
    switch (sortBy) {
      case 'price-low':
        return a.price - b.price;
      case 'price-high':
        return b.price - a.price;
      case 'rating':
        return b.rating - a.rating;
      case 'name':
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star filled">★</span>);
    }

    if (hasHalfStar) {
      stars.push(<span key="half" className="star half">★</span>);
    }

    const emptyStars = 5 - Math.ceil(rating);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty">★</span>);
    }

    return stars;
  };

  const dispatch = useDispatch();
  const wishlist = useSelector((state) => state.cartWishlist.wishlist.items);

  return (
    <div className="shopping-container">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="breadcrumb">
        <div className="container">
          <span>Home</span>
          <span className="separator">›</span>
          <span>
            {selectedCategory === 'all' ? 'All Products' : 
             selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}
          </span>
        </div>
      </div>

      <div className="shopping-content">
        <div className="container">
          {/* Header */}
          <div className="shopping-header">
            <div className="header-left">
              <h1>
                {selectedCategory === 'all' ? 'All Products' : 
                 `${selectedCategory.charAt(0).toUpperCase() + selectedCategory.slice(1)}'s Collection`}
              </h1>
              <p className="results-count">
                Showing {sortedProducts.length} products
              </p>
            </div>
            
            {/* Filters */}
            <div className="filters-container">
              <div className="filter-group">
                <label>Sort by:</label>
                <select 
                  value={sortBy} 
                  onChange={(e) => setSortBy(e.target.value)}
                  className="filter-select"
                >
                  <option value="featured">Featured</option>
                  <option value="price-low">Price: Low to High</option>
                  <option value="price-high">Price: High to Low</option>
                  <option value="rating">Customer Rating</option>
                  <option value="name">Name A-Z</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="category-filters">
            <button 
              className={`filter-btn ${selectedCategory === 'all' ? 'active' : ''}`}
              onClick={() => {
                setSelectedCategory('all');
                navigate('/shopping');
              }}
            >
              🌸 All ({products.length})
            </button>
            {categories.map((category) => (
              <button 
                key={category}
                className={`filter-btn ${selectedCategory === category.toLowerCase() ? 'active' : ''}`}
                onClick={() => {
                  setSelectedCategory(category.toLowerCase());
                  navigate(`/shopping?category=${category.toLowerCase()}`);
                }}
              >
                🌸 {category} ({products.filter(p => p.category === category).length})
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="product-grid">
            {sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {sortedProducts.length === 0 && (
            <div className="no-products">
              <div className="no-products-icon">📦</div>
              <h3>No products found</h3>
              <p>Try adjusting your filters or browse other categories</p>
              <button 
                className="browse-all-btn"
                onClick={() => setSelectedCategory('all')}
              >
                Browse All Products
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Shopping;