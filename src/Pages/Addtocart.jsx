import React, { useEffect, useState } from "react";

function Addtocart() {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    // LocalStorage se data nikalte waqt error handling
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setProduct(cart);
    } catch (err) {
      console.error("Error loading cart:", err);
      setProduct([]);
    }
  }, []);

  const totalPrice = product.reduce((acc, item) => {
    const price = item && item.price ? item.price : 0;
    return acc + price;
  }, 0);
  useEffect(() => {
    try {
      const rawData = localStorage.getItem("cart");
      const cart = rawData ? JSON.parse(rawData) : [];

      // Sirf wahi items rakhein jo null nahi hain
      const validCart = cart.filter(
        (item) => item !== null && typeof item === "object",
      );
      setProduct(validCart);
    } catch (err) {
      console.error("Error loading cart:", err);
      setProduct([]);
    }
  }, []);

  const removeFromCart = (index) => {
    const updatedCart = [...product];
    updatedCart.splice(index, 1);
    setProduct(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  if (product.length === 0) {
    return (
      <div className="container my-5 text-center p-5  bg-light rounded shadow-sm">
        <h2 className="display-6">Your cart is empty! 🛒</h2>
        <p className="text-muted">Kuch mazedar items add karein.</p>
        <a href="/" className="btn btn-primary mt-3 px-4">
          Continue Shopping
        </a>
      </div>
    );
  }
  return (
    <>
      <div className="container my-5 pt-5">
        <h2 className="fw-bold mb-4">
          Shopping Cart{" "}
          <span className="text-muted small">({product.length} Items)</span>
        </h2>

        <div className="row g-4">
          {/* Products List Section */}
          <div className="col-lg-8">
            {product.map((item, index) => (
              <div
                key={`${item.id}-${index}`}
                className="card border-0 shadow-sm mb-3 overflow-hidden"
              >
                <div className="row g-0 align-items-center">
                  <div className="col-4 col-md-3 bg-light text-center p-2">
                    <img
                      // Optional chaining use ki hai taaki image na hone par error na aaye
                      src={
                        item.images?.[0] ||
                        item.thumbnail ||
                        "https://via.placeholder.com/150"
                      }
                      alt={item.title}
                      className="img-fluid rounded"
                      style={{ maxHeight: "120px", objectFit: "contain" }}
                    />
                  </div>
                  <div className="col-8 col-md-9">
                    <div className="card-body py-2 px-3">
                      <div className="d-flex justify-content-between align-items-start">
                        <div>
                          <h6 className="fw-bold mb-1">
                            {item.title || "Product Name"}
                          </h6>
                          <p className="small text-muted mb-2 d-none d-md-block">
                            {item.description?.substring(0, 60)}...
                          </p>
                        </div>
                        <p className="fw-bold text-dark mb-0">
                          ${item.price?.toFixed(2)}
                        </p>
                      </div>
                      <div className="d-flex justify-content-between align-items-center mt-2">
                        <span className="badge bg-light text-dark border small text-muted">
                          Qty: 1
                        </span>
                        <button
                          className="btn btn-sm text-danger border-0 fw-bold"
                          onClick={() => removeFromCart(index)}
                        >
                          Remove
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary Section */}
          <div className="col-lg-4">
            <div
              className="card border-0 shadow-sm p-4 sticky-top"
              style={{ top: "20px" }}
            >
              <h5 className="fw-bold mb-4">Order Summary</h5>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Subtotal</span>
                <span className="fw-semibold">${totalPrice.toFixed(2)}</span>
              </div>
              <div className="d-flex justify-content-between mb-2">
                <span className="text-muted">Shipping</span>
                <span className="text-success fw-semibold">FREE</span>
              </div>
              <hr />
              <div className="d-flex justify-content-between mb-4">
                <span className="h5 fw-bold">Total</span>
                <span className="h5 fw-bold text-primary">
                  ${totalPrice.toFixed(2)}
                </span>
              </div>
              <button className="btn btn-primary w-100 py-2 fw-bold shadow-sm rounded-pill">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Addtocart;
