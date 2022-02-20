import React from "react";

function Data({ WeatherInfo }) {
  return <div>{WeatherInfo.currentConditions.iconURL}</div>;
}

export default Data;
