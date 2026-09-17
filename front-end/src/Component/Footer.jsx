import React from "react";

function Footer() {
  return (
    <>
      {/* Features Section */}
      <div className="container-fluid bg-light py-4 mt-4 border-top">
        <div className="container">
          <div className="row text-center">
            <div className="col-md-3 mb-3">
              <i className="bi bi-truck fs-2 text-warning"></i>
              <h6 className="mt-2">Free Shipping</h6>
              <small>On orders above ₹999</small>
            </div>

            <div className="col-md-3 mb-3">
              <i className="bi bi-shield-check fs-2 text-warning"></i>
              <h6 className="mt-2">Secure Payment</h6>
              <small>100% protected payments</small>
            </div>

            <div className="col-md-3 mb-3">
              <i className="bi bi-arrow-repeat fs-2 text-warning"></i>
              <h6 className="mt-2">Easy Returns</h6>
              <small>7 days return policy</small>
            </div>

            <div className="col-md-3 mb-3">
              <i className="bi bi-headset fs-2 text-warning"></i>
              <h6 className="mt-2">24/7 Support</h6>
              <small>Dedicated support</small>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <footer
        className="text-white pt-5 pb-3"
        style={{ backgroundColor: "#111827" }}
      >
        <div className="container">
          <div className="row">
            <div className="col-lg-2 col-md-6 mb-4">
                              <h5 className="text-warning">Contact Info</h5>

              <p className="mb-1">
                <i className="bi bi-envelope me-2"></i>
                support@shopmart.com
              </p>

              <p className="mb-1">
                <i className="bi bi-telephone me-2"></i>
                +91 98765 43210
              </p>

              <p>
                <i className="bi bi-geo-alt me-2"></i>
                Ahmedabad, Gujarat
              </p>
            </div>

            {/* Quick Links */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-warning">Quick Links</h5>

              <ul className="list-unstyled">
                <li className="mb-2">Home</li>
                <li className="mb-2">Products</li>
                <li className="mb-2">Wishlist</li>
                <li className="mb-2">Cart</li>
                <li className="mb-2">Contact Us</li>
              </ul>
            </div>

            {/* Categories */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-warning">Categories</h5>

              <ul className="list-unstyled">
                <li className="mb-2">Beauty</li>
                <li className="mb-2">Fragrances</li>
                <li className="mb-2">Furniture</li>
                <li className="mb-2">Groceries</li>
                <li className="mb-2">Smartphones</li>
              </ul>
            </div>

            {/* Customer Service */}
            <div className="col-lg-2 col-md-6 mb-4">
              <h5 className="text-warning">Customer Service</h5>

              <ul className="list-unstyled">
                <li className="mb-2">Track Order</li>
                <li className="mb-2">Shipping Policy</li>
                <li className="mb-2">Return Policy</li>
                <li className="mb-2">FAQs</li>
                <li className="mb-2">Help Center</li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="col-lg-3 col-md-6 mb-4">
              <h5 className="text-warning">Newsletter</h5>

              <p>
                Subscribe to get updates on new arrivals and exclusive offers.
              </p>

              <input
                type="email"
                placeholder="Enter your email"
                className="form-control mb-2"
              />

              <button className="btn btn-warning w-100">Subscribe</button>
            </div>

         <div className="text-center mb-5">

  {/* Logo */}
  <img
    src="https://etulab.univ-amu.fr/uploads/-/system/group/avatar/13315/logo.png"
    alt="Shop Sphere Logo"
    style={{
      width: "80px",
      height: "80px",
      borderRadius: "50%",
      objectFit: "cover",
      marginBottom: "10px",
    }}
  />

  {/* Brand Name */}
  <h2
    className="fw-bold text-warning fst-italic"
    style={{
      letterSpacing: "2px",
    }}
  >
    Shop Sphere
  </h2>

  {/* Description */}
  <p
    className="text-light mx-auto"
    style={{
      maxWidth: "600px",
    }}
  >
    Your trusted online shopping destination. Discover the latest
    products with amazing deals, fast delivery, and secure payments.
  </p>

  {/* Social Icons */}
  <div className="d-flex justify-content-center gap-4 fs-3 social-icons">
    <i className="bi bi-instagram"></i>
    <i className="bi bi-facebook"></i>
    <i className="bi bi-twitter"></i>
    <i className="bi bi-linkedin"></i>
    <i className="bi bi-youtube"></i>
  </div>

</div>

          </div>

          <hr className="border-secondary" />

          {/* Bottom Footer */}
          <div className="row align-items-center">
            <div className="col-md-6 text-center text-md-start">
              <p className="mb-0">© 2026 ShopMart. All Rights Reserved.</p>
            </div>

            <div className="col-md-6 text-center text-md-end mt-3 mt-md-0">
              <span className="me-3">💳 Visa</span>
              <span className="me-3">Mastercard</span>
              <span className="me-3">PayPal</span>
              <span>UPI</span>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
