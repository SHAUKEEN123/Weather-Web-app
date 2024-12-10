import axios from 'axios'
import React, { useState } from 'react'


function WeatherApp() {
  const [city , setCity] = useState('');
const [error, setError] = useState(null);
const [weather , setWeather] = useState(null);

const API_key = 'd40a869875aa36418af60dae86c2bf56';

  const fetchWeather = async() =>{
      try {
        if (weather && weather.name.toLowerCase() === city.toLowerCase()){
          alert(`Weather data for ${city} is already loaded.`);
          setCity('')
          return; // Function ko yahin se exit kar do
        }

        const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_key}&units=metric`
        );

        const cityName = response.data.name;

        // console.log(response)
        setWeather(response.data);
        setCity('');
        setError(null);

        // alert(`Weather information for ${cityName},loaded successfully!`);
      } catch (error) {
        // throw error
        alert(`${city} is not a valid city. Please enter a correct city name.`);
        setWeather(null);
        setCity('')
      }
  }
  const handleSubmit = (event) =>{
      event.preventDefault();
      if(city){
        fetchWeather();
      }
  }
  return (
    <div className='max-w-md mx-auto p-6  rounded-lg shadow-md border  hover:scale-110 transition-transform duration-300' >
      <h1 className='text-2xl font-bold mb-4'>Weather App</h1>

      <form onSubmit={handleSubmit} 
      className='mb-4'>
        <input type="text"
        value={city} 
        onChange={(event)=> setCity(event.target.value)}
         placeholder="Enter city name"
           className="w-full p-2 border rounded mb-2 text-black hover:border-blue-400 focus:outline-none focus:ring-2 focus:ring-yellow-500"
        />

        <button
        type='submit'
          className="w-full bg-blue-500 text-white p-2 rounded"
        >
          Get Weather 
        </button>
      </form>

      {error && <p className="text-red-500">{error}</p>}

      {weather && (
        <div className="text-center">
          <h2 className="text-xl font-bold">{weather.name}</h2>
          <p> Temperature: {weather.main.temp}°C</p>
          <p>Humidity: {weather.main.humidity}%</p>
          <p >Wind Speed: {weather.wind.speed} m/s</p>
          <p>Description: {weather.weather[0].description}</p>
        </div>
      ) }
    </div>
  )
}

export default WeatherApp
