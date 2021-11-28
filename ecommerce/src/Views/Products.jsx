import { useEffect, useState} from "react";
import Card from "../Components/Card";

const Products = () => {
    const [product, setProduct] = useState([])

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
       .then((json) => setProduct(json));
  }, []);
    

    return (
        <div>
            <Card product={product}/>
        </div>
    )
}

export default Products
