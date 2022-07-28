import React, { Component } from 'react';

class Customers extends Component{
    constructor(){
        super() // super keword use for inherit of master class of all methods
        console.log('inside constructor.');
    }

    // when loading dom first
    componentWillMount(){
        console.log(`generally used to show a loader when the component is being loaded or when the data from the server is being fetched.`)
    }

    // when loaded dom first
    componentDidMount(){    
        console.log('inside did mount.')
    }


    // start/stop update dom
    shouldComponentUpdate(){ 
        console.log('inside should Update.')
        // if (this.state.counter <5) {
        //     return true
        // }else{
        //     return false
        // }
    }

    componentWillReceiveProps(){    
        console.log('inside componentWillReceiveProps.')
    }

    // when updating dom
    componentWillUpdate(){
        console.log(`how to execute a function before the component is updated in the DOM`)
    }

    // when updated dom
    componentDidUpdate(){
        console.log(`how to execute a function when the component is updated in the DOM`)
    }

    // // remove component
    // componentWillUnmount() {
    //     alert(`delete successfully`)
    // }

    render() {
        console.log(`insdie render`)
        return(
            <div>
                Welcome to Hestabit {this.props.name}
            </div>
        )
    }
    
    
}

export default Customers;