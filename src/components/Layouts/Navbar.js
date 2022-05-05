import { Fragment } from "react";

import { BrowserRouter, NavLink, Switch, Route } from "react-router-dom";
import { Navbar, Container, Nav } from "react-bootstrap";

import Main from "./Main/Main";
import About from "./About/About";

const NavbarMenu = () => {
  const NavLinkClass = ["text-decoration-none text-light fw-bold"];
  return (
    <BrowserRouter>
      <Fragment>
        <Navbar className=" shadow" bg="dark" variant="dark">
          <Container>
            <Nav className="me-auto">
              <Nav.Link>
                <NavLink className={`${NavLinkClass}`} to="/">
                  Home
                </NavLink>
              </Nav.Link>
              <Nav.Link>
                <NavLink className={`${NavLinkClass}`} to="/about">
                  About
                </NavLink>
              </Nav.Link>
            </Nav>
          </Container>
        </Navbar>

        <Switch>
          <Route exact path="/" component={Main} />
          <Route exact path="/about" component={About} />
        </Switch>
      </Fragment>
    </BrowserRouter>
  );
};
export default NavbarMenu;
