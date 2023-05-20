import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { remove } from "../store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartProduct = useSelector((state) => state.cart);
  const handleRemove = (productId) => {
    dispatch(remove(productId));
  };

  return (
    <div>
      <h3>Cart</h3>
      <div>
        {cartProduct.map((product) => (
          <div
            key={product.id}
            className="cartCard"
            style={{ background: "whitesmoke" }}
          >
            <img src={product.image} alt="" />
            <h5>{product.title}</h5>
            <h5>{product.price}</h5>
            <button
              style={{
                border: "none",
                outline: "none",
                background: "#764abc",
                padding: "5px 10px",
                color: "#fff",
                borderRadius: "5px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
              onClick={() => handleRemove(product.id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
