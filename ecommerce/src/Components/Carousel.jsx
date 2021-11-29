import { useEffect, useState } from "react";
import './Carousel.css';

const Carousel = () => {
  const [category, setCategory] = useState([]);

  console.log(category);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((response) => response.json())
      .then((json) => setCategory(json));
  }, []);

  return (
    <div className="ContainerCarousel">
      <div
        id="carouselExampleControls"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {category &&
            category.map((item, index) =>
              index === 0 ? (
                <div className="carousel-item active" key={index}>
                  <img src={item.image} className="d-block w-60" alt="..." />
                </div>
              ) : (
                <div className="carousel-item" key={index}>
                  <img src={item.image} className="d-block w-60" alt="..." />
                </div>
              )
            )}
        </div>
        <button
          className="carousel-control-prev "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev">
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
        </button>
        <button
          className="carousel-control-next "
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next">
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
        </button>
      </div>
    </div>
  );
};

export default Carousel;
