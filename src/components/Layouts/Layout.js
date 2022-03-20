import { Fragment, useState } from "react";

import { weatherContext } from "../../Hooks/Context";
import { Focus } from "../../Tools/Focus";
import Navbar from "./Navbar";

function Layout() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});

  //   default focus on input
  const refCity = Focus(city);

  return (
    <Fragment>
      <weatherContext.Provider
        value={{ city, setCity, refCity, weather, setWeather }}
      >
        <Navbar></Navbar>
      </weatherContext.Provider>
    </Fragment>
  );
}

export default Layout;
