import React, { Component } from 'react'


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

        const inputStyle = {
            border: '1px solid black',
            borderRadius: "5px",
            padding: '10px',
            // marginRight: '-37px',
            marginBottom: '5px',
            // marginTop: '-10px',
            textAlign: 'center',
            width: '24.8rem'
        }

        const buttonStyle = {
            border: '1px solid black',
            borderRadius: "5px",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            backgroundColor: 'rgba(0, 0, 0, 0.74)',
            color: 'white',
            padding: '10px',
            // marginTop: '-10px',
            // marginRight: '-37px',
            textAlign: 'center',
            width: '26.1rem'
        }

        const poundStyle = {
            border: '1px solid black',
            borderRadius: '5px',
            position: 'absolute',
            padding: '10px',
            // marginTop: '-10px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.74)'
        }

        const zerosStyle = {
            border: '1px solid black',
            borderRadius: '5px',
            position: 'absolute',
            padding: '10px',
            // marginTop: '-10px',
            marginLeft: '-53px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.74)'
        }

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input id='newItem' style={inputStyle} type='text' name='item' value={this.state.item} onChange={this.onChange} placeholder="Add Item"/>
                    <br/><span style={poundStyle}>£</span><input id='newPrice' style={inputStyle} type='text' name='price' value={this.state.price} onChange={this.onChange} placeholder="Add price"/><span style={zerosStyle}>.00</span>        
                    <button style={buttonStyle} type='submit' value="Submit">Add Item</button>
                </form>
            </div>
        )
    }

}

export default AddItem