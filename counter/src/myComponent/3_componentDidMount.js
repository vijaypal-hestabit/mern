import React, { Component } from 'react';

class ComponentDidMount extends Component {
    constructor() {
        super();
        console.log('inside constructor.')
        this.state = {data:[]}
    }

    // call when all dom load on dom
    componentDidMount() {
        console.log('inside did mount.')
        fetch('https://api.github.com/users').then(response => response.json()).then(data => {
            this.setState({data:data})
        })
    }
    
    render() {
        console.log(`inside render`)
        console.log(this.state)
        return (
            <div>
                Welcome to Component Did Mount.
                    {
                        this.state.data.map((item)=> 
                            <li key={item.id}>{item.login}</li>
                        )
                    }
            </div>
        )
    }


}

export default ComponentDidMount;