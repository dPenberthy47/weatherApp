import React from "react";
import "./Card.css";

const Card = props => (
  <div
    className="card"
    style={{ backgroundImage: props.image ? `url(${props.image})` : "none" }}>
    <img alt={props.name} src={props.image} />
  </div>
);

export default Card;
