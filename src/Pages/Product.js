import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Product() {
  const imageArr = [{
    image:"https://th.bing.com/th/id/OIP.4AAR3BZsEpiuVUy8ZUF1XQAAAA?w=159&h=176&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category:"Ball Valve"
    
  },{
    image:"https://th.bing.com/th/id/OIP.2g7Uh93_TGbe20zbNOna8wEyDM?w=253&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category:"Check valve"
  },{
    image:"https://th.bing.com/th/id/OIP.gyWB0JLMrKK7UmZRu_FykQHaHa?w=178&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7",
    category:"Butterfly valve"
  },
  {
    image:"https://th.bing.com/th?id=OIP.RKCAyASMLHnV6zYsPFJtKwHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category:"Butterfly valve"
  },
  {
    image:"https://th.bing.com/th?id=OIP.y--qBUel4rR69a9XiBU1nwHaE8&w=306&h=204&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category:"Check valve"
  },
  {
    image:"https://th.bing.com/th?id=OIP.wpqj3BLuXGVOZhU5t1B80QHaHa&w=250&h=250&c=8&rs=1&qlt=90&o=6&dpr=1.3&pid=3.1&rm=2",
    category:"Ball Valve"
  }
   ]; // your image array
  const [image, setImage] = useState(imageArr);
  const [animate, setAnimate] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState(''); 
  const navigate = useNavigate(); 

  const categoryPagePaths = {
    'Ball Valve': '/BallValve',
    'Check valve': '/CheckValve',
    'Butterfly valve': '/ButterflyValve',
  };

  const handleFilter = (category) => {
    if (category === 'ALL') {
      setImage(imageArr);
    } else {
      setImage(imageArr.filter((value) => value.category === category));
    }
    setAnimate(true);
    setTimeout(() => {
      setAnimate(false);
    }, 500);
  };

  const handleViewProduct = (category) => {
    setSelectedCategory(category);
    const pagePath = categoryPagePaths[category];
    navigate(pagePath);
  };

  return (
    <div className='product-container'>
      <div id='product2' className='category-buttons'>
        <button onClick={() => handleFilter('ALL')} className='btn'>ALL</button>
        <button onClick={() => handleFilter('Ball Valve')} className='btn'>Ball valve</button>
        <button onClick={() => handleFilter('Check valve')} className='btn'>Check valve</button>
        <button onClick={() => handleFilter('Butterfly valve')} className='btn'>Butterfly valve</button>
      </div>
      <h2>Selected Category: {selectedCategory}</h2>
      <div className={`product-grid ${animate ? 'animate' : ''}`}>
        {image.map((value) => {
          return (
            <div key={value.image} className="product-item">
              <img src={value.image} className="product-image" alt='' />
              <div className="product-info">
                <h2 className="product-name">{value.category}</h2>
                <button
                  className="btn"
                  onClick={() => handleViewProduct(value.category)}
                >
                  View Product
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Product;