import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';

const API_KEY = 'dbd03d9c8496caabacd549536fe9aafa';
const DEFAULT_CITY = 'Toronto';

function App() {
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [city, setCity] = useState(DEFAULT_CITY);

  // Fetch weather data when city changes
  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);
      setError(null);
      
      try {
        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
        );
        
        if (!response.ok) {
          throw new Error('City not found. Please try another city name.');
        }
        
        const data = await response.json();
        setWeatherData(data);
      } catch (err) {
        setError(err.message);
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchWeather();
  }, [city]);

  const handleSearch = (searchCity) => {
    if (searchCity.trim()) {
      setCity(searchCity.trim());
    }
  };

  return (
    <div className="App">
      <div className="container">
        <header className="app-header">
          <h1>🌤️ Weather App</h1>
          <p className="subtitle">Get current weather information for any city</p>
        </header>

        <SearchBar onSearch={handleSearch} loading={loading} />

        {loading && (
          <div className="loading-container">
            <div className="spinner"></div>
            <p>Loading weather data...</p>
          </div>
        )}

        {error && (
          <div className="error-container">
            <p>❌ {error}</p>
          </div>
        )}

        {weatherData && !loading && !error && (
          <WeatherDisplay data={weatherData} />
        )}
      </div>
    </div>
  );
}

export default App;

