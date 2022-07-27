import React, { Component } from 'react';

class ComponentWillMount extends Component{
    constructor(){
        super();    
        console.log('inside constructor.')
        this.state={counter:0}
    }
    
    componentWillMount(){
        console.log(`generally used to show a loader when the component is being loaded or when the data from the server is being fetched.`)
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

export default ComponentWillMount;