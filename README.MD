# Weather App 🌤️

A simple web application to display current weather information for any city.  
The app fetches data from **OpenWeatherMap API** and displays temperature, weather description, and icon.

## Features

- Search weather by city name
- Display temperature in Celsius
- Show weather description
- Show weather icon
- Backend API hides your OpenWeather API key using `.env` as shown as `.env.example` (but change it to .env that's it)

## Folder Structure

```
WEATHER_WEBSITE/
├── server.js
├── .env
├── package.json
└── frontend/
    ├── index.html
    ├── style.css
    └── app.js
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/AbdelrahmanM1/weather-website.git
cd weather-app
```

2. Install dependencies:
```bash
npm install
```

3. Create a `.env` file in the root:
```env
API_KEY=your_openweather_api_key_here
PORT=3000
```

4. Run the server:
```bash
node server.js
```

5. Open your browser and navigate to:
```
http://localhost:3000
```

## Usage

1. Type the name of a city in the input box
2. Click **Get Weather**
3. Weather information will appear below

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **API**: OpenWeatherMap API
- **Environment Variables**: dotenv

## Author

**Abdelrahman Moharram** (3bdoabk)