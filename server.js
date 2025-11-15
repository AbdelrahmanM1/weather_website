import express from "express";
import dotenv from "dotenv";
import fetch from "node-fetch";
import path from "path";
import { fileURLToPath } from "url";


// Load environment variables
dotenv.config();

// Initialize Express app
const app = express();

// Serve static files
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Middleware to serve static files from the current directory
app.use(express.static(__dirname)); // serve index.html, style.css, app.js

// Weather API endpoint
app.get("/api/weather", async (req, res) => {
  
  // Get city from query parameters
  const city = req.query.city;
  if (!city) return res.status(400).json({ error: "City name required" });

  // Fetch weather data from OpenWeatherMap API
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;


  // Fetch data and handle response
  try {
    const response = await fetch(url);
    const data = await response.json();
    res.json(data);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch weather" });
  }
});


// Start the server
const API_KEY = process.env.API_KEY; 
const port = process.env.PORT || 3000;

try {
    app.listen(port, () => {
        console.log(`Server running on port ${port}, The server is running smoothly :)`);
    });
  }catch (error) {
    console.error("Error starting server:", error);
}
