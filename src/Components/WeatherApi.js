import React, { useState } from "react";
import Axios from "axios";
import Data from "./Data";
import "./WeatherApi.css";

function WeatherApi({ Name }) {
  const [city, setCity] = useState("");

  const [globalWeatherInfo, setGlobalWeatherInfo] = useState([]);

  const fetchWeather = async (e) => {
    e.preventDefault();

    if (globalWeatherInfo.length < 5) {
      const response = await Axios.get(
        `https://weatherdbi.herokuapp.com/data/weather/${city}`
      );

      setGlobalWeatherInfo((oldArray) => [...oldArray, response.data]);
      setCity("");
    }
  };

  const deleteHandler = (e) => {
    e.preventDefault();
    var indx = e.target.value;
    var region_name = globalWeatherInfo[indx].region;
    const arr = globalWeatherInfo.filter((item) => item.region !== region_name);
    setGlobalWeatherInfo(arr);
  };

  return (
    <div class="search-page">
      <h2>Welcome to the weather app {Name}</h2>
      <form onSubmit={fetchWeather}>
        <div className="form-inner">
          <div className="form-group">
            <label htmlFor="name">City:</label>
            <input
              placeholder="City Name"
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
      <p>
        {globalWeatherInfo.length <= 4
          ? ""
          : "You have reached maximum searches(5!)"}
      </p>
      <Data WeatherInfo={globalWeatherInfo} DeleteCard={deleteHandler} />
    </div>
  );
}

export default WeatherApi;
