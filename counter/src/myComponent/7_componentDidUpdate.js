import React, { Component } from 'react';

class ComponentDidUpdate extends Component{
    constructor(){
        super();    
        console.log('inside constructor.')
        this.state={counter:0}
    }
    
    // call when component is updated
    componentDidUpdate(){
        console.log(`how to execute a function when the component is updated in the DOM`)
    }

    render() {
        console.log(`insdie render.`)
        return(
            <div>
                <h2>Click button to increment {this.state.counter}.</h2>
                <button onClick={()=>{this.setState({counter:this.state.counter+1})}}>+</button>
            </div>
        )
    }
    
    
}

export default ComponentDidUpdate;