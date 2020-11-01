import React, { Component } from 'react';
import Stock from '../components/Stock'

class PortfolioContainer extends Component {

  render() {
    
    return (
      <div>
        <h2>My Portfolio</h2>

          {
            //render your portfolio stocks here
            this.props.myStocks.map(s => {
            return <Stock stockInfo={s} clickHandler={this.props.clickHandler}/>
          }) 
          }
      </div>
    );
  }

}

export default PortfolioContainer;
