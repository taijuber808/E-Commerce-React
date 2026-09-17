import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, useNavigate } from "react-router-dom";

function NavScrollExample({
  search,
  setSearch,
  category,
  setcategory,
}) {
  const [categories, setCategories] = useState([]);

  const navigate = useNavigate();

  // Get Categories From API
  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategories(data.slice(0, 14));
      })
      .catch((error) => console.log("Category Error:", error));
  }, []);

  // Category Click
  const handleCategoryClick = (slug) => {
    setcategory(slug);
    navigate("/all-products");
  };

  return (
    <Navbar expand="lg" className="custom-navbar fixed-top">
      <Container fluid>
        {/* Logo */}
        <Navbar.Brand href="/">
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
            {/* Home */}
            <Nav.Link as={Link} to="/">
              Home
            </Nav.Link>

            {/* All Categories */}
            <NavDropdown
              title={category ? category : "All Categories"}
              id="navbarScrollingDropdown"
            >
              {categories.map((item) => (
                <NavDropdown.Item
                  key={item.slug}
                  onClick={() => handleCategoryClick(item.slug)}
                >
                  {item.name}
                </NavDropdown.Item>
              ))}
            </NavDropdown>

            {/* All Products */}
            <Nav.Link as={Link} to="/all-products">
              All Products
            </Nav.Link>

            {/* Search */}
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

      {/* Cart */}
      <Nav.Link className="cart" as={Link} to="/view-cart">
        🛒 Cart
      </Nav.Link>

      {/* Wishlist */}
      <Nav.Link className="cart" as={Link} to="/wishlist">
        ❤️ Wishlist
      </Nav.Link>

      {/* Login */}
      <Nav.Link className="cart" as={Link} to="/login">
        👤 Login
      </Nav.Link>
    </Navbar>
  );
}

export default NavScrollExample;