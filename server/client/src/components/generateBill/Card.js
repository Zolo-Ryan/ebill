import React, { useState } from "react";
import "./Card.css";

const Card = ({ product, onQuantityChange }) => {
  const [count, setCount] = useState(0);
//   console.log(product)

  const changeCount = (val) => {
    if (val <= product.quantity) {
      setCount(val);
      onQuantityChange(product._id, val);
    } else {
      setCount(product.quantity);
      onQuantityChange(product._id, product.quantity);
    }
  };

  return (
    <div className="card-new">
      <img src={product.image.filePath} alt="Product" />
      <div className="card-content">
        <h2>{product.name}</h2>
        <div className="price">${product.price}</div>
        <div className="quantity-left">{product.quantity} left</div>
        <div className="description">{product.description}</div>
        <div className="category">Category: {product.category}</div>
        <div className="quantity-select">
          <label htmlFor={`quantity-${product._id}`}>Select Quantity:</label>
          <input
            className="quantities"
            type="number"
            id={`quantity-${product._id}`}
            name={`quantity-${product._id}`}
            min="0"
            value={count}
            onChange={(e) => changeCount(parseInt(e.target.value))}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
