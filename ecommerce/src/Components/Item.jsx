import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import "./Item.css";
// import ItemList2 from "./ItemList2";

const ItemList = ({ product }) => {
  let navigate = useNavigate();
    console.log(navigate, 'look');

  const handlerProduct=(productItem)=>{
    console.log(productItem);
    navigate(`/Products/${productItem.id}`);

  }

  return (
    <>
      <div className="CardContainer">
        {product &&
          product.map((item, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">Categoria: {item.category}</p>
                <button
                  onClick={()=> handlerProduct(item)}

                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#id${item.id}`}
                >
                  View more Detail
                </button>
                {/* <ItemList2 item={item} /> */}
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemList;
