import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchProduct } from '../api/productApi';
import { setProductData } from '../features/productSlice';
import CategoryTabs from './CategoryTabs';
import ProductItem from './ProductItem';
import Modal from './Modal';

const Product = () => {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.product.categories);
  const selectedCategoryId = useSelector((state) => state.product.selectedCategoryId);
  const [selectedItem, setSelectedItem] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await dispatch(fetchProduct());
      if (response.payload) {
        dispatch(setProductData(response.payload));
      }
    };
    fetchData();
  }, [dispatch]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const filteredItems = selectedCategoryId === null
    ? categories
    : categories?.filter((category) => category.id === selectedCategoryId);

  return (
    <div className="sidebar">
      <h1>Menu</h1>
      <CategoryTabs />
      <div className="menu-items">
        {filteredItems?.length > 0 && filteredItems.map((category) => (
          <div key={category.id} className="category-section">
            <h2 className="category-name">{category.name[0]?.value}</h2>
            <div className="items-list">
              {category.menuItems?.map((item) => (
                <ProductItem key={item.id} item={item} onClick={handleItemClick} />
              ))}
            </div>
          </div>
        ))}
      </div>
      {selectedItem && (
        <Modal
          item={selectedItem}
          onClose={handleCloseModal}
        />
      )}
    </div>
  );
};

export default Product;
