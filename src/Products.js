import React, { useState } from 'react';
import './Products.css';

const productsData = [
  {
    id: 1,
    name: 'Portavia Alto Рюкзак',
    price: 245,
    image: '/1.jfif',
    category: 'Ноутбук 15"',
    isNew: true
  },
  {
    id: 2,
    name: 'Portavia Серия Pro',
    price: 245,
    image: '/2.jfif',
    category: 'Ноутбук 13"',
    isNew: false
  },
  {
    id: 3,
    name: 'Portavia Aria Slim',
    price: 245,
    image: '/3.jfif',
    category: 'Ноутбук 15"',
    isNew: true
  },
  {
    id: 4,
    name: 'Portavia Echo 28L',
    price: 245,
    image: '/4.jfif',
    category: 'Ноутбук 17"',
    isNew: false
  },
  {
    id: 5,
    name: 'Большой компактный слинг',
    price: 245,
    image: '/5.jfif',
    category: 'Слинг сумка',
    isNew: false
  },
  {
    id: 6,
    name: 'Portavia Drift Air',
    price: 245,
    image: '/7.jfif',
    category: 'Ноутбук 13"',
    isNew: true
  }
];

const Products = () => {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  const [selectedSize, setSelectedSize] = useState('Все');
  const [sortBy, setSortBy] = useState('featured');
  const [showFilters, setShowFilters] = useState(false);

  const categories = ['Все', 'Ноутбук 15"', 'Ноутбук 13"', 'Ноутбук 17"', 'Слинг сумка'];
  const sizes = ['Все', '3-4', '4-6'];

  const filteredProducts = productsData.filter(product => {
    if (selectedCategory !== 'Все' && product.category !== selectedCategory) return false;
    return true;
  });

  return (
    <section className="products-section">
      <div className="container">
        <div className="products-layout">
          {/* Sidebar */}
          <aside className={`sidebar ${showFilters ? 'sidebar-open' : ''}`}>
            <div className="sidebar-header">
              <h3>КАТЕГОРИЯ</h3>
              <button 
                className="close-filters"
                onClick={() => setShowFilters(false)}
              >
                ✕
              </button>
            </div>

            <div className="filter-group">
              <div className="filter-title">
                Размер ноутбука
                <span className="filter-toggle">▼</span>
              </div>
              <div className="filter-options">
                {categories.slice(1).map(cat => (
                  <label key={cat} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedCategory === cat}
                      onChange={() => setSelectedCategory(cat === selectedCategory ? 'Все' : cat)}
                    />
                    <span>{cat}</span>
                    <span className="count">9</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-title">
                Объем
                <span className="filter-toggle">▼</span>
              </div>
              <div className="filter-options">
                {sizes.slice(1).map(size => (
                  <label key={size} className="filter-option">
                    <input
                      type="checkbox"
                      checked={selectedSize === size}
                      onChange={() => setSelectedSize(size === selectedSize ? 'Все' : size)}
                    />
                    <span>{size}</span>
                    <span className="count">6</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="filter-group">
              <div className="filter-title">
                Магазин по
                <span className="filter-toggle">▼</span>
              </div>
            </div>
          </aside>

          {/* Products Grid */}
          <div className="products-main">
            <div className="products-header">
              <p className="products-count">Показано {filteredProducts.length} товаров соответствующих вашим фильтрам</p>
              
              <div className="products-controls">
                <div className="filter-tags">
                  {selectedCategory !== 'Все' && (
                    <span className="filter-tag">
                      Ноутбук 15" ✕
                    </span>
                  )}
                  {selectedSize !== 'Все' && (
                    <span className="filter-tag">
                      1 - 2 ✕
                    </span>
                  )}
                </div>
                
                <button 
                  className="mobile-filter-btn"
                  onClick={() => setShowFilters(true)}
                >
                  Фильтры
                </button>

                <select 
                  className="sort-select"
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value)}
                >
                  <option value="featured">Сортировка: Лучшие продажи</option>
                  <option value="price-low">Цена: По возрастанию</option>
                  <option value="price-high">Цена: По убыванию</option>
                  <option value="newest">Новинки</option>
                </select>
              </div>
            </div>

            <div className="products-grid">
              {filteredProducts.map(product => (
                <div key={product.id} className="product-card">
                  {product.isNew && <span className="product-badge">NEW</span>}
                  <div className="product-image">
                    <img src={product.image} alt={product.name} />
                  </div>
                  <div className="product-info">
                    <h3 className="product-name">{product.name}</h3>
                    <p className="product-price">${product.price}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="pagination">
              <button className="pagination-btn">Предыдущая</button>
              <button className="pagination-btn active">1</button>
              <button className="pagination-btn">2</button>
              <span className="pagination-dots">...</span>
              <button className="pagination-btn">5</button>
              <button className="pagination-btn">6</button>
              <button className="pagination-btn">Следующая</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;
