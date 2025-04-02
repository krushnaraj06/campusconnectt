import React, { useState } from 'react';
import { Search, ShoppingBag, MessageSquare, Filter } from 'lucide-react';
import './MarketMingle.css';

const MarketMingle = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const products = [
    {
      id: 1,
      name: 'Data Structures Textbook',
      category: 'Books',
      price: 45,
      condition: 'Like New',
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=300',
      seller: 'John Doe'
    },
    {
      id: 2,
      name: 'HP Laptop',
      category: 'Electronics',
      price: 450,
      condition: 'Good',
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?auto=format&fit=crop&w=300',
      seller: 'Jane Smith'
    },
    {
      id: 3,
      name: 'Study Desk',
      category: 'Furniture',
      price: 80,
      condition: 'Excellent',
      image: 'https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?auto=format&fit=crop&w=300',
      seller: 'Mike Johnson'
    }
  ];

  const filteredProducts = selectedCategory === 'all'
    ? products
    : products.filter(product => product.category.toLowerCase() === selectedCategory);

  return (
    <div className="market-mingle">
      <section className="market-hero">
        <h1>Buy & Sell in Your College Community</h1>
        <p>Find great deals on textbooks, electronics, furniture, and more!</p>
        
        <div className="search-filters">
          <div className="search-bar">
            <Search size={20} />
            <input
              type="text"
              placeholder="Search for items..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          
          <div className="category-filter">
            <Filter size={20} />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              <option value="all">All Categories</option>
              <option value="books">Books</option>
              <option value="electronics">Electronics</option>
              <option value="furniture">Furniture</option>
              <option value="fashion">Fashion</option>
            </select>
          </div>
        </div>
      </section>

      <section className="marketplace">
        <div className="marketplace-header">
          <h2>Featured Items</h2>
          <button className="sell-button">
            <ShoppingBag size={20} />
            Sell an Item
          </button>
        </div>

        <div className="product-grid">
          {filteredProducts.map(product => (
            <div key={product.id} className="product-card">
              <img src={product.image} alt={product.name} className="product-image" />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p className="price">${product.price}</p>
                <p className="condition">{product.condition}</p>
                <p className="seller">Sold by {product.seller}</p>
                <div className="product-actions">
                  <button className="message-button">
                    <MessageSquare size={16} />
                    Message
                  </button>
                  <button className="buy-button">Buy Now</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="selling-guide">
        <h2>How to Sell</h2>
        <div className="guide-steps">
          <div className="step">
            <div className="step-number">1</div>
            <h3>Take Photos</h3>
            <p>Take clear photos of your item from multiple angles</p>
          </div>
          <div className="step">
            <div className="step-number">2</div>
            <h3>Set Price</h3>
            <p>Research similar items and set a competitive price</p>
          </div>
          <div className="step">
            <div className="step-number">3</div>
            <h3>List Item</h3>
            <p>Create a detailed listing with all relevant information</p>
          </div>
          <div className="step">
            <div className="step-number">4</div>
            <h3>Connect</h3>
            <p>Chat with buyers and arrange safe meetups</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default MarketMingle;