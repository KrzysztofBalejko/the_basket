import React, { Component } from 'react';
import './App.css';
import Items from './Items/Items'
import AddItems from './Items/AddItems/AddItems'
import Total from './Items/Total'
import Bitcoin from './Items/Bitcoin/Bitcoin'
import Dollar from './Items/Dollar/Dollar'
import uuid from 'uuid'
import axios from 'axios'

let doubleC = false;
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
    document.getElementById('#total').innerHTML = tempTotal
    btcClickCount === 1 ? btcClickCount -= 1 : btcClickCount += 2;
    doubleC ? (doubleC = false) : (doubleC = true);
    this.changeColor('#85bb65')
    this.setState({
      refreshState:[
        { refresh: true }
      ]
    })
  }

  changeColor = (color) => {
    let block = document.getElementsByClassName('selected');
      for (let i = 0; i < block.length; i++) {
      block[i].style.backgroundColor = color;
    }
  };

  bitcoinOnClickHandler = () => {
    let total = parseInt(document.getElementById('#total').innerHTML);
    let satoshiLimit = ((total / this.state.crypto[0].btc).toString()).slice(0,10);
    if (btcClickCount === 0){
      btcClickCount += 1;
      tempTotal = total;
      document.getElementById('bitbtn').style.backgroundImage = "url(" + "https://i.ibb.co/CBJgqy4/pound.png" + ")"
      document.getElementById('bitbtn').style.backgroundColor = '#87CEFA';
      document.getElementById('#total').innerHTML = satoshiLimit;
      this.changeColor('#87CEFA');
    } else if(btcClickCount === 1){
      btcClickCount -= 1;
      document.getElementById('bitbtn').style.backgroundImage = "url(" + "https://i.ibb.co/W0900fG/bitcoin.png" + ")"
      document.getElementById('#total').innerHTML = tempTotal;
      this.changeColor('#EE9542');
    }
  }

  dollarOnClickHandler = () => {
    let total = parseInt(document.getElementById('#total').innerHTML);
    
    if (btcClickCount === 2){
      tempTotal = total;   
      btcClickCount -= 2;
      document.getElementById('dolBtn').style.backgroundImage = "url(" + "https://i.ibb.co/CBJgqy4/pound.png" + ")"
      document.getElementById('dolBtn').style.backgroundColor = '#87CEFA'
      document.getElementById('#total').innerHTML = Math.floor(this.state.currency[0].usd * tempTotal)
      this.changeColor('#87CEFA');
    } else if(btcClickCount === 0) {
      btcClickCount += 2;
      this.changeColor('#85bb65')
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
      <div id="content" className="App">
        <Total basket={this.state.basketItems}/>
        { doubleC ? <Dollar dollarBtn={this.dollarOnClickHandler}/> : <Bitcoin btcDoubleBtn={this.bitcoinOnDoubleClickHandler} btcBtn={this.bitcoinOnClickHandler}/>}
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
