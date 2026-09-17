import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function View() {
  const { id } = useParams();

  const [product, setProduct] = useState(null);

  useEffect(() => {
    fetch(`https://dummyjson.com/products/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  // LOADING
  if (!product) {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      >
        <h1>Loading...</h1>
      </div>
    );
  }

  const addtocart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(product);
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${product.title} added to cart`);
  };

  return (
    <div className="container py-5 " style={{ marginTop: "100px" }}>
      <div className="card shadow-lg border-0 p-4">
        <div className="row g-4 align-items-center">
          <div className="col-md-5 text-center">
            <img
              src={product.images[0]}
              alt={product.title}
              className="img-fluid rounded"
              style={{ maxHeight: "400px", objectFit: "contain" }}
            />
          </div>

          <div className="col-md-7">
            <h1 className="fw-bold mb-3">{product.title}</h1>

            <p className="text-muted">{product.description}</p>

            <div className="d-flex align-items-center gap-3 mb-3">
              <h2 className="text-success fw-bold mb-0">$ {product.price}</h2>

              {product.discountPercentage && (
                <span className="badge bg-danger fs-6">
                  {product.discountPercentage}% OFF
                </span>
              )}
            </div>

            <div className="row">
              <div className="col-sm-6 mb-2">
                <strong>Category :</strong> {product.category}
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Brand :</strong> {product.brand}
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Rating :</strong> ⭐ {product.rating}
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Stock :</strong> {product.stock}
              </div>

              <div className="col-sm-6 mb-2">
                <strong>SKU :</strong> {product.sku}
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Weight :</strong> {product.weight} g
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Warranty :</strong> {product.warrantyInformation}
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Shipping :</strong> {product.shippingInformation}
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Status :</strong>
                <span className="badge bg-success ms-2">
                  {product.availabilityStatus}
                </span>
              </div>

              <div className="col-sm-6 mb-2">
                <strong>Return :</strong> {product.returnPolicy}
              </div>
            </div>

            <div className="mt-4">
              {product.tags?.map((tag, index) => (
                <span key={index} className="badge bg-secondary me-2 p-2">
                  #{tag}
                </span>
              ))}
            </div>

            <div className="mt-4 d-flex gap-3">
              <button className="btn  px-4" style={{backgroundColor: "#f2a31c" }} onClick={addtocart}>
                Add To Cart
              </button>

              <Link to="/payment" className="btn btn-success">
                Buy Now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default View;
