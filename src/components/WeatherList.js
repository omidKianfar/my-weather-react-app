import React from "react";

const WeatherList = ({ weather }) => {
  return (
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
  );
};
export default WeatherList;
