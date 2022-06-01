import { Fragment, useState } from "react";

import { weatherContext } from "../../Hooks/Context";
import { Focus } from "../../Tools/Focus";
import NavbarMenu from "./Navbar/Navbar";

function Layout() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({});
  const [sky, setSky] = useState(null);
  const [HowSky, setHowSky] = useState("");

  //   default focus on input
  const refCity = Focus(city);

  return (
    <Fragment>
      <weatherContext.Provider
        value={{
          city,
          setCity,
          refCity,
          weather,
          setWeather,
          sky,
          setSky,
          HowSky,
          setHowSky,
        }}
      >
        <NavbarMenu></NavbarMenu>
      </weatherContext.Provider>
    </Fragment>
  );
}

export default Layout;
