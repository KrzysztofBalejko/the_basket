import React, { Component } from 'react'


class Items extends Component {

    render() {

        const liStyle = {
            // display: 'flex',
            // alignItems: 'stretch',

            border: '1px solid black',
            borderRadius: "5px",
            padding: '10px',
            margin: '10px',
            marginLeft: '-30px',
            width: '400px',
            backgroundColor: '#EE9542',
            
        }

        const btnStyle = {
            border: '1px rgba(0, 0, 0, 0.74)',
            backgroundColor: 'rgba(0, 0, 0, 0.74)',
            boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
            float: 'right',
            borderRadius: '50%',
            margin: '-7px'
        }
        
        const xStyle = {
            color: 'white',
            fontSize: '28px',
            padding: '3px'
        }
 
        return (         
            this.props.basket.map((i) =>
            <li className="selected" style={liStyle} key={i.id}>
                {i.item}
                {i.price !== '' ? <span> £{i.price}</span> : null}
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