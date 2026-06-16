import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Section({ search, category }) {
  const [data, setdata] = useState([]);
  const [current, setcurrent] = useState(1);
  const [sortOrder, setSortOrder] = useState("");

  const userpages = 16;

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => setdata(data.products))
      .catch((error) => console.log("Error:", error));
  }, []);

  // Filter Data
  const filterData = data.filter(
    (item) =>
      item.title.toLowerCase().includes(search.toLowerCase()) &&
      (!category || item.category.toLowerCase() === category.toLowerCase()),
  );

  const sorteddata = [...filterData].sort((a, b) => {
    if (sortOrder === "Low") {
      return a.price - b.price;
    } else if (sortOrder === "High") {
      return b.price - a.price;
    }
    return 0;
  });

  // Pagination Logic
  const lastpage = current * userpages;
  const firstpage = lastpage - userpages;
  const currentuser = sorteddata.slice(firstpage, lastpage);
  const totalpage = Math.ceil(filterData.length / userpages);

  const addWishlist = (item) => {
    const wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];

    wishlist.push(item);

    localStorage.setItem("wishlist", JSON.stringify(wishlist));

    alert("Added to Wishlist ❤️");
  };

  return (
    <>
      <div className="container" style={{ marginTop: "90px" }}>
        <div className="d-flex justify-content-end mb-1 ">
          <select
            className="form-select shadow-sm"
            style={{ width: "220px" }}
            value={sortOrder}
            onChange={(e) => setSortOrder(e.target.value)}
          >
            <option value="">Sort by Price</option>
            <option value="Low">Low to High</option>
            <option value="High">High to Low</option>
          </select>
        </div>
      </div>

      <div className="d-flex align-items-center justify-content-center gap-3 ">
        <button
          className="btn btn-dark rounded-circle "
          style={{ width: "70px", height: "50px", marginLeft: "30px" }}
          onClick={() => setcurrent(current - 1)}
          disabled={current === 1}
        >
          ←
        </button>
        {/* Products */}
        <div className="map d-flex flex-wrap justify-content-center gap-4 ">
          {currentuser.map((item) => (
            <div
              key={item.id}
              className="card border-0 shadow-lg product-card"
              style={{
                width: "18rem",
                borderRadius: "20px",
                overflow: "hidden",
                transition: "0.4s ease",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  height: "240px",
                  background: "#f8f9fa",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: "15px",
                  position: "relative",
                }}
              >
                <button
                  onClick={() => addWishlist(item)}
                  className="btn btn-light "
                  style={{
                    position: "absolute",
                    top: "10px",
                    right: "10px",
                    width: "40px",
                    height: "40px",
                    zIndex: 10,
                  }}
                >
                  <i className="bi bi-heart-fill text-danger"></i>
                </button>

                <img
                  src={item.thumbnail}
                  alt={item.title}
                  className="w-100 h-100"
                  style={{
                    objectFit: "contain",
                    transition: "0.4s ease",
                  }}
                />
              </div>

              <div className="card-body d-flex flex-column">
                <h5
                  className="fw-bold"
                  style={{
                    minHeight: "50px",
                  }}
                >
                  {item.title}
                </h5>

                <p
                  className="text-muted"
                  style={{
                    fontSize: "14px",
                    minHeight: "60px",
                  }}
                >
                  {item.description.slice(0, 70)}...
                </p>

                <div className="d-flex justify-content-between align-items-center mt-2">
                  <span className="badge bg-success px-3 py-2">
                    ⭐ {item.rating}
                  </span>

                  <h4 className="text-primary fw-bold mb-0">${item.price}</h4>
                </div>

                {/* BUTTON */}
                <div className="mt-4">
                  <Link
                    to={`/View-details/${item.id}`}
                    className="btn btn-warning w-100 rounded-pill fw-semibold"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="btn btn-dark rounded-circle "
          style={{
            width: "70px",
            height: "50px",
            marginRight: "30px",
          }}
          onClick={() => setcurrent(current + 1)}
          disabled={current === totalpage}
        >
          →
        </button>
      </div>
    </>
  );
}

export default Section;
