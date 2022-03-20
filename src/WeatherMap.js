import React, { useState } from "react";

import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";
import Auxx from "./Tools/Auxx";
import { Focus } from "./Tools/Focus";
import { weatherContext } from "./Hooks/Context";
import { fetchApi } from "./Hooks/FetchApi";

function App() {
  // state ----------------------------------------------
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const refCity = Focus(city);

  return (
    <Auxx>
      <div
      // className={
      //   weather.main ? (weather.main.temp > 273 ? "app warm" : "app") : "app"
      // }
      >
        <main>
          <weatherContext.Provider
            value={{ city, setCity, refCity, weather, setWeather }}
          >
            <WeatherForm />
            <WeatherList />
          </weatherContext.Provider>
        </main>
      </div>
    </Auxx>
  );
}

export default App;
