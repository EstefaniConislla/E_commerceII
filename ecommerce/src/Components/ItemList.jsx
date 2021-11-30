import "./ItemList.css";
import ItemModal from "./Item";

const ItemList = ({ product }) => {
  console.log(product); 

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
                  type="button"
                  class="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#id${item.id}`}
                >
                  View more Detail
                </button>
                <ItemModal item={item} />
              </div>
            </div>
          ))}
      </div>
    </>
  );
};

export default ItemList;
