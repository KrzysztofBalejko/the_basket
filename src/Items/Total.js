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
            borderRadius: "5px",
            padding: '10px',
            marginRight: '-37px',
            marginBottom: '20px',
            marginTop: '10px',
            textAlign: 'center',
            width: '24.8rem'
        }

        const estTotalStyle = {
            border: '1px solid black',
            borderRadius: '5px',
            borderBottomRightRadius: '25px',
            borderTopRightRadius: '25px',
            position: 'absolute',
            padding: '10px',
            marginTop: '10px',
            color: 'white',
            backgroundColor: 'rgba(0, 0, 0, 0.74)'
        }

        const sumStyle = {
            float: 'right',
            marginTop: '20px',
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