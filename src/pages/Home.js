import React from "react";
import Product from "../components/Product";
const Home = () => {
  return (
    <div>
      <div>
        <h2 className="heading">Welcome to the Redux toolkit store</h2>
        <section>
          <h3>Products</h3>
          <Product />
        </section>
      </div>
    </div>
  );
};

export default Home;
