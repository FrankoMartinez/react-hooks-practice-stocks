import React from "react";
import Stock from "./Stock";

function PortfolioContainer({ stocks, deleteStock }) {
  const stocksInPortfolio = stocks.map((stock) => {
    return <Stock key={stock.id} stock={stock} onStockClick={deleteStock} />
  })
  return (
    <div>
      <h2>My Portfolio</h2>
      {stocksInPortfolio}
    </div>
  );
}

export default PortfolioContainer;
