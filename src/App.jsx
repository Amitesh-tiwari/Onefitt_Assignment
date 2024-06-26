import React from 'react';
import './App.css';
import img1 from './assets/img1.png'


function App() {
  return (
    <div className="container">
      <header className="header">
        <div className="logo">GO FOOD</div>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Groceries</a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
        </nav>
        <div className="connect">
          <a href="#">Connect with us →</a>
        </div>
        <div className="icons">
          <a href="#">
            <i className="fa fa-search" />
          </a>
          <a href="#">
            <i className="fa fa-shopping-cart" />
          </a>
          <a href="#">
            <i className="fa fa-heart" />
          </a>
          <a href="#">
            <i className="fa fa-user" />
          </a>
        </div>
      </header>
      <main className="main">
        <section className="hero">
          <div className="hero-content">
            <h1>Discount up to 20%</h1>
            <h2>Buy Fresh And Organic Grocery Food</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur. Condimentum sed sed
              blandit purus nec nibh tortor ipsum. Placerat consequat lorem.
            </p>

            <div className="stats">
              <div className="stat">
                <h3>35k +</h3>
                <p>Users</p>
              </div>
              <div className="stat">
                <h3>18k +</h3>
                <p>Products</p>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://plus.unsplash.com/premium_photo-1664640733998-0ee318c94af6?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Organic food"
            />
          </div>
        </section>
        <section className="categories">
          <h2>Shop by Category</h2>
          <h3>Top Category Of Organic Food</h3>
          <div className="category-buttons">
            <button className="category-button">FRUITS AND VEGETABLES</button>
            <button className="category-button">BAKERY</button>
            <button className="category-button-1">MEAT AND SEAFOOD</button>
            <button className="category-button">BEVERAGE</button>
            <button className="category-button">BISCUIT AND SNACKS</button>
          </div>
          <div className="products">
            <div className="product">
              <img
                src="https://images.unsplash.com/photo-1650476264855-a481c2c051c0?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Italian-Style chicken Maetballs"
              />
              <h3>Italian-Style chicken Maetballs</h3>
              <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
              <span className="price">$8.45</span>
              <a href="#" className="button">
                SHOP NOW →
              </a>
            </div>
            <div className="product">
              <img
                src="https://images.unsplash.com/photo-1631897788978-da06ec45adcb?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Crispy Classic Buffalo Wings"
              />
              <h3>Crispy Classic Buffalo Wings</h3>
              <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
              <span className="price">$8.45</span>
              <a href="#" className="button">
                SHOP NOW →
              </a>
            </div>
            <div className="product">
              <img
                src="https://images.unsplash.com/photo-1525093831618-8c7e0a8c3412?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Seafoods Stuffed Alaskan Salmon"
              />
              <h3>Seafoods Stuffed Alaskan Salmon</h3>
              <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
              <span className="price">$8.45</span>
              <a href="#" className="button">
                SHOP NOW →
              </a>
            </div>
            <div className="product">
              <img
                src="https://images.unsplash.com/photo-1548869206-93b036288d7e?q=80&w=1895&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Grass-fed 85_15 Ground Beef"
              />
              <h3>Grass-fed 85_15 Ground Beef</h3>
              <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
              <span className="price">$8.45</span>
              <a href="#" className="button">
                SHOP NOW →
              </a>
            </div>
            <div className="product">
              <img
                src="https://plus.unsplash.com/premium_photo-1668616817076-0e0ce58b6189?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Choice Angus Beef Stew Meat"
              />
              <h3>Choice Angus Beef Stew Meat</h3>
              <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
              <span className="price">$8.45</span>
              <a href="#" className="button">
                SHOP NOW →
              </a>
            </div>
            <div className="product">
              <img
                src="https://plus.unsplash.com/premium_photo-1712598971951-0169ec4e7037?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fGl0YWxpYW4lMjBzdHlsZSUyMGNoaWNrZW4lMjBtZWF0YmFsbHN8ZW58MHx8MHx8fDA%3D"
                alt="Italian-Style chicken Maetballs"
              />
              <h3>Italian-Style chicken Maetballs</h3>
              <p>Lorem ipsum dolor sit amet quam in lacus risus.</p>
              <span className="price">$8.45</span>
              <a href="#" className="button">
                SHOP NOW →
              </a>
            </div>
          </div>
        </section>
      </main>
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2023 GO FOOD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;