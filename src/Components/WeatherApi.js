import React,{useEffect, useState} from 'react';
import styled from "styled-components";
import Axios from "axios";






function WeatherApi({Name}) {
  const [city, setCity] = useState();
  const [weather, setWeather] = useState();


  const weatherData = async() => {
    try{
      const data =await Axios.get(
        'https://weatherdbi.herokuapp.com/data/weather/London');
      console.log(data);
      // setMeanings(data.data);
          }
          catch(error){
            console.log(error);
          }

  };

  useEffect(()=>{
    weatherData();
  },[])


  return (
    <div className="weather">
         <h1>Welcome to the weather app {Name}</h1>
         <div>
         <h5>Enter City Name</h5>

         {/* <form>
         <div className='form-group'>
            <label htmlFor="city">City</label>
            <input type="text" name ="city" id="city" value={e.target.value} onChange={e=>setCity({...city, city:e.target.value})}/>
          </div>
          <input type="submit" value="LOGIN"/>
          </form> */}
         </div>


      </div>

  );
}

  // return (

  //     <div className="weather">
  //       <h1>Welcome to the weather app {Name}</h1>

  //     </div>

  // )
// }

export default WeatherApi;