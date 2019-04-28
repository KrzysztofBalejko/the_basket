import React, {Component} from 'react'
import classes from './Bitcoin.module.scss'

class Bitcoin extends  Component {

    render(){

        return(
            <div>
                <div className={classes.box1Style}>
                    <p>1</p>
                </div>
                <button id="bitbtn"
                    className={classes.bitButtonStyle}
                    onDoubleClick={this.props.btcDoubleBtn}
                    onClick={this.props.btcBtn}>
                </button>
                <div className={classes.box2Style}>
                    <p>2</p>
                </div>         
            </div>
        )
    }



}

export default Bitcoin
