import React, { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { add } from "../store/cartSlice";
import { useDispatch, useSelector } from "react-redux";
import { STATUSES, fetchProducts } from "../store/productSlice";

const Product = () => {
  const dispatch = useDispatch();
  const { data: products, status } = useSelector((state) => state.product);

  // const [products, setProducts] = useState([]);

  function handleAdd(product) {
    dispatch(add(product));
  }

  useEffect(() => {
    dispatch(fetchProducts());

    //Since we have moved the api call to redux slice, so we no need to call it from here
    // const fetchProducts = async () => {
    //   const res = await fetch("https://fakestoreapi.com/products");
    //   const data = await res.json();
    //   setProducts(data);
    // };
    // fetchProducts();
  }, []);

  if (status === STATUSES.LOADING) {
    return <h2>Loading....</h2>;
  }

  if (status === STATUSES.ERROR) {
    return <h2>Something went wrong!</h2>;
  }

  const cards = products.map((product) => {
    return (
      <div
        className="col-md-2"
        style={{ marginBottom: "20px", marginLeft: "45px" }}
      >
        <Card key={product.id} className="h-100" style={{ width: "18rem" }}>
          <div className="text-center">
            <Card.Img
              variant="top"
              src={product.image}
              style={{ width: "100px", height: "130px" }}
            />
          </div>
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>Rs. {product.price}</Card.Text>
          </Card.Body>

          <Card.Footer style={{ background: "white" }}>
            <Button onClick={() => handleAdd(product)} variant="primary">
              Add To Cart
            </Button>
          </Card.Footer>
        </Card>
      </div>
    );
  });

  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
