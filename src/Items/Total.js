import React, { Component } from 'react'

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

        const totalStyle = {
            border: '1px solid black',
            borderTopRightRadius: '25px',
            borderTopLeftRadius: '25px',
            padding: '10px',
            marginRight: '-37px',
            textAlign: 'center',
            width: '24.8rem'
        }

        const estTotalStyle = {
            border: '1px solid black',
            borderTopLeftRadius: '25px',
            borderBottomRightRadius: '25px',
            borderTopRightRadius: '25px',
            position: 'absolute',
            padding: '10px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.74)'
        }

        const sumStyle = {
            float: 'right',
            marginTop: '10px',
            marginLeft: '280px',
            position: 'absolute',
        }

        return(
            <div>
                <span style={estTotalStyle}>Estimated Total:</span><span style={sumStyle}>{this.total(this.getSum)}</span><input style={totalStyle} type='text' name='total' disabled/>
            </div>
        )
    }

}

export default Total