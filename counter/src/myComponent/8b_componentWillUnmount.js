import React, { Component } from 'react';
import TargetForUnmount from './8a_componentWillUnmount';

class ComponentWillUnmount extends Component {
    constructor() {
        super();
        console.log('inside constructor.')
        this.state = { delete: true }
    }

    render() {
        console.log(`insdie render.`)
        return (
            <div>
                {
                    this.state.delete ? <TargetForUnmount /> : null
                }
                <button onClick={() => { this.setState({ delete: false }) }}>delete</button>
            </div>
        )
    }


}

export default ComponentWillUnmount;