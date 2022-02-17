import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks }) {
  // Map through all stocks and render them using the Stock component
  const stocksDisplayed = stocks.map((stock) => {
    return <Stock key={stock.key} stock={stock} />
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stocksDisplayed}
    </div>
  );
}

export default StockContainer;
