import React from "react";
import Stock from "./Stock";

function StockContainer({ stocks, onAddStock }) {
  // Map through all stocks and render them using the Stock component
  const stocksDisplayed = stocks.map((stock) => {
  return <Stock key={stock.id} stock={stock} onStockClick={onAddStock}  />
  })
  return (
    <div>
      <h2>Stocks</h2>
      {stocksDisplayed}
    </div>
  );
}

export default StockContainer;
