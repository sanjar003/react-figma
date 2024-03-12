import React from "react";
import TITLE from "./Title";
import PHOTOs from "../images/icons/Articlphoto.png";
import Articldphoto from "../images/icons/1photo.png";
import ArticlPhoto from "../images/icons/2photo.png";
import ArticlPHOTO from "../images/icons/3photo.png";
import Article from "./Article";

function Articl() {
  return (
    <div className="ArticlCont">
      <div>
        <img className="image" src={PHOTOs} alt="" />
        <Article title="Banff National Park"
          subtitle="Banff National Park lies in the heart of the majestic Rocky Mountains in the province of Alberta, and showcases some of Canada's most beautiful scenery. Turquoise-colored lakes, snow-capped peaks, and glaciers are all easily accessible 

          "
          text="@thomasalva_adison"
        />
      </div>

      <div>
        <div className="Articlcontainer">
          <img src={Articldphoto} alt="" />
          <TITLE
            title="The Hiroshima Peace!"
            subtitle="It was formally opened to the public in August that year."
            text="@shova_bd88"
          />
        </div>
        <div className="Articlcontainer">
          <img src={ArticlPhoto} alt="" />
          
          <TITLE
            title="The faithful prayers!"
            subtitle="A major pilgrimage center for Hindus, the holy city."
            text="@adem/smith"
          />
        </div>
        <div className="Articlcontainer">
          <img src={ArticlPHOTO} alt="" />
          <TITLE
            title="Colourful waters!"
            subtitle="Forest-driven water and energy cycles are poorly."
            text="@jhon7leew"
          />
        </div>
      </div>
    </div>
  );
}

export default Articl;
