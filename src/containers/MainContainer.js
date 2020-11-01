import React, { Component } from 'react';
import StockContainer from './StockContainer'
import PortfolioContainer from './PortfolioContainer'
import SearchBar from '../components/SearchBar'
const BASE_URL = 'http://localhost:3000/stocks/'


class MainContainer extends Component {
state = {
  myPortfolio:[],
  stocks: [],
  filteredStocks:[]
}
addStock = (stock) => {
  let newPortfolio=[...this.state.myPortfolio, stock]
  this.setState({myPortfolio: newPortfolio},
  () => console.log(this.state.myPortfolio)
  )
}
getStocks = () => {
    fetch(BASE_URL)
      .then(response => response.json())
      .then(data => this.setState({stocks:data, filteredStocks:data}));
  }

  componentDidMount(){
    this.getStocks()

   }
removeStock = (stock) => {
  let tempPortfolio = this.state.myPortfolio
  console.log('before', tempPortfolio)
  let index = tempPortfolio.indexOf(stock);
  tempPortfolio.splice(index, 1);
  this.setState({myPortfolio: tempPortfolio},
  () => console.log(this.state.myPortfolio)
  )
}

  abcStock = (e) => {
    let tempStocks = this.state.stocks
    tempStocks.sort((a, b) => a.name.localeCompare(b.name))
    this.setState({filteredStocks: tempStocks})
}
  sortByPrice = (e) => {
    let tempStocks = this.state.stocks
    tempStocks.sort((a, b) => a.price-b.price)
    this.setState({filteredStocks: tempStocks})
  }

  filterCompany = (e) => {
    const companyType = this.state.stocks.filter(stock => stock.type === e.target.value);
  this.setState({filteredStocks: companyType})
  }

  render() {
    return (
      <div>
        <SearchBar abcStock={this.abcStock} sortByPrice={this.sortByPrice} filterCompany={this.filterCompany} />

          <div className="row">
            <div className="col-8">

              <StockContainer clickHandler={this.addStock} stocks={this.state.filteredStocks}/>


            </div>
            <div className="col-4">

              <PortfolioContainer myStocks={this.state.myPortfolio} clickHandler={this.removeStock}/>

            </div>
          </div>
      </div>
    );
  }

}

export default MainContainer;
