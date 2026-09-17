import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Home.css";

function Home({ search, category, setcategory }) {
  const [data, setData] = useState([]);
  const [categories, setCategories] = useState([]);
  const [wishlist, setWishlist] = useState(
    JSON.parse(localStorage.getItem("wishlist")) || [],
  );

  const navigate = useNavigate();

  /* ================= PRODUCTS API ================= */

  useEffect(() => {
    fetch("https://dummyjson.com/products?limit=194")
      .then((res) => res.json())
      .then((data) => {
        setData(data.products);
      })
      .catch((error) => console.log("Products Error:", error));
  }, []);

  /* ================= CATEGORY API ================= */

  useEffect(() => {
    fetch("https://dummyjson.com/products/categories")
      .then((res) => res.json())
      .then((categoryData) => {
        setCategories(categoryData.slice(0, 14));
      })
      .catch((error) => console.log("Category Error:", error));
  }, []);

  /* ================= CATEGORY IMAGE ================= */

  const getCategoryImage = (categoryItem) => {
    const categoryValue =
      typeof categoryItem === "string" ? categoryItem : categoryItem.slug;

    const product = data.find(
      (item) => item.category.toLowerCase() === categoryValue.toLowerCase(),
    );

    return product?.thumbnail || "";
  };

  /* ================= MOST POPULAR PRODUCTS ================= */

  const featuredProducts = [...data]
    .sort((a, b) => b.rating - a.rating)
    .slice(0, 8);

  /* ================= WISHLIST ================= */

  const addWishlist = (item) => {
    const alreadyExists = wishlist.some(
      (wishlistItem) => wishlistItem.id === item.id,
    );

    let updatedWishlist;

    if (alreadyExists) {
      updatedWishlist = wishlist.filter(
        (wishlistItem) => wishlistItem.id !== item.id,
      );

      alert("Removed from Wishlist 💔");
    } else {
      updatedWishlist = [...wishlist, item];

      alert("Added to Wishlist ❤️");
    }

    setWishlist(updatedWishlist);

    localStorage.setItem("wishlist", JSON.stringify(updatedWishlist));
  };

  /* ================= CATEGORY CLICK ================= */

  const handleCategoryClick = (item) => {
    const categoryValue = typeof item === "string" ? item : item.slug;

    setcategory(categoryValue);

    navigate("/all-products");

    setTimeout(() => {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }, 100);
  };

  return (
    <main className="home">
      {/* ================= HERO ================= */}

      <section className="home-hero">
        <div className="hero-overlay"></div>

        <div className="container hero-container">
          <div className="row align-items-center">
            <div className="col-lg-7">
              <span className="hero-badge">🛍️ Welcome to Shop Sphere</span>

              <h1>
                Everything You Need,
                <span> All in One Place.</span>
              </h1>

              <p>
                Discover amazing products, unbeatable prices, and exciting
                deals. Shop your favorite products from the comfort of your
                home.
              </p>

              <div className="hero-buttons">
                <Link className="btn hero-shop-btn" to="/all-products">
                  Shop Now
                  <i className="bi bi-arrow-right ms-2"></i>
                </Link>

                <a href="#categories" className="btn hero-category-btn">
                  Explore Categories
                </a>
              </div>

              <div className="hero-stats">
                <div>
                  <strong>1000+</strong>
                  <span>Products</span>
                </div>

                <div>
                  <strong>500+</strong>
                  <span>Happy Customers</span>
                </div>

                <div>
                  <strong>24/7</strong>
                  <span>Support</span>
                </div>
              </div>
            </div>

            <div className="col-lg-5">
              <div className="hero-shopping-card">
                <div className="floating-card card-one">
                  <i className="bi bi-truck"></i>

                  <div>
                    <strong>Fast Delivery</strong>
                    <small>Delivered to your door</small>
                  </div>
                </div>

                <div className="hero-circle">
                  <i className="bi bi-bag-heart-fill"></i>

                  <div className="hero-circle-text">SHOP</div>
                </div>

                <div className="floating-card card-two">
                  <i className="bi bi-tag-fill"></i>

                  <div>
                    <strong>Best Deals</strong>
                    <small>Save more every day</small>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= CATEGORIES ================= */}

      <section className="categories-section" id="categories">
        <div className="container">
          <div className="section-heading">
            <span>EXPLORE OUR STORE</span>

            <h2>
              Shop By <strong>Category</strong>
            </h2>

            <p>
              Find exactly what you're looking for from our wide range of
              categories.
            </p>
          </div>

          {/* HORIZONTAL CATEGORY SCROLL */}

          <div className="category-scroll">
            {categories.map((item, index) => {
              const categoryName = typeof item === "string" ? item : item.name;

              const categoryValue = typeof item === "string" ? item : item.slug;

              const image = getCategoryImage(item);

              return (
                <button
                  className="category-card"
                  key={categoryValue || index}
                  onClick={() => handleCategoryClick(item)}
                >
                  <div className="category-image">
                    {image ? (
                      <img src={image} alt={categoryName} />
                    ) : (
                      <i className="bi bi-grid"></i>
                    )}
                  </div>

                  <h5>{categoryName}</h5>

                  <span>
                    Explore
                    <i className="bi bi-arrow-right"></i>
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* ================= WHY CHOOSE US ================= */}

      <section className="why-section">
        <div className="container">
          <div className="section-heading light-heading">
            <span>WHY SHOP WITH US</span>

            <h2>
              Shopping Made <strong>Simple</strong>
            </h2>

            <p>We make online shopping easy, secure, and enjoyable.</p>
          </div>

          <div className="row g-4">
            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-truck"></i>
                </div>

                <h4>Fast Delivery</h4>

                <p>Get your favorite products delivered quickly and safely.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-shield-check"></i>
                </div>

                <h4>Secure Payment</h4>

                <p>Your payment information is always protected and secure.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-arrow-repeat"></i>
                </div>

                <h4>Easy Returns</h4>

                <p>Simple and hassle-free returns whenever you need them.</p>
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="why-card">
                <div className="why-icon">
                  <i className="bi bi-headset"></i>
                </div>

                <h4>24/7 Support</h4>

                <p>Our support team is always ready to help you.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MOST POPULAR PRODUCTS ================= */}

      <section className="products-section" id="products">
        <div className="container">
          <div className="products-top">
            <div className="section-heading text-start mb-0">
              <span>MOST POPULAR</span>

              <h2>
                Most Popular <strong>Products</strong>
              </h2>

              <p>Explore the products loved and rated by our customers.</p>
            </div>

            <Link to="/all-products" className="view-all-btn">
              View All
              <i className="bi bi-arrow-right"></i>
            </Link>
          </div>

          {/* ================= 8 MOST POPULAR PRODUCTS ================= */}

          {featuredProducts.length > 0 ? (
            <div className="row g-4 mt-2">
              {featuredProducts.map((item) => (
                <div className="col-sm-6 col-lg-4 col-xl-3" key={item.id}>
                  <div className="home-product-card">
                    <div className="product-image">
                      <button
                        onClick={() => addWishlist(item)}
                        className={`wishlist-btn ${
                          wishlist.some(
                            (wishlistItem) => wishlistItem.id === item.id,
                          )
                            ? "active"
                            : ""
                        }`}
                      >
                        <i className="bi bi-heart-fill"></i>
                      </button>

                      <img src={item.thumbnail} alt={item.title} />

                      {item.discountPercentage && (
                        <span className="discount-badge">
                          -{Math.round(item.discountPercentage)}%
                        </span>
                      )}
                    </div>

                    <div className="product-content">
                      <h5>{item.title}</h5>

                      <p>{item.description.slice(0, 75)}...</p>

                      <div className="product-bottom">
                        <span className="rating">⭐ {item.rating}</span>

                        <strong>${item.price}</strong>
                      </div>

                      <Link
                        to={`/View-details/${item.id}`}
                        className="view-product-btn"
                      >
                        View Details
                        <i className="bi bi-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="no-products">
              <i className="bi bi-search"></i>

              <h3>No Products Found</h3>

              <p>Products are loading...</p>
            </div>
          )}
        </div>
      </section>

      {/* ================= OFFER ================= */}

      <section className="offer-section">
        <div className="container">
          <div className="offer-box">
            <div>
              <span className="offer-label">LIMITED TIME OFFER</span>

              <h2>
                Great Deals Are
                <br />
                Waiting For You!
              </h2>

              <p>Don't miss out on amazing products and exclusive offers.</p>

              <Link to="/all-products" className="offer-btn">
                Start Shopping
                <i className="bi bi-arrow-right ms-2"></i>
              </Link>
            </div>

            <div className="offer-icon">
              <i className="bi bi-bag-heart-fill"></i>

              <span>SALE</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Home;
