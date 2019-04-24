import React, {Component} from 'react'

class Dollar extends Component {

    render(){

    const box1Style = {  
        backgroundColor: 'rgba(0, 0, 0, 0.74)',
        color: 'white',
        width: '418px',
        padding: '0px',
        border: '1px solid black',
    }
    const box2Style = {
        backgroundColor: 'rgba(0, 0, 0, 0.74)',
        color: 'white',
        width: '418px',
        padding: '0px',
        border: '1px solid black',
        borderBottomRightRadius: '5px',
        borderBottomLeftRadius: '5px',
    }

    const dollarButtonStyle = {
        border: '#85bb65',
        backgroundImage: "url(" + "https://i.ibb.co/n3B2C1R/dollar.png" + ")",
        backgroundSize: '100%',
        backgroundColor: '#85bb65',
        padding: '56px',
        position: 'absolute',
        borderRadius: '50%',
        marginTop: '-55px',
        marginLeft: '-50px',
    }

        return(
            <div>
                <div style={box1Style}>
                    <p>1</p>
                </div>
                <button id="dolBtn" style={dollarButtonStyle} onClick={this.props.dollarBtn}></button>
                <div style={box2Style}>
                    <p>2</p>
                </div>
                
            </div>
        );
    }

}

export default Dollar