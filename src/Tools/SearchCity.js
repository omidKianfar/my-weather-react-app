import { getApiData } from "../Hooks/FetchApi";

// Search city in ioen weather site api
export const searchCity = (e, props) => {
  e.preventDefault();
  getApiData(props);
  props.setCity("");
};
