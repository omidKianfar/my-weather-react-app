import { Form, Row, Button } from "react-bootstrap";

import { weatherContext } from "../../Hooks/Context";
import { searchCity } from "../../Tools/SearchCity";

const WeatherForm = () => {
  return (
    <div>
      <weatherContext.Consumer>
        {(contetxProps) => {
          const { city, setCity, refCity } = contetxProps;

          return (
            <section>
              <Form onSubmit={(e) => searchCity(e, contetxProps)}>
                <Form.Control
                  className=" w-100 mt-4 mb-2"
                  type="text"
                  placeholder="EnterCity"
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  ref={refCity}
                />

                <Row className="justify-content-center">
                  <Button className="w-25 text-light btn-success" type="submit">
                    Search
                  </Button>
                </Row>
              </Form>
            </section>
          );
        }}
      </weatherContext.Consumer>
    </div>
  );
};
export default WeatherForm;
