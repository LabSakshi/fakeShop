import { CiShoppingCart } from "react-icons/ci";
import { useSelector } from "react-redux";
import "./header.css";
const Header = ({ headerContent, contentAlignment }) => {
 const cartProducts = useSelector((state)=>state.products.productCart)
 console.log(cartProducts, 'cart')
  return (
    <div className="header_container">
      <h2 className="header_content">{headerContent}</h2>
      <div className="cart-icon-container">
        <CiShoppingCart size="3rem" color="black" style={{ margin: "1rem" }} />

       {cartProducts.length>0 && (<div className="cart-item-count">{cartProducts.length}</div>)}
      </div>
    </div>
  );
};

export default Header;
