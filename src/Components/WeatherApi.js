import React, { useEffect, useState } from "react";
import Axios from "axios";

import Data from "./Data";

function WeatherApi({ Name }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState([]);

  const weatherData = async () => {
    try {
      const data = await Axios.get(
        `https://weatherdbi.herokuapp.com/data/weather/${city}`
      );
      // console.log(data);
      setWeather(data.data);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(weather);

  useEffect(() => {
    // const weatherData = async () => {
    //   try {
    //     const data = await Axios.get(
    //       `https://weatherdbi.herokuapp.com/data/weather/${city}`
    //     );
    //     // console.log(data);
    //     setWeather(data.data);
    //   } catch (error) {
    //     console.log(error);
    //   }
    // };

    weatherData();
  }, [city]);

  const submitHandler = (e) => {
    e.preventDefault();
    setCity("");
    console.log("button");
  };

  return (
    <div id="search-page">
      <form onSubmit={submitHandler}>
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

          <input type="submit" value="Enter" />
        </div>
      </form>
      <Data WeatherInfo={weather} />
    </div>
  );
}

export default WeatherApi;
