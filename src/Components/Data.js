import React, { useState } from "react";
import "./Data.css";

function Data({ WeatherInfo, DeleteCard }) {
  const mapRows = WeatherInfo.map((item, index) => (
    <div className="card">
      <div className="container">
        <li>
          <span>City name: </span>
          {item.region}
        </li>
        <li>
          <span>Description of current weather: </span>
          {item.currentConditions ? item.currentConditions.comment : ""}
        </li>
        <li>
          <span>Image of current weather: </span>
          {item.currentConditions ? item.currentConditions.iconURL : ""}
        </li>
        <li>
          <span>Current temperature in C: </span>
          {item.currentConditions ? item.currentConditions.temp.c : ""}
        </li>
        <li>
          <span>Current humidity: </span>
          {item.currentConditions ? item.currentConditions.humidity : ""}
        </li>
        <li>
          <span>Current precipitation: </span>
          {item.currentConditions ? item.currentConditions.precip : ""}
        </li>
        <button type="submit" value={index} onClick={DeleteCard}>
          Delete
        </button>
      </div>
    </div>
  ));

  return (
    <div>
      <div>
        <p>{mapRows}</p>
      </div>
    </div>
  );
}

export default Data;
