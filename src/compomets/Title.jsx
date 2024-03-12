import React from "react";


const Title = ({ title, subtitle, text,  img,    }) => {
  return (
     <div className="container-mini">
      <img src={img} alt="" className="img" />    
      <h1 className="title_h1  ">{title} </h1>
      <p className="title_p" id="" >{subtitle}</p>
      <h1><b>{text}</b></h1>
    </div> 
  ); 
};

export default Title;
