import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import Forecast from './components/Forecast'

// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.






const App = () => {
  useEffect(() => {
    getCity("Austin");
  }, []);

  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState([]);
  const [location, setLocation] = useState("");

  const searchCity = () => {
    return getCity(search);
  }

  const getCity = async (name) => {
    console.log({ name }.name);
    console.log('https://geocoding-api.open-meteo.com/v1/search?name=' + { name }.name);
    try {
      const res = await fetch('https://geocoding-api.open-meteo.com/v1/search?name=' + { name }.name);
      const results = await res.json();
      console.log(results.results[0]);
      if (results.results && results.results.length > 0) {
        const latitude = results.results[0].latitude;
        const longitude = results.results[0].latitude;

        const url = "https://api.open-meteo.com/v1/forecast?latitude=" + { latitude }.latitude + "&longitude=" + { longitude }.longitude + "&hourly=temperature_2m&timezone=America%2FChicago&forecast_days=1&temperature_unit=fahrenheit"
        const responses = await fetch(url);
        const weatherInfo = await responses.json();
        console.log(weatherInfo);

        const tempDates = weatherInfo.hourly.time.map((time, index) => [time, weatherInfo.hourly.temperature_2m[index]]);
        console.log(tempDates);
        await setWeather(tempDates);
        await setLocation(results.results[0].name);
        
        console.log(weather);
        return;



      } else {
        alert("Could not find city " + { name }.name);
        return null;
      }
    } catch (error) {
      console.log({ error });
      alert("Error in finding city " + { name }.name);
      return null;
    }
  }




  return (
    <div>
      <div class='container'>
        <div class="row justify-content-center">
          <button type="button" class="menu-button" onClick={() => getCity("Austin")}>
            Austin
          </button>
        </div>
        <div class='row justify-content-center'>
          <button type="button" class="menu-button" onClick={() => getCity("Chicago")}>
            Chicago
          </button>
        </div>
        <div class='row justify-content-center'>
          <button type="button" class="menu-button" onClick={() => getCity("Las Vegas")}>
            Las Vegas
          </button>
        </div>
        <div class="row justify-content-center">
          <div class="col-4">
            <input
              width="80px"
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search a city"
            />
          </div>
          <div class="col-4">
            <button
              onClick={searchCity}
            >
              Search
            </button>
          </div>

        </div>
        {location}
        {weather.map(wthr => (
          <Forecast key={wthr[0]} item={wthr} />
        ))}
      </div>

    </div>
  );




}

export default App;
