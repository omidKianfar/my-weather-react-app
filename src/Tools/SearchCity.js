import { getApiData } from "../Hooks/FetchApi";

export const searchCity = (e, props) => {
  e.preventDefault();
  getApiData(props);
  props.setCity("");
};
