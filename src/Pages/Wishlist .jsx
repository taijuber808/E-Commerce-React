import React, { useEffect, useState } from "react";

function Wishlist() {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("wishlist")) || [];
    setWishlist(items);
  }, []);

  const removeWishlist = (index) => {
    const updatedWishlist = [...wishlist];
    updatedWishlist.splice(index, 1);

    setWishlist(updatedWishlist);
    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  if (wishlist.length === 0) {
    return (
      <div className="container text-center my-5 pt-5">
        <h2>❤️ Wishlist Empty</h2>
        <p className="text-muted">
          Add your favourite products to wishlist.
        </p>
         <a href="/" className="btn btn-warning mt-3 px-4">
          Continue Shopping
        </a>
      </div>
    );
  }

  return (
    <div className="container my-5 pt-5">
      <h2 className="fw-bold mb-4">
        ❤️ My Wishlist ({wishlist.length})
      </h2>

      <div className="row">
        {wishlist.map((item, index) => (
          <div key={index} className="col-md-4 col-lg-3 mb-4">
            <div className="card h-100 shadow border-0">
              <img
                src={item.thumbnail}
                alt={item.title}
                className="card-img-top p-3"
                style={{
                  height: "220px",
                  objectFit: "contain",
                }}
              />

              <div className="card-body">
                <h6 className="fw-bold">
                  {item.title}
                </h6>

                <p className="text-muted small">
                  {item.description?.substring(0, 60)}...
                </p>

                <h5 className="text-success">
                  ${item.price}
                </h5>

                <button
                  className="btn btn-danger w-100 mt-2"
                  onClick={() => removeWishlist(index)}
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Wishlist;