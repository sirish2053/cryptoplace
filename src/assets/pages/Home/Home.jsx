import React, { useContext, useEffect, useState } from 'react';
import './Home.css';
import { CoinContext } from '../../../context/CoinContext';
import {Link} from 'react-router-dom'

const Home = () => {
  // Use the context to get allCoin and currency
  const { allCoin, currency } = useContext(CoinContext);
  const [displayCoin, setDisplayCoin] = useState([]);
  const [input, setInput] = useState('');

  const inputHandler = (event) => {
    setInput(event.target.value);
    if (event.target.value === "") {
      setDisplayCoin(allCoin);
    }
  }

  const searchHandler = (event) => {
    event.preventDefault();
    const coins = allCoin.filter((item) =>
      item.name.toLowerCase().includes(input.toLowerCase())
    );
    setDisplayCoin(coins);
  }

  // Update displayCoin whenever allCoin changes
  useEffect(() => {
    setDisplayCoin(allCoin);
  }, [allCoin]);

  // Debug: Log allCoin and displayCoin to ensure they have the expected data
  console.log("All Coins: ", allCoin);
  console.log("Display Coins: ", displayCoin);

  return (
    <div className='home'>
      <div className='hero'>
        <h1>Largest <br /> Crypto Marketplace</h1>
        <p>Welcome to the world's largest cryptocurrency marketplace. Sign up to explore more about cryptos.</p>
        <form onSubmit={searchHandler}>
          <input onChange={inputHandler} list='coinList' value={input} type="text" placeholder='Search crypto..' required />
          <datalist id='coinList'>
            {allCoin.map((item, index) => (<option key={index} value={item.name} />))}
          </datalist>
          <button type="submit">Search</button>
        </form>
      </div>
      <div className='crypto-table'>
        <div className="table-layout">
          <p>#</p>
          <p>Coins</p>
          <p>Price</p>
          <p style={{ textAlign: "center" }}>24H Change</p>
          <p className='market-cap'>Market Cap</p>
        </div>
        {
          // Map through displayCoin to render top 10 coins
          displayCoin.slice(0, 10).map((item, index) => (
            <Link to={`/coin/${item.id}`} className="table-layout" key={index}>
              <p>{item.market_cap_rank}</p>
              <p>{item.name}</p>
              <p>{item.current_price}</p>
              <p style={{ textAlign: "center" }}>{item.price_change_percentage_24h}</p>
              <p className='market-cap'>{item.market_cap}</p>
              <div>
                <img src={item.image} alt="" />
                <p>{item.name + "_" + item.symbol}</p>
              </div>
              <p> {currency.symbol} {item.current_price.toLocaleString()}</p>
              <p className={item.price_change_percentage_24h > 0 ? "green" : "red"}>
                {Math.floor(item.price_change_percentage_24h * 100) / 100}
              </p>
              <p className='market-cap'>{currency.symbol} {item.market_cap.toLocaleString()} </p>
            </Link>
          ))
        }
      </div>
    </div>
  );
};

export default Home;
