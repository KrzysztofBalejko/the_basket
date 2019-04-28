import React, { Component } from 'react'
import classes from './Total.module.css'

class Total extends Component {

    getSum = (total, num) => {
        return total + num;
    }

    total = (getSum) => {
        let array = []
        this.props.basket.map((i) => {
        array.push(parseInt(i.price))
        })
        if (array.length !== 0){
            return array.reduce(getSum)
        } else {
            return 0
        }
        
    }

    render(){

        return(
            <div>
                <span className={classes.estTotalStyle}>Estimated Total:</span>
                <span id="#total" className={classes.sumStyle}>{this.total(this.getSum)}</span>
                <input className={classes.totalStyle}
                    type='text'
                    name='total'
                    disabled
                />
            </div>
        )
    }

}

export default Total