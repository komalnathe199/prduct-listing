import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';
import './ProductCard.css';

const ProductCard = ({ imageUrl, productName, description, price, originalPrice, discount }) => {
  const discountPercentage = Math.round(((originalPrice - price) / originalPrice) * 100);

  return (
    <section className="product-card">
      <div className="main-card-class">
        <img src={imageUrl} alt={productName} className="card-img" />
        <div>
          <div className="d-flex justify-content-between">
            <h4 className="product-name">{productName}</h4>
            <FontAwesomeIcon icon={faHeart} className="heart-icon" />
          </div>
          <p className="product-desc">{description}</p>
          <div className="d-flex align-items-center">
            <h4 className="product-name me-2">₹{price}</h4>
            {originalPrice && (
              <>
                <p className="price-sub me-3">₹{originalPrice}</p>
                <p className="offiprice">{discount || `${discountPercentage}% OFF`}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductCard;
