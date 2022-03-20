// api detailes ---------------------------------------
const apiDetailes = {
  key: "f84377c9d5764f0c9a558763d11f1083",
  base: "https://api.openweathermap.org/data/2.5/",
};

export const fetchApi = (props) => {
  const { city, setWeather } = props;
  const url = `${apiDetailes.base}weather?q=${city}&appid=${apiDetailes.key}`;
  fetch(url)
    .then((response) => response.json())
    .then((result) => setWeather(result));
};
