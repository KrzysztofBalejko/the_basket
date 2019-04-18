import React, { Component } from 'react';
import './App.css';
import Items from './Items/Items'
import AddItems from './Items/AddItems'
import Total from './Items/Total'
import Bitcoin from './Items/Bitcoin'
import Dollar from './Items/Dollar'
import uuid from 'uuid'
import axios from 'axios'

class App extends Component {

  state = {
    basketItems:[
      {id: uuid.v4(), item: 'GPU', price: 150},
      {id: uuid.v4(), item: 'RAM', price: 120},
      {id: uuid.v4(), item: 'CPU', price: 50},
      {id: uuid.v4(), item: 'Keyboard', price: 40}
    ],
    crypto:[
      {btc: ''}
    ],
    currency:[
      {usd: ''}
    ],
    bitcoinButton:[
      {btcClick: 0, oldPrice: 0}
    ],
    dollarButton:[
      {usdClick: 0, oldPrice: 0}
    ]
  }
  
  componentDidMount() {
    axios.get(`https://min-api.cryptocompare.com/data/price?fsym=BTC&tsyms=GBP`)
    .then(res => {
      const coinmarket = res.data;
      this.setState({
        crypto:[
          {btc: coinmarket.GBP}
        ]
      })
    })
    axios.get(`https://api.exchangeratesapi.io/latest?base=GBP`)
    .then(res => {
      const usdExchange = res.data;
      this.setState({
        currency:[
          {usd: parseFloat(usdExchange.rates.USD.toFixed(2))}
        ],
      })
      console.log(this.state.currency[0].usd)
    })
  }
  
  bitcoinOnClickHandler = () => {
    let total = parseInt(document.getElementById('#total').innerHTML);
    let satoshiLimit = ((total / this.state.crypto[0].btc).toString()).slice(0,10);
    let count = this.state.bitcoinButton[0].btcClick;

    if(count % 2 ===  0){
      this.setState({
        bitcoinButton:[
          { btcClick: count + 1, oldPrice: total }
        ]
      })
      document.getElementById('#total').innerHTML = satoshiLimit;
    }else{
      this.setState({
        bitcoinButton:[
          { btcClick: count + 1 } 
        ]
      });
      document.getElementById('#total').innerHTML = this.state.bitcoinButton[0].oldPrice;
    }
  }

  

  dollarOnClickHandler = () => {
    let total = parseInt(document.getElementById('#total').innerHTML);
    let count = this.state.dollarButton[0].usdClick;
    if(count % 2 ===  0){
      this.setState({
        dollarButton:[
          { usdClick: count + 1, oldPrice: total }
        ]
      })
      document.getElementById('#total').innerHTML = this.state.currency[0].usd * total
    }else{
      this.setState({
        dollarButton:[
          { usdClick: count + 1 }
        ]
      });
      document.getElementById('#total').innerHTML = this.state.dollarButton[0].oldPrice;
    }
  }

  onClickHandler = (id) => {
     this.setState({
       basketItems:[...this.state.basketItems.filter(items => items.id !== id)]
     })
   }

  addItemHandler = (item, price) => {    
    this.setState({ basketItems: [...this.state.basketItems, {id: uuid.v4(), item: item, price: price} ]})
  }
  
  render() {
    
    const ulStyle = {
      listStyle: 'none'
    }

    return (
      <div className="App">
        <Total basket={this.state.basketItems}/>
        { 1 + 2 !== 3 ? <Bitcoin btcBtn={this.bitcoinOnClickHandler} /> : <Dollar dollarBtn={this.dollarOnClickHandler}/>}
        <ul style={ulStyle}>
          <Items 
            basket={this.state.basketItems} 
            click={this.onClickHandler} 
          />
        </ul>
        <AddItems btnclick={this.addItemHandler}/>
      </div>
    );
  }
}

export default App;
