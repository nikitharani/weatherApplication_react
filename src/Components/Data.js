import React, { useState } from "react";
import "./Data.css";

function Data({ WeatherInfo }) {
  const [display, setDisplay] = useState(true);
  const [currentNoOfCards, setCurrentNoOfCards] = useState(0);
  const [globalWeatherInfo, setGlobalWeatherInfo] = useState([]);

  // return <div>{WeatherInfo.currentConditions.iconURL}</div>;
  if (WeatherInfo.currentConditions) {
    console.log(WeatherInfo.currentConditions.humidity);
  }

  const deleteHandler = (e) => {
    e.preventDefault();
    setDisplay((prevCheck) => !prevCheck);
  };

  const totalCards = 5;
  // var CurrentNoOfCards = 0;
  globalWeatherInfo[CurrentNoOfCards] = WeatherInfo;

  const cardData = (
    <div className="card">
      <div className="container">
        <h4>
          <b>{WeatherInfo.region}</b>
        </h4>
        <p>
          {WeatherInfo.currentConditions
            ? WeatherInfo.currentConditions.comment
            : ""}
        </p>
        <p>
          {WeatherInfo.currentConditions
            ? WeatherInfo.currentConditions.iconURL
            : ""}
        </p>
        <p>
          {WeatherInfo.currentConditions
            ? WeatherInfo.currentConditions.temp.c
            : ""}
        </p>
        <p>
          {WeatherInfo.currentConditions
            ? WeatherInfo.currentConditions.humidity
            : ""}
        </p>
        <p>
          {WeatherInfo.currentConditions
            ? WeatherInfo.currentConditions.precip
            : ""}
        </p>
        <input type="submit" value="Delete" onClick={deleteHandler} />
      </div>
    </div>
  );

  return (
    <div>
      {display == true ? (
        <div>
          <p>{cardData}</p>
          <p>{cardData}</p>
          <p>{cardData}</p>
          <p>{cardData}</p>
          <p>{cardData}</p>
        </div>
      ) : (
        ""
      )}
    </div>
  );
}

export default Data;
