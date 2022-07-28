import React, { Component } from 'react';

class ComponentWillReceiveProps extends Component{
    constructor(props) {
        super();
        console.log('inside constructor.')
    }
    
    // run when set 
    componentWillReceiveProps(){    
        console.log('inside componentWillReceiveProps.')
    }

    render() {
        console.log(`insdie render.`)
        return(
            <div>
                <h2>Welcome to Hestabit.</h2>
            </div>
        )
    }
    
    
}

export default ComponentWillReceiveProps;