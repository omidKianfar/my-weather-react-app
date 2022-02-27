import React, { useState } from "react";

import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
import Auxx from "./Tools/Auxx";
import { Focus } from "./Tools/Focus";
import { weatherContext } from "./hocs/Context";

function App() {
  // state ----------------------------------------------
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  // api detailes ---------------------------------------
  const apiDetailes = {
    key: "f84377c9d5764f0c9a558763d11f1083",
    base: "https://api.openweathermap.org/data/2.5/",
  };

  // func -----------------------------------------------
  const searchCity = (e) => {
    e.preventDefault();
    fetchApi();
    setCity("");
  };

  const fetchApi = () => {
    const url = `${apiDetailes.base}weather?q=${city}&appid=${apiDetailes.key}`;
    fetch(url)
      .then((response) => response.json())
      .then((result) => setWeather(result));
  };

  const refCity = Focus(city);

  return (
    <Auxx>
      <main>
        <weatherContext.Provider
          value={{ searchCity, city, setCity, refCity, weather }}
        >
          <WeatherForm />
          <WeatherList />
        </weatherContext.Provider>
      </main>
    </Auxx>
  );
}

export default App;
