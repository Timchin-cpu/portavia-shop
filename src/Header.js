import React, { useState } from 'react';
import './Header.css';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <div className="announcement-bar">
        Бесплатная доставка при заказе от $50 — доставка не требуется. УЗНАТЬ БОЛЬШЕ
      </div>
      <header className="header">
        <div className="container">
          <div className="header-content">
            <div className="logo">Portavia</div>
            
            <nav className={`nav ${isMobileMenuOpen ? 'nav-open' : ''}`}>
              <a href="#home" className="nav-link">Главная</a>
              <a href="#shop" className="nav-link">Магазин</a>
              <a href="#new" className="nav-link">Новинки</a>
              <a href="#collections" className="nav-link">Коллекции</a>
              <a href="#about" className="nav-link">О нас</a>
            </nav>

            <div className="header-actions">
              <button className="icon-btn" aria-label="Поиск">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <circle cx="9" cy="9" r="7" stroke="currentColor" strokeWidth="1.5"/>
                  <path d="M14 14L18 18" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                </svg>
              </button>
              <button className="icon-btn" aria-label="Корзина">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                  <path d="M3 3H5L5.4 5M7 13H15L17 5H5.4M7 13L5.4 5M7 13L5.5 16H16.5L15 13M9 17C9 17.5523 8.55228 18 8 18C7.44772 18 7 17.5523 7 17C7 16.4477 7.44772 16 8 16C8.55228 16 9 16.4477 9 17ZM16 17C16 17.5523 15.5523 18 15 18C14.4477 18 14 17.5523 14 17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
              <button 
                className="menu-toggle"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Меню"
              >
                <span></span>
                <span></span>
                <span></span>
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
