import React, { useState } from 'react'

function Wishlist () {
    const [wishlist, setWishlist] = useState([]);
    const addToWishlist = (item) => {
  setWishlist([...wishlist, item]);
};
  return (
    <>
    <h2>Wishlist</h2>

      {wishlist.map((item) => (
        <div key={item.id}>
          <h4>{item.title}</h4>
        </div>
      ))}

    </>
  )
}

export default Wishlist 