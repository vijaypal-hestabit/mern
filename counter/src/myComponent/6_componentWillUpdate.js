import React, { Component } from 'react';

class ComponentWillUpdate extends Component{
    constructor(){
        super();    
        console.log('inside constructor.')
        this.state={counter:0}
    }
    
    // execute before the component is update
    componentWillUpdate(){
        console.log(`how to execute a function before the component is updated in the DOM`)
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

export default ComponentWillUpdate;