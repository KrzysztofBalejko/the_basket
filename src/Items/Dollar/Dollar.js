import React, {Component} from 'react'
import classes from './Dollar.module.scss'

class Dollar extends Component {

    render(){

        return(
            <div>
                <div className={classes.box1Style}>
                    <p>1</p>
                </div>
                <button id="dolBtn"
                    className={classes.dollarButtonStyle}
                    onClick={this.props.dollarBtn}>
                </button>
                <div className={classes.box2Style}>
                    <p>2</p>
                </div>
            </div>
        );
    }

}

export default Dollar