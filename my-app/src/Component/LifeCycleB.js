import React, { Component } from 'react'

class LIfecycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Vishal'
        }
        console.log('LIfecycleB constructure')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('LIfecycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('LIfecycleB componentDidMount')
    }

    render() {
        console.log('LIfecycleB render')
        return (
            <div>LIfecycle B</div>
        )
    }
}

export default LIfecycleB