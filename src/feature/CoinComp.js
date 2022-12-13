import React from "react";
import "./CoinComp.css";

const CoinComp = ({ data }) => {
  return (
    <div className="coin-container">
      <img src={data.image} alt={data.name} />
      <div>{data.name}</div>
    </div>
  );
};

export default CoinComp;
