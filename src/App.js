import React, { useState, useEffect } from 'react';
import './App.css';
import WeatherDisplay from './components/WeatherDisplay';
import SearchBar from './components/SearchBar';

const API_KEY = process.env.REACT_APP_API_KEY || '';
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
        if (!API_KEY) {
          throw new Error('API key is missing. Please set REACT_APP_API_KEY in your .env file.');
        }
        
        // Encode city name to handle spaces and special characters
        const encodedCity = encodeURIComponent(city);
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${encodedCity}&appid=${API_KEY}&units=metric`;
        
        const response = await fetch(url);
        const data = await response.json();
        
        if (!response.ok) {
          // Check for specific API key error
          if (response.status === 401 || data.cod === 401) {
            throw new Error('Invalid API key. Please check your OpenWeatherMap API key. Make sure it is activated at https://openweathermap.org/api');
          }
          // Check for city not found error
          if (response.status === 404 || data.cod === '404') {
            throw new Error('City not found. Please try another city name.');
          }
          throw new Error(data.message || 'Failed to fetch weather data. Please try again.');
        }
        
        setWeatherData(data);
      } catch (err) {
        console.error('Error fetching weather:', err);
        setError(err.message || 'Failed to fetch weather data. Please try again.');
        setWeatherData(null);
      } finally {
        setLoading(false);
      }
    };

    if (city) {
      fetchWeather();
    }
  }, [city]);

  const handleSearch = (searchCity) => {
    const trimmedCity = searchCity.trim();
    if (trimmedCity) {
      console.log('Setting city to:', trimmedCity);
      setCity(trimmedCity);
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

