import React from "react";
import { weatherContext } from "../hocs/Context";
import Auxx from "../Tools/Auxx";

const WeatherList = () => {
  return (
    <Auxx>
      <weatherContext.Consumer>
        {({ weather }) => {
          return (
            <section>
              {weather.main ? (
                <div>
                  <div>
                    <div>{weather.name}</div>
                    <div>{new Date().toDateString()}</div>
                    <div>{weather.weather[0].main}</div>
                    <div>
                      <div>
                        {Math.round(weather.main.temp - 273)}° centigrade{" "}
                      </div>
                      <div> {Math.round(weather.main.temp)}° Celsius</div>
                    </div>
                  </div>
                </div>
              ) : (
                ""
              )}
            </section>
          );
        }}
      </weatherContext.Consumer>
    </Auxx>
  );
};
export default WeatherList;
