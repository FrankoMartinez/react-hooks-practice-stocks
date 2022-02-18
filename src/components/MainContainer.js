import React, { useState, useEffect } from "react";
import StockContainer from "./StockContainer";
import PortfolioContainer from "./PortfolioContainer";
import SearchBar from "./SearchBar";

function MainContainer() {
  const [stocks, setStocks] = useState([])
  const [portfolio, setPortfolio] = useState([])
  const [sortBy, setSortBy] = useState("Alphabetically")
  const [filterBy, setFilterBy] = useState("Tech")

  // Fetch all stocks from the api when the page initially renders
  useEffect(() => {
    fetch('http://localhost:3001/stocks')
    .then(res => res.json())
    .then((data) => setStocks(data))
  }, [])

  // Will add the stock to the portfolio once you click the card
  function handleAddStock(stockAdded) {
    const stockInPortfolio = portfolio.find(
      (stock) => stock.id === stockAdded.id
    )
    if (!stockInPortfolio) {
      setPortfolio([...portfolio, stockAdded])
    }
  }

  // Clicking on a stock will remove it from the portfolio
  function handleDeleteStock(stockToDelete) {
    setPortfolio((portfolio) => 
      portfolio.filter((stock) => stock.id !== stockToDelete.id)
    )
  }

  // Sort stocks based on alphabetical order or price
  const sortedStocks = [...stocks].sort((stock1, stock2) => {
    if (sortBy === "Alphabetically") {
      return stock1.name.localeCompare(stock2.name)
    } else {
      return stock1.price - stock2.price
    }
  })

  // Will filter the stocks based on the type of stock
  const filteredStock = sortedStocks.filter(
    (stock) => stock.type === filterBy
  )
 
  return (
    <div>
      <SearchBar 
      sortBy={sortBy} 
      filterBy={filterBy} 
      onChangeSort={setSortBy}
      onChangeFilter={setFilterBy}
      />
      <div className="row">
        <div className="col-8">
      <StockContainer stocks={filteredStock} onAddStock={handleAddStock} />
        </div>
        <div className="col-4">
          <PortfolioContainer stocks={portfolio} deleteStock={handleDeleteStock} />
        </div>
      </div>
    </div>
  );
}

export default MainContainer;
