import React, { useContext, useState } from 'react';
import './CSS/ShopCategory.css';
import { ShopContext } from '../Context/ShopContext';
import dropdown_icon from '../Components/Assets/dropdown_icon.png';
import Item from '../Components/Item/Item';

const ShopCategory = (props) => {
  const { all_product } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState('default');
  const [sortText, setSortText] = useState('Sort by:');
  const [showDropdown, setShowDropdown] = useState(false); // Define showDropdown state

  // Function to handle sorting
  const handleSort = (sortByValue) => {
    setSortBy(sortByValue);
    setShowDropdown(false); // Close dropdown when sorting option is selected

    // Set the text representing the sorting option
    if (sortByValue === 'name') {
      setSortText('Sort by: Name');
    } else if (sortByValue === 'price') {
      setSortText('Sort by: Price');
    }
  };

  // Sorting logic based on sortBy value
  const sortedProducts = [...all_product].filter((item) => props.category === item.category);
  if (sortBy === 'name') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'price') {
    sortedProducts.sort((a, b) => a.new_price - b.new_price);
  }

  return (
    <div className='shop-category'>
      <img className='shopcategory-banner' src={props.banner} alt="" />
      <div className="shopcategory-indexSort">
        <p>
          <span>Showing 1-12</span> out of 36 products
        </p>
        <div className={`shopcategory-sort ${showDropdown ? 'show-more-buttons' : ''}`}>
          {sortText}  
          <button onClick={() => handleSort('name')}>Name</button>
          <button onClick={() => handleSort('price')}>Price</button>
          <img 
            src={dropdown_icon} 
            alt="Dropdown" 
            onClick={() => setShowDropdown(!showDropdown)} // Toggle dropdown visibility
          />
        </div>
      </div>
      <div className="shopcategory-products">
        {sortedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      <div className="shopcategory-loadmore">
        Explore More
      </div>
    </div>
  );
};

export default ShopCategory;
