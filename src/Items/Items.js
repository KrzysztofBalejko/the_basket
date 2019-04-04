import React, { Component } from 'react'

class Items extends Component {



    render() {

        const liStyle = {
            border: '1px solid black',
            borderRadius: "5px",
            padding: '10px',
            margin: '10px',
        }
        
        const btnStyle = {
            float: 'right',
            borderRadius: '50%',
            margin: '-7px'
        }
        
        const xStyle = {
            fontSize: '28px',
            padding: '3px'
        }

        return this.props.basketItems.map((arrayitems) => (
        <li style={liStyle}>
            {this.props.oneItem}
            <span> £{this.props.price}</span>
            <button style={btnStyle} onClick={this.props.click.bind(this, this.props.id)} >
                <span style={xStyle}>
                    X
                </span>
            </button>
        </li>
        )
        
    }

}
export default Items