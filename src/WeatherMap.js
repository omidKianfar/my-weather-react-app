import { Fragment, useState } from "react";

import { weatherContext } from "./Hooks/Context";
import { Focus } from "./Tools/Focus";
import WeatherForm from "./components/WeatherForm";
import WeatherList from "./components/WeatherList";

function App() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  const refCity = Focus(city);

  return (
    <Fragment>
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
    </Fragment>
  );
}

export default App;
