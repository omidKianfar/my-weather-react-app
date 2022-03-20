import React from "react";
import { weatherContext } from "../Hooks/Context";
import Auxx from "../Tools/Auxx";
import { searchCity } from "../Tools/SearchCity";

const WeatherForm = () => {
  return (
    <Auxx>
      <weatherContext.Consumer>
        {(contetxProps) => {
          const { city, setCity, refCity } = contetxProps;
          return (
            <section>
              <form onSubmit={(e) => searchCity(e, contetxProps)}>
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
