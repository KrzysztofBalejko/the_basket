import React, { Component } from 'react';
import './App.css';
import Items from './Items/Items'

class App extends Component {

  state = {
    basketItems:[
      {id: 1, item: 'cocacola', price: 10},
      {id: 2, item: 'paracetamol', price: 15},
      {id: 3, item: 'milk', price: 5},
      {id: 4, item: 'eggs', price: 7}
    ]
  }

  onClickHandler = (id) => {
    console.log(id)
     this.setState({
       basketItems:[...this.state.basketItems.filter(items => items.id !== id)]
     })
   }
  
  render() {

    const ulStyle = {
      listStyle: 'none'
    }

    return (
      <div className="App">
        <ul style={ulStyle}>
          <Items basketItems={this.state.basketItems} id={this.state.basketItems[0].id} click={this.onClickHandler} oneItem={this.state.basketItems[0].item} price={this.state.basketItems[0].price} />
          {/* <Items id={this.state.basketItems[1].id} click={this.onClickHandler} oneItem={this.state.basketItems[1].item} price={this.state.basketItems[1].price}/>
          <Items id={this.state.basketItems[2].id} click={this.onClickHandler} oneItem={this.state.basketItems[2].item} price={this.state.basketItems[2].price}/>
          <Items id={this.state.basketItems[3].id} click={this.onClickHandler} oneItem={this.state.basketItems[3].item} price={this.state.basketItems[3].price}/> */}
        </ul>
      </div>
    );
  }
}

export default App;
