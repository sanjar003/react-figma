import React from "react";
import Mesto from "../images/icons/mesto.svg";
import Zvazda from "../images/icons/zvexda.svg";

export default function Section(props) {
  const { title, subtitle,  place,raiting,term,price } = props;
  return (
    <div >
      <h3>{title}</h3>
      <p>{subtitle}</p>
      <span><img src={Mesto} alt="" />{place} <img src={Zvazda} alt="" />{raiting}</span>
      <p>{term}</p>
      <p>{price}person</p>
   
    </div>
  );
}
