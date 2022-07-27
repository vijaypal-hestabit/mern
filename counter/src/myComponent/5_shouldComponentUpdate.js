import React, { Component } from 'react';

class ShouldComponentUpdate extends Component{
    constructor(){
        super();    
        console.log('inside constructor.')
        this.state={counter:0}
    }
    
    componentDidUpdate(){
        console.log('inside did Update.')
    }

    // stop spectific renderig
    shouldComponentUpdate(){ 
        console.log('inside should Update.')
        if (this.state.counter <5) {
            return true
        }else{
            return false
        }
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

export default ShouldComponentUpdate;