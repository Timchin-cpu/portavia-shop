import React from 'react';
import './Blog.css';

const Blog = () => {
  const articles = [
    {
      id: 1,
      title: 'Как упаковаться умно для 3-дневной рабочей поездки',
      description: 'Узнайте, как подойти к упаковке вашего рюкзака с умом, чтобы опыт был таким же легким, как путь.',
      image: '/8.jfif',
      author: 'Sean Tui',
      date: '5 мин'
    },
    {
      id: 2,
      title: '5 способов держать ваше техническое снаряжение организованным в пути',
      description: 'Забудьте о запутанных кабелях и блуждающих зарядках — вот надежные способы держать вашу технику организованной.',
      image: '/8.jfif',
      author: 'Taylor K.',
      date: 'TECH TALK'
    },
    {
      id: 3,
      title: 'Почему расширяемые рюкзаки — будущее городских путешествий',
      description: 'Откройте для себя, как расширяемые рюкзаки революционизируют способ, которым мы носим наши вещи.',
      image: '/8.jfif',
      author: 'Travel Tips',
      date: '8 мин'
    }
  ];

  return (
    <section className="blog-section">
      <div className="container">
        <div className="blog-header">
          <h2 className="blog-title">НОВОСТИ И СТАТЬИ</h2>
          <button className="view-more-btn">
            ПОСМОТРЕТЬ БОЛЬШЕ
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M6 12L10 8L6 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>

        <div className="blog-grid">
          {articles.map(article => (
            <article key={article.id} className="blog-card">
              <div className="blog-image">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="blog-content">
                <h3 className="blog-card-title">{article.title}</h3>
                <p className="blog-description">{article.description}</p>
                <div className="blog-meta">
                  <span>{article.author}</span>
                  <span className="blog-dot">•</span>
                  <span>{article.date}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;
