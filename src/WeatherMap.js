import React, { useState } from "react";

import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";

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

  return (
    <div>
      <main>
        <WeatherForm searchCity={searchCity} city={city} setCity={setCity} />
        <WeatherList weather={weather} />
      </main>
    </div>
  );
}

export default App;
