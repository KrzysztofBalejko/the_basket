import React, { Component } from 'react'
import classes from './Items.module.css'

class Items extends Component {

    render() {
 
        return (         
            this.props.basket.map((i) =>
            <li className="selected" className={classes.liStyle} key={i.id}>
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