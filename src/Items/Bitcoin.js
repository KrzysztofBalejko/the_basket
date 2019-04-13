import React, {Component} from 'react'


class Bitcoin extends  Component {

    render(){

        const box1Style = {  
            backgroundColor: 'rgba(0, 0, 0, 0.74)',
            color: 'white',
            width: '418px',
            padding: '0px',
            border: '1px solid black',
            marginLeft: '48.5px'
        }
        const box2Style = {
            backgroundColor: 'rgba(0, 0, 0, 0.74)',
            color: 'white',
            width: '418px',
            padding: '0px',
            border: '1px solid black',
            borderBottomRightRadius: '5px',
            borderBottomLeftRadius: '5px',
            marginLeft: '48.5px'
        }

        const bitButtonStyle = {
            border: '#EE9542',
            backgroundImage: "url(" + "https://i.ibb.co/W0900fG/bitcoin.png" + ")",
            backgroundSize: '100%',
            backgroundColor: '#EE9542',
            padding: '3.7%',
            position: 'absolute',
            borderRadius: '50%',
            marginTop: '-55px',
            marginLeft: '-36px',
            boxShadow: 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)'
        }
        const bitBackgroundStyle = {
            
        }

        return(
            <div>
                <div style={box1Style}>
                    <p>1</p>
                </div>
                <button style={bitButtonStyle}></button>
                <div style={box2Style}>
                    <p>2</p>
                </div>
                
            </div>
        )
    }



}

export default Bitcoin
