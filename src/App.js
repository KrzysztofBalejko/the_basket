import React, { Component } from 'react';
import './App.css';
import Items from './Items/Items'
import AddItems from './Items/AddItems'
import Total from './Items/Total'
import uuid from 'uuid'

class App extends Component {

  state = {
    basketItems:[
      {id: uuid.v4(), item: 'cocacola', price: 10},
      {id: uuid.v4(), item: 'paracetamol', price: 15},
      {id: uuid.v4(), item: 'milk', price: 5},
      {id: uuid.v4(), item: 'eggs', price: 7}
    ]
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
