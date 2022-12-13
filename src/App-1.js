import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";
import Coin from "./Coin";

function App1() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState([]);

  useEffect(() => {
    const fetchCryptoApi = async () => {
      const response = await axios
        .get(
          "https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=10&page=1&sparkline=false"
        )
        .then((res) => {
          setCoins(res.data);
          console.log(res.data);
        });
      // console.log(response);
    };
    fetchCryptoApi();
  }, []);

  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search)
  );

  return (
    <div className="App">
      <div>
        <form>
          <input
            type="text"
            placeholder="Search coin..."
            onChange={handleSearch}
          />
          <button>Search</button>
        </form>
      </div>
      <h1>Test</h1>
      {filteredCoins.map((coin) => (
        <Coin key={coin.id} coin={coin} />
      ))}
    </div>
  );
}

export default App1;
