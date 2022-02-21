import React, { useState } from "react";
import "./Data.css";

var currentNoOfCards = 0;

function Data({ WeatherInfo, DeleteCard }) {
  // const [display, setDisplay] = useState(true);
  // const [count, setCount] = useState(0);
  const [globalWeatherInfo, setGlobalWeatherInfo] = useState([]);

  // return <div>{WeatherInfo.currentConditions.iconURL}</div>;
  if (WeatherInfo.currentConditions) {
    console.log(WeatherInfo.currentConditions.humidity);
  }

  // const deleteHandler = (e) => {
  //   e.preventDefault();
  //   // console.log(index);
  //   setDisplay((prevCheck) => !prevCheck);
  // };

  //globalWeatherInfo[currentNoOfCards] = WeatherInfo;
  //console.log(globalWeatherInfo);
  // console.log(currentNoOfCards);

  // const cardData = (
  //   <div className="card">
  //     <div className="container">
  //       <h4>
  //         <b>{WeatherInfo.region}</b>
  //       </h4>
  //       <p>
  //         {WeatherInfo.currentConditions
  //           ? WeatherInfo.currentConditions.comment
  //           : ""}
  //       </p>
  //       <p>
  //         {WeatherInfo.currentConditions
  //           ? WeatherInfo.currentConditions.iconURL
  //           : ""}
  //       </p>
  //       <p>
  //         {WeatherInfo.currentConditions
  //           ? WeatherInfo.currentConditions.temp.c
  //           : ""}
  //       </p>
  //       <p>
  //         {WeatherInfo.currentConditions
  //           ? WeatherInfo.currentConditions.humidity
  //           : ""}
  //       </p>
  //       <p>
  //         {WeatherInfo.currentConditions
  //           ? WeatherInfo.currentConditions.precip
  //           : ""}
  //       </p>
  //       <input type="submit" value="Delete" onClick={deleteHandler} />
  //     </div>
  //   </div>
  // );

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
      {/* {display == true ? ( */}
      <div>
        {/* {Count <= 5 ? <p>{mapRows}</p> : "You can Enter only 5 City Names"} */}
        <p>{mapRows}</p>
      </div>
      {/* ) : ( */}
      {/* )} */}
    </div>
  );
}

export default Data;
