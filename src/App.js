import React from 'react';
import Header from './Header';
import Hero from './Hero';
import Products from './Products';
import Featured from './Featured';
import Blog from './Blog';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Hero />
        <Products />
        <Featured />
        <Blog />
      </main>
      <Footer />
    </div>
  );
}

export default App;
