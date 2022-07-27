import React, { Component } from 'react';

class TargetForUnmount extends Component{
    // call when remove component from dom
    componentWillUnmount() {
        alert(`delete successfully`)
    }
    render() {
        return(
            <div>
                <h2>Target for Unmount.</h2>
            </div>
        )
    }
    
    
}

export default TargetForUnmount;