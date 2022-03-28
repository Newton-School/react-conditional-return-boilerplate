import React, { useState } from "react";
import '../styles/App.css';

const CoinFront = () => {
  return <h1 id="head">Head!</h1>;
}

const CoinBack = () => {
  return <h1 id="tail">Tail.</h1>;
}

const CoinFlip = (props) => {
  const isHead = props.isHead;
  if (isHead) {
    return <CoinFront />;
  }
  return <CoinBack />;
}

const App = () => {
  const [isHead, setIsHead] = useState(false);
  const flipCoin = () => {
    let x = !isHead;
    if (x) {
      setIsHead(true);
    } else {
      setIsHead(false);
    }
  };
  return (
    <div className="center">
      <button id="btn" onClick={flipCoin}>Flip the coin</button>
      <CoinFlip isHead={isHead} />
    </div>
  );
};

export default App;
