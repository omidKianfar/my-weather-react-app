import Styles from "./About.module.css";

import { Container, Row, Col } from "react-bootstrap";

import myImg from "./Img/Untitled-2-min.jpg";

const About = () => {
  const headClass = [`text-center p-3 fw-bold bg-info rounded shadow `];
  const ulClass = [`list-unstyled ms-3`];
  const linkClass = [`link-info text-decoration-none`];

  return (
    <main className={`${Styles.menu} col-md-10 p-4`}>
      <Container>
        <h2 className={`${headClass} ${Styles.h1}`}>About Application</h2>

        <Row>
          <Col className="p-3 ps-5">
            <h4 className="pb-3 fw-bold">Technologies</h4>
            <ul className={`${ulClass}`}>
              <li>HTML 5</li>
              <li>CSS Modules</li>
              <li>React-Bootstrap</li>
              <li>React.js</li>
              <li>React-Router</li>
              <li>Axios</li>
            </ul>
          </Col>

          <Col className="p-3 ps-5">
            <h4 className="pb-3 fw-bold">Sources</h4>
            <ul className={`${ulClass}`}>
              <li>
                <a className={`${linkClass}`} href="https://www.w3schools.com/">
                  www.w3school.com
                </a>
              </li>
              <li>
                <a className={`${linkClass}`} href="https://reactjs.org/">
                  www.reactjs.org
                </a>
              </li>
              <li>
                <a
                  className={`${linkClass}`}
                  href="https://getbootstrap.com/docs/5.1/"
                >
                  www.getbootstrap.com
                </a>
              </li>
              <li>
                <a
                  className={`${linkClass}`}
                  href="https://react-bootstrap.github.io/"
                >
                  www.react-bootstrap.github.io
                </a>
              </li>
            </ul>
          </Col>
        </Row>

        <h2 className={`${headClass} ${Styles.h1}`}>About Me</h2>

        <Row>
          <Col className="d-flex justify-content-around mb-5">
            <img
              src={myImg}
              alt="omid kianfar"
              className="w-50 rounded-circle shadow "
            />
          </Col>

          <Col>
            <p>Fname: omid</p>
            <p>Lname: kianfar</p>
            <p>Gmail: omid.kianfar.990@gmail.com</p>
            <p>
              Github:
              <a
                className={`${linkClass}`}
                href="https://github.com/omidKianfar"
              >
                &nbsp;https://github.com/omidKianfar
              </a>
            </p>
            <p>
              Linkedin:
              <a
                className={`${linkClass}`}
                href="https://www.linkedin.com/in/omid-kianfar-248723232/"
              >
                &nbsp;https://www.linkedin.com/in/omid-kianfar-248723232/
              </a>
            </p>
          </Col>
        </Row>
      </Container>
    </main>
  );
};
export default About;
