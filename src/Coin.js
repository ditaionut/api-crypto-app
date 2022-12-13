import React from "react";
import "./Coin.css";

const Coin = ({ coin }) => {
  return (
    <div className="coin-container">
      <div className="coin-row">
        <div className="coin">
          <img src={coin.image} alt="crypto" />
          <h1>{coin.name}</h1>
          <p className="coin-symbol">{coin.symbol}</p>
        </div>
        <div className="coin-data">
          <p className="coin-price">${coin.current_price.toLocaleString()}</p>
          <p className="coin-volume">${coin.market_cap.toLocaleString()}</p>
          {coin.price_change_percentage_24h < 0 ? (
            <p className="coin-percent red">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="coin-percent green">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
          <p className="coin-market">Mkt Cap: ${coin.total_volume.toLocaleString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Coin;
