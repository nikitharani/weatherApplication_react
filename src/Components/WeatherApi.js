import React, { useEffect, useState } from "react";
import Axios from "axios";

import Data from "./Data";

function WeatherApi({ Name }) {
  const [city, setCity] = useState("");
  const [weather, updateWeather] = useState([]);

  // const [carddisplay, setCarddisplay] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    const response = await Axios.get(
      `https://weatherdbi.herokuapp.com/data/weather/${city}`
    );
    updateWeather(response.data);

    // setCarddisplay((prevCheck) => !prevCheck);
  };
  console.log(weather);

  return (
    <div id="search-page">
      <h2>Welcome to the weather app {Name}</h2>
      <form onSubmit={fetchWeather}>
        <div className="form-inner">
          <h2>City</h2>

          <div className="form-group">
            <label htmlFor="name">City</label>
            <input
              type="text"
              name="name"
              id="name"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
          </div>

          <input type="submit" value="Search" />
        </div>
      </form>
      {/* {carddisplay == true ? <Data WeatherInfo={weather} /> : ""} */}
      <Data WeatherInfo={weather} />
    </div>
  );
}

export default WeatherApi;
