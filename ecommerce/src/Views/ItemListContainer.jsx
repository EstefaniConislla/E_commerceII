import { useEffect, useState} from "react";
import ItemList from "../Components/ItemList";

const ItemListContainer = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
       .then((json) => setProduct(json));
  }, []);
    

    return (
        <div>
            <ItemList product={product}/>
        </div>
    )
}

export default ItemListContainer;
