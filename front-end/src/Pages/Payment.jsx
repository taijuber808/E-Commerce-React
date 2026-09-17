import React, { useEffect, useState } from "react";


function Payment() {
  const [cartItems, setCartItems] = useState([]);
  const [showPayment, setShowPayment] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState("cod");

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const totalPrice = cartItems.reduce((acc, item) => acc + item.price, 0);

  const placeOrder = () => {
    alert("🎉 Order Placed Successfully!");

    localStorage.removeItem("cart");

    window.location.href = "/";
  };

  return (
    <div className="container my-5 pt-5">
      <div className="row">
        <div className="col-lg-8">
          <div className="card shadow border-0 p-4">
            <h3 className="mb-4">Billing Details</h3>

            <form
              onSubmit={(e) => {
                e.preventDefault();
                setShowPayment(true);
              }}
            >
              <input
                type="text"
                className="form-control mb-3"
                placeholder="Full Name"
                required
              />

              <input
                type="email"
                className="form-control mb-3"
                placeholder="Email Address"
                required
              />

              <input
                type="tel"
                className="form-control mb-3"
                placeholder="Phone Number"
                required
              />

              <textarea
                className="form-control"
                rows="4"
                placeholder="Shipping Address"
                required
              />

              <button type="submit" className="btn btn-success  mt-3" >
                Proceed To Checkout
              </button>
            </form>
          </div>
        </div>

        <div className="col-lg-4">
          <div className="card shadow border-0 p-4">
            <h4>Order Summary</h4>

            <hr />

            {cartItems.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between mb-2"
              >
                <span>{item.title}</span>
                <span>${item.price}</span>
              </div>
            ))}

            <hr />

            <div className="d-flex justify-content-between fw-bold">
              <span>Total</span>
              <span>${totalPrice.toFixed(2)}</span>
            </div>

            {showPayment && (
              <div className="mt-4">
                <h5 className="mb-3">Select Payment Method</h5>

                {/* COD */}
                <div className="form-check">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={paymentMethod === "cod"}
                    onChange={() => setPaymentMethod("cod")}
                  />
                  <label className="form-check-label">
                    Cash On Delivery (COD)
                  </label>
                </div>

                {/* UPI */}
                <div className="form-check mt-2">
                  <input
                    className="form-check-input"
                    type="radio"
                    checked={paymentMethod === "upi"}
                    onChange={() => setPaymentMethod("upi")}
                  />
                  <label className="form-check-label">UPI / QR Payment</label>
                </div>

                {/* QR Code */}
                {paymentMethod === "upi" && (
                  <div className="text-center mt-3">
                            <img
          src="https://api.qrserver.com/v1/create-qr-code/?size=180x180&data=ShopSpherePayment"
          alt="QR Code"
          className="img-fluid"
        />


                    <p className="small text-muted mt-2">
                      Scan using PhonePe, Google Pay or Paytm
                    </p>
                  </div>
                )}

                <button
                  className="btn btn-success w-100 mt-3"
                  onClick={placeOrder}
                >
                  Place Order
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
