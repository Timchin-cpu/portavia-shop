import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text">
            <p className="hero-breadcrumb">Главная / Все товары</p>
            <h1 className="hero-title">
              ВСЕ РЮКЗАКИ.<br />
              ВСЕ ИСТОРИИ.
            </h1>
            <p className="hero-description">
              Созданы для авантюристов и городских кочевников, наши рюкзаки балансируют<br />
              между стилем и прочностью, потому что жизнь — это не путешествие налегке.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
