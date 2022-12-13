import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { addCoins, getCoins } from "./feature/coinSlice";
import { useSelector } from "react-redux";
import CoinComp from "./feature/CoinComp";

const App = () => {
  const [search, setSearch] = useState([]);
  const dispatch = useDispatch();
  const getCoin = useSelector(getCoins);

  useEffect(() => {
    const fetchCoinApi = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=25&page=1&sparkline=false"
      );
      console.log(response.data);
      dispatch(addCoins(response.data));
    };
    fetchCoinApi();
  }, [dispatch]);

  const handleChange = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = getCoin.filter((coin) =>
    coin.name.toLowerCase().includes(search)
  );

  return (
    <div className="App">
      <form>
        <input
          onChange={handleChange}
          type="text"
          placeholder="Search coins..."
        ></input>
      </form>
      App
      <div>
        {filteredCoins.map((coin) => {
          return <CoinComp key={coin.id} data={coin} />;
        })}
      </div>
    </div>
  );
};

export default App;
