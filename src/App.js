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
          <Items 
            basket={this.state.basketItems} 
            click={this.onClickHandler} 
          />
        </ul>
      </div>
    );
  }
}

export default App;
