import React, { useState } from 'react';
import '../styles/components/modal.scss';
import img from '../assets/images/04.jpeg';

const Modal = ({ item, onClose }) => {
  const [quantity, setQuantity] = useState(0); 

  if (!item) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const handleIncrement = () => setQuantity(prev => prev + 1);
  const handleDecrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  const attributes = {
    Size: 'Large',
    Nuts: ['Hazelnut', '2 x Almond', 'Macadamia'],
    Syrups: ['Vanilla', 'Honey'],
    Fruits: ['Banana', '2 x Raspberry'],
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>×</span>
        <div className="modal-header">
          <img className="modal-image" src={img} alt={item.name[0].value} />
          <div className="modal-info"> 
            <div className="modal-title">{item.name[0].value}</div>
            <div className="modal-price">₼  {item.priceSell.toFixed(2)}</div>   
            <div className="quantity-control">
              <button className="quantity-btn" onClick={handleDecrement}>-</button>
              <span className="quantity">{quantity}</span>
              <button className="quantity-btn" onClick={handleIncrement}>+</button>
            </div>
            {item.description[0].value ? (
              <div className="modal-description">{item.description[0].value}</div>
            ) : (
              <ul className="attribute-list">
                {Object.entries(attributes).map(([key, value]) => (
                  <li key={key}>
                    <>{key}:</> {Array.isArray(value) ? value.join(', ') : value}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
