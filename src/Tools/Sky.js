import { useEffect } from "react";

import sunIcon from "../components/Weather/Img/brightness-high.svg";
import cloudIcon from "../components/Weather/Img/cloud.svg";
import snowIcon from "../components/Weather/Img/cloud-drizzle.svg";

export const Sky = ({ weather, setSky, setHowSky }) => {
  useEffect(() => {
    if (weather.main) {
      switch (weather.weather[0].main) {
        case "Sun":
          setHowSky("Sunny");
          setSky(sunIcon);
          break;
        case "Clouds":
          setHowSky("Cloudy");
          setSky(cloudIcon);
          break;
        case "Clear":
          setHowSky("Clear Sky");
          setSky(sunIcon);
          break;
        case "Rain":
          setHowSky("Rainy");
          setSky(cloudIcon);
          break;
        case "Snow":
          setHowSky("Snowy");
          setSky(snowIcon);
          break;
        case "Mist":
          setHowSky("Misty");
          setSky(null);
          break;
        default:
          setHowSky("");
          setSky(null);
          break;
      }
    }
  }, [weather.main]);
};
