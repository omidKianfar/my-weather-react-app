import React from "react";
import { weatherContext } from "../hocs/Context";
import Auxx from "../Tools/Auxx";

const WeatherForm = () => {
  return (
    <Auxx>
      <weatherContext.Consumer>
        {({ searchCity, city, setCity, refCity }) => {
          return (
            <section>
              <form onSubmit={searchCity}>
                <input
                  type="text"
                  placeholder="EnterCity"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  ref={refCity}
                />
                <input type="submit" value="Search" />
              </form>
            </section>
          );
        }}
      </weatherContext.Consumer>
    </Auxx>
  );
};
export default WeatherForm;
