import React from 'react';
import '../styles/components/product-item.scss';
import defaultImg from '../assets/images/04.jpeg';
const ProductItem = ({ item, onClick }) => {
  return (
    <div className="menu-item" onClick={() => onClick(item)}>
    <div className="image-container">
      <p className="price">${item.priceSell.toFixed(2)}</p>
      <img src={defaultImg} alt={item.name[0].value} /> 
    </div>
    <div className="details">
      <h3 className="name">{item.name[0].value}</h3>
    </div>
  </div>
  );
};

export default ProductItem;
