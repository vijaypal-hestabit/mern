import React, { Component } from 'react';

class ComponentDidUpdate extends Component{
    constructor(){
        super();    
        console.log('inside constructor.')
        this.state={webName:'React'}
    }
    
    // run when update porps or state 
    componentDidUpdate(preProps,preState,snapshot){    
        // console.log(`${preState.webName}    ${this.state.webName}`)
        if (preState.webName === this.state.webName) {
            alert('Web Name already updated.')
        }
        console.log('inside did Update.')
    }

    render() {
        console.log(`insdie render.`)
        return(
            <div>
                <h2>Welcome to {this.state.webName}.</h2>
                <button onClick={()=>{this.setState({webName:'Hestabit'})}}>Update Web Name</button>
            </div>
        )
    }
    
    
}

export default ComponentDidUpdate;