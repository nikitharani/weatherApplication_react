import React, { useEffect, useState } from "react";
import Axios from "axios";

import Data from "./Data";

function WeatherApi({ Name }) {
  const [city, setCity] = useState("");
  // const [weather, updateWeather] = useState([]);
  // const [currentNoOfCards, setCurrentNoOfCards] = useState(0);
  const [globalWeatherInfo, setGlobalWeatherInfo] = useState([]);

  // const [carddisplay, setCarddisplay] = useState(false);

  const fetchWeather = async (e) => {
    e.preventDefault();
    if (globalWeatherInfo.length < 5) {
      const response = await Axios.get(
        `https://weatherdbi.herokuapp.com/data/weather/${city}`
      );

      // updateWeather(response.data);
      // if (currentNoOfCards == 4) {
      //   setCurrentNoOfCards(0);
      // } else {
      // }
      setGlobalWeatherInfo((oldArray) => [...oldArray, response.data]);
      // setGlobalWeatherInfo(this.state.globalWeatherInfo);

      // setCarddisplay((prevCheck) => !prevCheck);
      // console.log("currentNoOfCards in search:", currentNoOfCards);
      console.log(globalWeatherInfo);
      console.log(
        "globalWeatherInfo.length in search:",
        globalWeatherInfo.length
      );
    }
    // setCurrentNoOfCards(currentNoOfCards + 1);
  };
  // console.log(weather);
  // console.log("currentNoOfCards after search:", currentNoOfCards);
  console.log(globalWeatherInfo);
  console.log(
    "globalWeatherInfo.length after search:",
    globalWeatherInfo.length
  );

  const deleteHandler = (e) => {
    // console.log(e);
    e.preventDefault();
    console.log(e.target.value);
    // setDisplay((prevCheck) => !prevCheck);

    var indx = e.target.value;

    var region_name = globalWeatherInfo[indx].region;
    const arr = globalWeatherInfo.filter((item) => item.region !== region_name);
    setGlobalWeatherInfo(arr);

    // setCurrentNoOfCards(currentNoOfCards - 1);
    // console.log("currentNoOfCards in delete:", currentNoOfCards);
    console.log(globalWeatherInfo);
    console.log(
      "globalWeatherInfo.length in delete:",
      globalWeatherInfo.length
    );
    // setGlobalWeatherInfo(globalWeatherInfo);
  };

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
      {globalWeatherInfo.length <= 4
        ? ""
        : "You have reached maximum searches(5!)"}
      <Data WeatherInfo={globalWeatherInfo} DeleteCard={deleteHandler} />
    </div>
  );
}

export default WeatherApi;
