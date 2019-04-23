import React, { Component } from 'react';
import './App.css';
import Items from './Items/Items'
import AddItems from './Items/AddItems'
import Total from './Items/Total'
import Bitcoin from './Items/Bitcoin'
import Dollar from './Items/Dollar'
import uuid from 'uuid'
import axios from 'axios'

let DoubleC = false;
let btcClickCount = 0;
let tempTotal = 0;

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
    refreshState:[
      {refresh: false}
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
    })
  }

  bitcoinOnDoubleClickHandler = () => {
    btcClickCount += 2;
    DoubleC ? (DoubleC = false) : (DoubleC = true);
    this.setState({
      refreshState:[
        { refresh: true }
      ]
    })
    
  }

  bitcoinOnClickHandler = () => {
    let total = parseInt(document.getElementById('#total').innerHTML);
    let satoshiLimit = ((total / this.state.crypto[0].btc).toString()).slice(0,10);

    if (btcClickCount === 0){
      btcClickCount += 1;
      tempTotal = total;
      document.getElementById('bitbtn').style.backgroundImage = "url(" + "https://i.ibb.co/CBJgqy4/pound.png" + ")"
      document.getElementById('#total').innerHTML = satoshiLimit;
    } else {
      btcClickCount -= 1;
      document.getElementById('bitbtn').style.backgroundImage = "url(" + "https://i.ibb.co/W0900fG/bitcoin.png" + ")"
      document.getElementById('#total').innerHTML = tempTotal;
    }
  }

  dollarOnClickHandler = () => {

    if (btcClickCount === 2){
      btcClickCount -= 2;
      document.getElementById('dolBtn').style.backgroundImage = "url(" + "https://i.ibb.co/CBJgqy4/pound.png" + ")"
      document.getElementById('dolBtn').style.backgroundColor = '#EE9542'
      document.getElementById('#total').innerHTML = this.state.currency[0].usd * tempTotal
    } else if(btcClickCount === 0) {
      btcClickCount += 2;
      document.getElementById('dolBtn').style.backgroundImage = "url(" + "https://i.ibb.co/n3B2C1R/dollar.png" + ")"
      document.getElementById('#total').innerHTML = tempTotal;
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
        { DoubleC ? <Dollar dollarBtn={this.dollarOnClickHandler}/> : <Bitcoin btcDoubleBtn={this.bitcoinOnDoubleClickHandler} btcBtn={this.bitcoinOnClickHandler} />}
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
