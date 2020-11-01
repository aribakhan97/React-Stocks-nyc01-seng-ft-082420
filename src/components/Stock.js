import React from 'react'

const Stock = (props) => (
  <div>

    <div className="card" onClick={() =>props.clickHandler(props.stockInfo)}>
      <div className="card-body">
        <h5 className="card-title">{
            //Company Name
            props.stockInfo.name
          }</h5>
        <p className="card-text">{
            //ticker: stock price 
            props.stockInfo.ticker + ': $' + props.stockInfo.price

          }</p>
      </div>
    </div>


  </div>
);

export default Stock
