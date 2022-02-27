import React, { useState } from "react";

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
    fetch(`${apiDetailes.base}weather?q=${city}&appid=${apiDetailes.key}`)
      .then((response) => response.json())
      .then((result) => {
        setWeather(result);
        setCity("");
      });
  };

  return (
    <div>
      <main>
        <section>
          <form onSubmit={searchCity}>
            <input
              type="text"
              placeholder="EnterCity"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <input type="submit" value="Search" />
          </form>
        </section>
        <section>
          {weather.main ? (
            <div>
              <div>
                <div>{weather.name}</div>
                <div>{new Date().toDateString()}</div>
                <div>{weather.weather[0].main}</div>
                <div>
                  <div>{Math.round(weather.main.temp - 273)}° centigrade </div>
                  <div> {Math.round(weather.main.temp)}° Celsius</div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </section>
      </main>
    </div>
  );
}

export default App;
