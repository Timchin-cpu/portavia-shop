import React from 'react';
import './Featured.css';

const Featured = () => {
  const featuredProducts = [
    {
      id: 1,
      name: 'Portavia Activity 28L',
      price: 245,
      image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400&h=400&fit=crop'
    },
    {
      id: 2,
      name: 'Большой компактный слинг',
      price: 245,
      image: 'https://images.unsplash.com/photo-1622560480605-d83c853bc5c3?w=400&h=400&fit=crop'
    },
    {
      id: 3,
      name: 'Portavia Drift Air',
      price: 245,
      image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=400&h=400&fit=crop'
    }
  ];

  return (
    <section className="featured-section">
      <div className="container">
        <div className="featured-content">
          <div className="featured-info">
            <h2 className="featured-title">
              ПОДНИМИТЕ СПОСОБ<br />ПЕРЕНОСКИ
            </h2>
            <p className="featured-description">
              Portavia объединяет профессиональную утилитарность и удобство<br />
              путешествий, не нужно носить две сумки.
            </p>
            <ul className="featured-list">
              <li>Дизайн для работы и путешествий без усилий</li>
              <li>Расширяемые компрессионные стороны для гибкой емкости</li>
              <li>Специализированные отделения с подкладкой</li>
              <li>Легкий, водостойкий экстерьер</li>
              <li>Доступна прочная пожизненная гарантия</li>
            </ul>
          </div>

          <div className="featured-images">
            <img 
              src="https://images.unsplash.com/photo-1622560480654-d96214fdc887?w=800&h=600&fit=crop" 
              alt="Featured backpacks"
              className="featured-main-img"
            />
          </div>
        </div>

        <div className="featured-products">
          {featuredProducts.map(product => (
            <div key={product.id} className="featured-product">
              <div className="featured-product-image">
                <img src={product.image} alt={product.name} />
              </div>
              <h3 className="featured-product-name">{product.name}</h3>
              <p className="featured-product-price">${product.price}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Featured;
