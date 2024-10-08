import React, { useContext, useState } from 'react';
import './Productall.css';
import { ShopContext } from '../../../Context/ShopContext';
import Item from '../../Item/Item';
import dropdown_icon from '../../Assets/dropdown_icon.png'

const ProductAll = () => {
  const { all_product } = useContext(ShopContext);
  const [sortBy, setSortBy] = useState('default');
  const [sortText, setSortText] = useState('Sort by:');
  const [showDropdown, setShowDropdown] = useState(false); 

  // Function to handle sorting
  const handleSort = (sortByValue) => {
    setSortBy(sortByValue);
    setShowDropdown(false); 

    if (sortByValue === 'name') {
      setSortText('Sort by: Name');
    } else if (sortByValue === 'price') {
      setSortText('Sort by: Price');
    }
  };

  // Sorting logic based on sortBy value
  const sortedProducts = [...all_product];
  if (sortBy === 'name') {
    sortedProducts.sort((a, b) => a.name.localeCompare(b.name));
  } else if (sortBy === 'price') {
    sortedProducts.sort((a, b) => a.new_price - b.new_price);
  }

  return (
    <div className='product-all'>
      <div className="productall-indexSort">
        <p>
          <span>Showing 1-{all_product.length}</span> out of {all_product.length} products
        </p>
        <div className={`productall-sort ${showDropdown ? 'show-more-buttons' : ''}`}>
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
      <div className="productall-products">
        {sortedProducts.map((item, i) => (
          <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price} />
        ))}
      </div>
      {/* Load more button */}
    </div>
  );
};

export default ProductAll;
