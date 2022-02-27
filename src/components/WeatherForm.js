import React from "react";

const WeatherForm = ({ searchCity, city, setCity }) => {
  return (
    <section>
      <form onSubmit={searchCity}>
        <input
          type="text"
          placeholder="EnterCity"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <input type="submit" value="Search" />
      </form>
    </section>
  );
};
export default WeatherForm;
