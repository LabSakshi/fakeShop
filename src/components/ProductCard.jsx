import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../redux/productSlice";
import "./productCard.css";
const ProductCard = ({ product }) => {
  console.log(product, "from card component");
  const dispatch = useDispatch();
  const cartProduct = useSelector(state => state.products.productCart)
  console.log(cartProduct)
  return (
    <div className="product_card_container">
      <div className="product_card_image">
        <img
          src={product.image}
          alt={product.title}
          className="product_image"
        />
      </div>
      <div className="product_title">{product.title} </div>
      <div className="product_price">{product.price}</div>
      <div className="product_category">{product.category}</div>
      <button
        className="add_to_cart_button"
        onClick={() => {
          
          dispatch(addProductToCart(product))}}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductCard;
