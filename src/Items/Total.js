import React, { Component } from 'react'

class Total extends Component {

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

        return(
            <div>
                <span style={estTotalStyle}>Estimated Total:</span><input id='#total' style={totalStyle} type='text' name='total'/>
            </div>
        )
    }

}

export default Total