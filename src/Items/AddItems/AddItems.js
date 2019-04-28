import React, { Component } from 'react'
import classes from './AddItems.module.css'

class AddItem extends Component {

    state = {
        item: '',
        price: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.btnclick(this.state.item, this.state.price)
        this.setState({ item: '', price: '' })
    }

    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input id='newItem'
                        className={classes.inputStyle}
                        type='text' 
                        name='item' 
                        value={this.state.item} 
                        onChange={this.onChange} 
                        placeholder="Add Item"
                    />
                    <br/><span className={classes.poundStyle}>£</span>
                    <input id='newPrice'
                        className={classes.inputStyle}
                        type='text'
                        name='price'
                        value={this.state.price}
                        onChange={this.onChange}
                        placeholder="Add price"
                    />
                    <span className={classes.zerosStyle}>.00</span>        
                    <button className={classes.buttonStyle}
                        type='submit'
                        value="Submit">
                        Add Item
                    </button>
                </form>
            </div>
        )
    }

}

export default AddItem