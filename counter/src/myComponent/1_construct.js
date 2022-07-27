import React, { Component } from "react";
class Construct extends Component{

    // firstly call constructor 
    // define state
    constructor(){
        super() // super keword use for inherit of master class of all methods
        console.log('inside constructor.');
    }

    render(){
    console.log(`Hello ${this.props.name}`)
        console.log('inside render.')
        return(
            <h1>Example of constructor and render.</h1>
        )
    }
}

export default Construct;