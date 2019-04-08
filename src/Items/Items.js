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
 
        return (         
            this.props.basket.map((i) =>
            <li style={liStyle} key={i.id}>
                {i.item}
                <span> £{i.price}</span>
                <button style={btnStyle} onClick={this.props.click.bind(this, i.id)} >
                    <span style={xStyle}>
                        X
                    </span>
                </button>
            </li>
        ))

        
    }

}
export default Items