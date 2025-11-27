# Weather App 🌤️

A simple, user-friendly React application that displays current weather information for any city using real-time data from the OpenWeatherMap API.

## Project Information

- **Project Name**: Weather app
- **Student ID**: 101472057
- **Course**: COMP3123 

## Features

- 🔍 **City Search**: Search for weather information by entering any city name
- 🌡️ **Current Weather**: Display temperature, conditions, and weather icon
- 📊 **Detailed Information**: Show humidity, wind speed, pressure, and visibility
- 🎨 **Modern UI/UX**: Beautiful gradient design with smooth animations
- 📱 **Responsive Design**: Works seamlessly on desktop and mobile devices

## API Used

This application uses the **OpenWeatherMap API** to fetch real-time weather data.

- **API Provider**: OpenWeatherMap (https://openweathermap.org/)
- **Endpoint**: Current Weather Data API
- **Documentation**: 
  - https://openweathermap.org/forecast16
  - https://openweathermap.org/weather-conditions

## React Features Demonstrated

### Hooks and State Management
- **useState**: Used for managing weather data, loading state, error state, and city input
- **useEffect**: Used for fetching weather data when the city changes or on component mount

### Component Architecture
- **Props**: Data is passed from `App` component to `WeatherDisplay` and `SearchBar` components
- **Function Components**: All components are implemented as modern React function components

### Lifecycle Patterns
- **useEffect with dependencies**: Fetches data when the city state changes, demonstrating lifecycle-like behavior

## Project Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation Steps

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd 101472057_comp3123_labtest2
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   - Copy the example environment file:
     ```bash
     cp .env.example .env
     ```
   - Open `.env` and add your OpenWeatherMap API key:
     ```
     REACT_APP_API_KEY=your_api_key_here
     ```
   - Get your API key from [OpenWeatherMap](https://openweathermap.org/api)
   - **Important**: The `.env` file is already in `.gitignore` and will not be committed to GitHub

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Open your browser**
   - The app will automatically open at `http://localhost:3000`
   - If it doesn't, manually navigate to the URL

### Build for Production

To create a production build:

```bash
npm run build
```

This creates an optimized production build in the `build` folder.

## Project Structure

```
101472057_comp3123_labtest2/
├── public/
│   ├── index.html
│   └── manifest.json
├── src/
│   ├── components/
│   │   ├── WeatherDisplay.js
│   │   ├── WeatherDisplay.css
│   │   ├── SearchBar.js
│   │   └── SearchBar.css
│   ├── App.js
│   ├── App.css
│   ├── index.js
│   └── index.css
├── package.json
├── README.md
└── .gitignore
```

## Usage

1. **Default City**: The app loads with Toronto's weather by default
2. **Search for a City**: 
   - Enter any city name in the search bar
   - Click the search button or press Enter
   - The weather information will update automatically
3. **View Details**: The app displays:
   - City name and country
   - Current temperature and "feels like" temperature
   - Weather condition description
   - Weather icon from OpenWeatherMap
   - Humidity percentage
   - Wind speed
   - Atmospheric pressure
   - Visibility distance

## Technologies Used

- **React 18.2.0**: UI library
- **React Scripts 5.0.1**: Build tooling
- **OpenWeatherMap API**: Weather data source
- **CSS3**: Styling with modern features (gradients, animations, flexbox, grid)
- **Google Fonts (Poppins)**: Typography

## Future Enhancements (Optional)

- [ ] 5-day weather forecast
- [ ] Weather alerts and warnings
- [ ] Favorite cities list
- [ ] Dark mode toggle
- [ ] Temperature unit conversion (Celsius/Fahrenheit)
- [ ] Geolocation-based weather
- [ ] Weather maps integration
