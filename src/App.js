import Header from "./components/Header";
import "./App.css";
import { useEffect } from "react";
import ProductCard from "./components/ProductCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "./services/getProductsSlice";
import Loader from "react-js-loader";

function App() {
  const products = useSelector((state) => state.products.products);
  const isLoading = useSelector((state) => state.products.isLoading);
  const error = useSelector((state) => state.products.error);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts(`https://fakestoreapi.com/products`));
  }, [dispatch]);
  if (isLoading) {
    return (
      <>
        <Loader
          type="spinner-default"
          bgColor={"#808080"}
          color={"#808080"}
          title={"Loading..."}
          size={200}
          className='loader'
        />
      </>
    );
  }

  if (error) {
    return error;
  }
  console.log("Product data from Redux:", products);

  return (
    <div className="App">
      <Header headerContent="FakeShop" />
      <div className="cart-main">
        {products.length > 0 ? (
          products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default App;
