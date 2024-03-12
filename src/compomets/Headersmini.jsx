import React from "react";

export default function Headersmini(props) {
    const { title, subtitle } = props;
  return (
      <div className="poto">
        <h1 className="Headers_h1">{title}</h1>
        <h3 className="Headers_h3">{subtitle}</h3>
        <button>Explore more</button>
        </div>
  );
}
