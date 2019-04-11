import React, { Component } from 'react'


class Items extends Component {

    

    liRandomColor = () => {
        
        let textArray = [
            {backgroundColor: 'rgba(143, 221, 246, 0.33)'},
            {backgroundColor: 'rgba(246, 210, 139, 0.33)'},
            {backgroundColor: 'rgba(189, 230, 170, 0.33)'},
        ]
        let randomIndex = Math.floor(Math.random() * textArray.length); 
        let randomElement = textArray[randomIndex];
        let liStyle = {}
        return liStyle = {
            border: '1px solid black',
            borderRadius: "5px",
            padding: '10px',
            margin: '10px',
            backgroundColor: randomElement.backgroundColor
        }
    }

    render() {

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
            <li style={this.liRandomColor()} key={i.id}>
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