import axios from "axios";

// api api detailes

const apiDetailes = {
  key: "f84377c9d5764f0c9a558763d11f1083",
  base: "https://api.openweathermap.org/data/2.5/",
};

// get api data
export const getApiData = ({ city, setWeather }) => {
  const url = `${apiDetailes.base}weather?q=${city}&appid=${apiDetailes.key}`;
  axios(url).then((response) => setWeather(response.data));
};
