import React, { Component } from 'react'


class AddItem extends Component {

    state = {
        item: ''
    }

    onSubmit = (e) => {
        e.preventDefault()
        this.props.addItemHandler(this.state.item)
        this.setState({ item: '' })
    }


    onChange = (e) => this.setState({ [e.target.name]: e.target.value });

    render() {

        const inputStyle = {
            border: '1px solid black',
            borderRadius: "5px",
            padding: '10px',
            marginRight: '-37px',
            marginBottom: '10px',
            marginTop: '-10px',
            textAlign: 'center',
            width: '24.8rem'
        }

        const buttonStyle = {
            border: '1px solid black',
            borderRadius: "5px",
            borderBottomLeftRadius: "25px",
            borderBottomRightRadius: "25px",
            backgroundColor: 'rgba(0, 0, 0, 0.74)',
            color: 'white',
            padding: '10px',
            marginRight: '-37px',
            textAlign: 'center',
            width: '26.1rem'
        }

        return(
            <div>
                <form onSubmit={this.onSubmit}>
                    <input style={inputStyle} type='text' name='Item' value={this.state.item} onChange={this.onChange} />       
                    <input style={buttonStyle} type='submit' onClick={this.props.btnclick} />
                </form>
            </div>
        )
    }

}

export default AddItem