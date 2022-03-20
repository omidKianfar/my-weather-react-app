import { weatherContext } from "../Hooks/Context";
import { searchCity } from "../Tools/SearchCity";

const WeatherForm = () => {
  return (
    <Fragment>
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
    </Fragment>
  );
};
export default WeatherForm;
