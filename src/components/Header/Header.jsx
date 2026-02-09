import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { Sparkles } from "lucide-react";

import "./Header.css";
import Preloader from "../Preloader/Preloader.jsx";
import {
  filterWeatherData,
  getLocation,
  getWeather,
} from "../../utils/WeatherApi.js";
import { quotes, fallbackQuote } from "../../utils/Quotes.js";

export default function Header({ search, setSearch, randomCard }) {
  const [weather, setWeather] = useState(null);
  const [loadingWeather, setLoadingWeather] = useState(true);

  useEffect(() => {
    async function loadWeather() {
      try {
        const locData = await getLocation();
        const latitude = locData.latitude;
        const longitude = locData.longitude;
        const apiKey = import.meta.env.VITE_WEATHER_API_KEY;
        const location = await getWeather({ latitude, longitude, apiKey });
        const filtered = filterWeatherData(location);

        console.log("IPAPI LOCATION DATA:", locData);
        console.log("WEATHER CONDITION:", filtered.condition);

        setWeather(filtered.condition);
      } catch (err) {
        console.error("Weather fetch failed:", err);
        setWeather("Clear");
      } finally {
        setLoadingWeather(false);
      }
    }

    loadWeather();
  }, []);

  let displayedQuote = fallbackQuote;
  if (weather && quotes[weather]) {
    const quoteIndex = quotes[weather];
    const randomIndex = Math.floor(Math.random() * quoteIndex.length);
    displayedQuote = quoteIndex[randomIndex];
  }

  return (
    <header className="header">
      <div className="header__content">
        <Link to="/books" className="header__logo">
          <Sparkles size={48} />
        </Link>
        <p className="header__star">Click the star to explore more books.</p>
        <h1 className="header__title">The Caelumbrine Glossary</h1>
        <div className="header__quote">
          {loadingWeather ? <Preloader /> : <p>{displayedQuote}</p>}
        </div>

        <input
          type="text"
          className="header__search"
          placeholder="Search the archives..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="header__btn" onClick={randomCard}>
          Discover Random Term
        </button>
      </div>
    </header>
  );
}
