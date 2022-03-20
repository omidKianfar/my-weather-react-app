import { Fragment } from "react";
import WeatherForm from "../Weather/WeatherForm";
import WeatherList from "../Weather/WeatherList";

const Main = () => {
  return (
    <Fragment>
      <div
      // className={
      //   weather.main ? (weather.main.temp > 273 ? "app warm" : "app") : "app"
      // }
      >
        <WeatherForm />
        <WeatherList />
      </div>
    </Fragment>
  );
};
export default Main;
