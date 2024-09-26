import React from "react";
import "./Images.css";
import background from "./background.jpg";

const Images = () => {
  return (
    <div className="card-two">
      <img src={background} className="card-img-top" alt="..." />
      <div className="card-body m-3">
        <h5 className="card-titlee">Card title</h5>
        <p className="card-teext">
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </p>
        <a href="#" className="btn btn-primary mb-2">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default Images;
