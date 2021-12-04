import { useEffect, useState } from "react";
import ItemList from "../Components/Item";


const ItemListContainer = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://fakestoreapi.com/products")
        .then((response) => response.json())
        .then((json) => setProduct(json));
    }, 2000);
  }, []);

  return (
    <div>
      {product.length > 0 ? (
        <ItemList product={product} />
      ) : (
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
