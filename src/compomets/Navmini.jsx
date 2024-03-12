import React from "react";
import Title from "./Title";
import Image1 from "../assets/image/image 45.png"
import Image2 from "../assets/image/image 47.png"
import Image3 from "../assets/image/image 48.png"


export default function Navmini() {
  return (
    <div className="container"  >
      <Title
        title="Popular Location"
        subtitle="For every onefirst.]  and voyagers— from island hopping in the"
      />
      <div className="Contaner-mini" > 
      <Title
        img={Image1}
        title="Istanbul, Turkey"
        subtitle="The have  Reac environment e necessary styles"
      />
      <Title
        img={Image2}
        title=" Turkey"
        subtitle="The code   up your  and have the necessary styles"
      />
      <Title
        img={Image3}
        title="Istanbul, "
        subtitle="The code and have the necessary styles"
      />
      </div>
  
    </div>
  );
}
