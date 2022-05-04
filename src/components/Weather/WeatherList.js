import { useContext, useState } from "react";
import { Row, Col } from "react-bootstrap";

import { weatherContext } from "../../Hooks/Context";

import { Sky } from "../../Tools/Sky";

const WeatherList = () => {
  const contextProps = useContext(weatherContext);
  const { weather, sky, HowSky } = contextProps;

  Sky(contextProps);

  const textClass = ["text-center"];
  const borderClass = ["border border-3 rounded"];
  return (
    <div>
      {console.log(weather)}
      {weather.main && (
        <div className={`${textClass} ${borderClass}  mt-3 mb-3  p-2 `}>
          <p>{new Date().toDateString()}</p>

          <Row>
            <Col>
              <h1>{weather.name}</h1>
            </Col>
          </Row>

          <Row className="justify-content-center ">
            <Col sm={12} md={6}>
              <img src={sky} alt="" width={75} />
              <p className="fw-bold">{HowSky}</p>
            </Col>
          </Row>
          <Row
            className={`${borderClass} fw-bold bg-light pt-3 m-2  border-dark `}
          >
            <Col>
              <p>{Math.round(weather.main.temp - 273)}° centigrade </p>
            </Col>
            <Col>
              <p>{Math.round(weather.main.temp)}° Celsius</p>
            </Col>
          </Row>
        </div>
      )}
    </div>
  );
};
export default WeatherList;
