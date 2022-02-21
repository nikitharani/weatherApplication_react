import React, { useState } from "react";
import "./App.css";

import LoginForm from "./Components/LoginFom";
import WeatherApi from "./Components/WeatherApi";

function App() {
  const adminUser = {
    userName: "ipgautomotive",
    password: "carmaker",
  };

  const [user, setUser] = useState({ userName: "", password: "" });
  const [error, setError] = useState("");

  const Login = (details) => {
    console.log(details);
    if (
      details.name === adminUser.userName &&
      details.password === adminUser.password
    ) {
      console.log("logged in");
      setUser({
        userName: details.name,
        password: details.password,
      });
    } else {
      console.log("details donot match");
      setError("Details do not match!");
    }
  };
  const Logout = () => {
    console.log("Logout");
    setUser({ userName: "", password: "" });
  };

  return (
    <div className="test">
      {/* <p>saibaba</p> */}
      {user.userName !== "" ? (
        <div className="Welcome">
          <button onClick={Logout}>Logout</button>
          <WeatherApi Name={user.userName} />
          {/* <button onClick={Logout}>Logout</button> */}
        </div>
      ) : (
        <LoginForm Login={Login} Error={error} />
      )}
    </div>
  );
}

export default App;
