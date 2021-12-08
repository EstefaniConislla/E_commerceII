import React from 'react';
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";


const ItemList2 = () => {
    let params = useParams();

    const [product, setProduct] = useState([]);

    useEffect(() => {
        fetch(`https://fakestoreapi.com/products/${params.id}`)
            .then((response) => response.json())
            .then((json) => setProduct(json));
        }, [params]);
        

    // const filterProducts=(params)=>{
    //     const filterId = (product.filter(elem=>elem.id==params.id)); 
    //     setProductInfo(filterId);
    // }
    // filterProducts(params);
    // console.log(productInfo);
    
    return (

        <div className="modal-body" style={{"display" : "flex", "justify-content": "center", "flex-direction" : "column", "align-items" : "center" }}>
            <img src={product.image} className="card-img-top" style={{"width" : "300px"}}
            alt="..." />
            <br />
            <h5 className="card-title">{product.title}</h5>
            <p className="card-text">{product.description}</p>
            <p className="card-price">Price: S/{product.price}</p>
          </div>
    )
}

export default ItemList2;