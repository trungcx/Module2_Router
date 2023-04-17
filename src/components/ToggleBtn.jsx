import React, { Component } from 'react';

class ToggleBtn extends Component {
    constructor(){
        super();
        // this.state({
        //     toggleBtn: false,
        // });
        // this.handleShow = this.handleShow.bind(this);
    }
    handleShow = ()=>{
        console.log(typeof(constructor));
        // this.setState({toggleBtn: !this.state.toggleBtn});
    }
    render() {
        return (
            <div>
                <h2>Just a text</h2>
             
                <button onClick={this.handleShow}>Show less</button>
            </div>
        );
    }
}

export default ToggleBtn;