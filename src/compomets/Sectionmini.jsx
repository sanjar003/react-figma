import React from "react";
import Sections from "./Section";
import Images1 from "../images/phooto1.png";
import Images2 from "../images/photo2.png";
import Images3 from "../images/photo3.png";
import Images4 from "../images/photo4.png";
import Left from "../images/icons/Group 145.svg"
import Senter from "../images/icons/Group 146.svg"
import Right from "../images/icons/Group 166.svg"
import Title from "./Title";

export default function Sectionmini() {
  return (
    <div className="cards-2-section">
      <Title
        title="Special "
        subtitle="В отличие от следующей функции, которая меняет введённый аргумент:"
      />
      <div className="cards-container">
        <div className="cards">
          <img src={Images1} alt="" />
          <Sections title="Statue of Liberty" subtitle=""       
        place="New York"
        raiting="4.8"
        term="1 night"
        price="$100/"/>
        </div>
        <div className="cards">
          <img src={Images2} alt="" />
          <Sections title="The Great Wall" subtitle=""
          place="New York"
          raiting="4.8"
          term="1 night"
          price="$100/"/>
          
        </div>
        <div className="cards">
          <img src={Images3} alt="" />
          <Sections title="Dizin" subtitle="" 
          place="New York"
          raiting="4.8"
          term="1 night"
          price="$100/"/>
        </div>
        <div className="cards">
          <img src={Images4} alt="" />
          <Sections title="Sajek valley" subtitle="" 
          place="New York"
          raiting="4.8"
          term="1 night"
          price="$100/"/>
        </div>
      </div>
      <div className="Strelca">
      <img  className="Left" src={Left} alt="" />
      <img src={Right} alt="" />
      <img className="Right" src={Senter} alt="" />
      </div>
    </div>
  );
}
