import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function NavScrollExample({ search, setSearch, category, setcategory }) {
  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container fluid>
        <Navbar.Brand href="#">
          <img
            className="logo"
            src="https://etulab.univ-amu.fr/uploads/-/system/group/avatar/13315/logo.png"
            alt="Logo"
          />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />

        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-lg-0"
            style={{ maxHeight: "120px" }}
            navbarScroll
          >
            <Nav.Link href="/">Home</Nav.Link>

            <NavDropdown
              title={category ? category : "All Categories"}
              id="navbarScrollingDropdown"
            >
              <NavDropdown.Item onClick={() => setcategory("Beauty")}>
                Beauty
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Fragrances")}>
                Fragrances
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Furniture")}>
                Furniture
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Groceries")}>
                Groceries
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Smartphones")}>
                Smartphones
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Laptops")}>
                Laptops
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Mens Shirts")}>
                Mens Shirts
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Mens Shoes")}>
                Mens Shoes
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Womens Dresses")}>
                Womens Dresses
              </NavDropdown.Item>

              <NavDropdown.Item onClick={() => setcategory("Womens Shoes")}>
                Womens Shoes
              </NavDropdown.Item>

                </NavDropdown>

            <Form className="Search">
              <Form.Control
                type="search"
                name="search"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search Product"
                className="rounded-pill"
              />
            </Form>
          </Nav>
        </Navbar.Collapse>
      </Container>

      <Nav.Link className="cart" as={Link} to="/view-cart">
        🛒Cart
      </Nav.Link>

      <Nav.Link className="cart" as={Link} to="/wishlist">
        ❤️ Wishlist
      </Nav.Link>

      <Nav.Link className="cart" href="#">
        👤Login
      </Nav.Link>

    </Navbar>
  );
}

export default NavScrollExample;
