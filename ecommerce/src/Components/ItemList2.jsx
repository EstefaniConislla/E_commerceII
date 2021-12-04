import React from 'react';
import { useState } from "react";
import { useParams } from "react-router-dom";


const ItemList2 = () => {
    let params = useParams();

    const [product, setProduct] = useState([]);
    const [productInfo, setProductInfo] = useState([]);

    // useEffect(() => {
          fetch("https://fakestoreapi.com/products")
            .then((response) => response.json())
            .then((json) => setProduct(json));
        // }, []);
        console.log(product);
        

    // const filterProducts=(params)=>{
    //     const filterId = (product.filter(elem=>elem.id==params.id)); 
    //     setProductInfo(filterId);
    // }
    // filterProducts(params);
    // console.log(productInfo);
    
    return (

        <div className="modal-body">
            {/* <img src={item.image} className="card-img-top" alt="..." />
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.description}</p>
            <p className="card-price">Price: S/{item.price}</p> */}
          </div>
    )
}

export default ItemList2;