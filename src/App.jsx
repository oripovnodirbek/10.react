import React, { useState, useEffect } from "react";
import "./App.css";
import logo from "../public/FinestMart.svg";
import spinachImg from "../public/spinach-PVB3BJ8.png";
import carrotImg from "../public/image (2).png";
import dairyImg from "../public/Dairy.svg";
import fruitsVegImg from "../public/Fruits and vegetables.svg";
import condimentsImg from "../public/Condiments.svg";
import babyFoodImg from "../public/Baby food.svg";
import grainsPastaImg from "../public/Grain and pasta.svg";
import translations from "./data.json";
import heroImg from "../public/hero.png";
import searchIcon from "../public/search.svg";
import checkIcon from "../public/Check.svg";
import moonIcon from "../public/moon.svg";
import sunIcon from "../public/sun.svg";

function App() {
  const [language, setLanguage] = useState("en");
  const [translatedText, setTranslatedText] = useState(translations[language]);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setTranslatedText(translations[language]);
  }, [language]);

  useEffect(() => {
    document.body.classList.toggle("dark-mode", isDarkMode);
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className="container">
      <header className="header">
        <div className="logo">
          <img src={logo} alt="FinestMart Logo" />
        </div>
        <nav className="nav">
          <a href="#home">{translatedText.home}</a>
          <a href="#categories">{translatedText.categories}</a>
          <a href="#sales">{translatedText.sales}</a>
          <a href="#faq">{translatedText.faq}</a>
          <a href="#contact">{translatedText.contact}</a>
        </nav>
        <div className="auth-buttons">
          <a href="#signin">{translatedText.signIn}</a>
          <button>{translatedText.signUp}</button>
        </div>
        <select
          className="language-select"
          onChange={(e) => setLanguage(e.target.value)}
          value={language}
        >
          <option value="en">English</option>
          <option value="uz">Uzbek</option>
          <option value="ru">Russian</option>
        </select>
        <button className="mode-toggle" onClick={toggleDarkMode}>
          {isDarkMode ? (
            <img src={sunIcon} alt="" />
          ) : (
            <img src={moonIcon} alt="" />
          )}
        </button>
      </header>

      <main className="main-content">
        <section className="promo-section">
          <h1>{translatedText.headline}</h1>
          <p>{translatedText.description}</p>
          <div className="search-bar">
            <input type="text" placeholder={translatedText.searchPlaceholder} />
            <button>
              <img src={searchIcon} alt="" />
            </button>
          </div>

          <img src={heroImg} alt="" className="hero" />
          <div className="features">
            {translatedText.features.map((feature, index) => (
              <div key={index} className="feature">
                <img src={checkIcon} alt="" />
                <span>{feature}</span>
              </div>
            ))}
          </div>
        </section>
        <aside className="sidebar">
          <div className="product-card">
            <img src={spinachImg} alt={translatedText.spinach} />
            <p>{translatedText.spinach}</p>
            <p>$12.99</p>
          </div>
          <div className="product-card">
            <img src={carrotImg} alt={translatedText.carrot} />
            <p>{translatedText.carrot}</p>
            <p>$10.00</p>
          </div>
        </aside>
      </main>

      <section className="categories-section">
        <div className="category">
          <img src={dairyImg} alt={translatedText.dairy} />
          <p>{translatedText.dairy}</p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
        <div className="category">
          <img src={fruitsVegImg} alt={translatedText.vegetables} />
          <p>{translatedText.vegetables}</p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
        <div className="category">
          <img src={condimentsImg} alt={translatedText.spices} />
          <p>{translatedText.spices}</p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
        <div className="category">
          <img src={babyFoodImg} alt={translatedText.honey} />
          <p>{translatedText.honey}</p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
        <div className="category">
          <img src={grainsPastaImg} alt={translatedText.flour} />
          <p>{translatedText.flour}</p>
          <small>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </small>
        </div>
      </section>
    </div>
  );
}

export default App;
