import { useContext } from "react";
import { Container, Row, Col } from "react-bootstrap";

import Styles from "./Main.module.css";

import { weatherContext } from "../../../Hooks/Context";

import WeatherForm from "../../Weather/WeatherForm";
import WeatherList from "../../Weather/WeatherList";

const Main = () => {
  const { weather } = useContext(weatherContext);

  return (
    <main
      className={
        weather.main
          ? weather.main.temp >= 273
            ? `${Styles.warm}`
            : `${Styles.cold}`
          : `${Styles.main}`
      }
    >
      <Container>
        <Row className="justify-content-center ">
          <Col sm={12} md={6}>
            <WeatherForm />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col sm={12} md={8}>
            <WeatherList />
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default Main;
