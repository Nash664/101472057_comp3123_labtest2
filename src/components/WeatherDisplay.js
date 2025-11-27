import React from 'react';
import './WeatherDisplay.css';

function WeatherDisplay({ data }) {
  const {
    name,
    sys,
    main,
    weather,
    wind,
    visibility
  } = data;

  const weatherIcon = weather[0].icon;
  const description = weather[0].description;
  const temperature = Math.round(main.temp);
  const feelsLike = Math.round(main.feels_like);
  const humidity = main.humidity;
  const pressure = main.pressure;
  const windSpeed = wind.speed;
  const country = sys.country;

  // Get weather icon URL from OpenWeatherMap
  const iconUrl = `https://openweathermap.org/img/wn/${weatherIcon}@2x.png`;

  // Capitalize first letter of description
  const capitalizedDescription = description.charAt(0).toUpperCase() + description.slice(1);

  return (
    <div className="weather-display">
      <div className="weather-header">
        <h2 className="city-name">
          {name}, {country}
        </h2>
        <p className="weather-description">{capitalizedDescription}</p>
      </div>

      <div className="weather-main">
        <div className="temperature-section">
          <img 
            src={iconUrl} 
            alt={description}
            className="weather-icon"
          />
          <div className="temperature">
            <span className="temp-value">{temperature}</span>
            <span className="temp-unit">°C</span>
          </div>
        </div>
        <p className="feels-like">Feels like {feelsLike}°C</p>
      </div>

      <div className="weather-details">
        <div className="detail-item">
          <span className="detail-label">💧 Humidity</span>
          <span className="detail-value">{humidity}%</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">🌬️ Wind Speed</span>
          <span className="detail-value">{windSpeed} m/s</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">📊 Pressure</span>
          <span className="detail-value">{pressure} hPa</span>
        </div>
        <div className="detail-item">
          <span className="detail-label">👁️ Visibility</span>
          <span className="detail-value">{(visibility / 1000).toFixed(1)} km</span>
        </div>
      </div>
    </div>
  );
}

export default WeatherDisplay;

