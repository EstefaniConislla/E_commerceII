
const Item = ({ product}) => {
    return (
        <>
      <div className="CardContainer">
        {product &&
          product.map((item, index) => (
            <div className="card" style={{ width: "18rem" }} key={index}>
              <img src={item.image} className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{item.title}</h5>
                <p className="card-text">{item.description}</p>
                <p className="card-price">Price: S/{item.price}</p>
                </div>
            </div>
          ))}
      </div>
    </>
    )
}

export default Item;
