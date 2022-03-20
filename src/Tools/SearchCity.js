import { fetchApi } from "../Hooks/FetchApi";

export const searchCity = (e, props) => {
  e.preventDefault();
  fetchApi(props);
  props.setCity("");
};
