import React, { Component } from 'react'
import classes from './Items.module.scss'

class Items extends Component {

    render() {

        const liStyle = {
            border: '1px solid black',
            borderRadius: '5px',
            padding: '10px',
            margin: '10px',
            marginLeft: '-30px',
            width: '400px',
            backgroundColor: '#EE9542'
        }
 
        return (         
            this.props.basket.map((i) =>
            <li className="selected" style={liStyle} key={i.id}>
                {i.item}
                {i.price !== '' ? <span> £{i.price}</span> : null}
                <button className={classes.btnStyle}
                    onClick={this.props.click.bind(this, i.id)} >
                    <span className={classes.xStyle}>
                        X
                    </span>
                </button>
            </li>
        ))

    }

}
export default Items