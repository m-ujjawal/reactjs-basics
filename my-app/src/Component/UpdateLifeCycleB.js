import React, { Component } from 'react'
class UpdateLifeCycleB extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Vishal'
        }
        console.log('UpdateLifeCycleB constructure')
    }

    static getDerivedStateFromProps(props, state) {
        console.log('UpdateLifeCycleB getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('UpdateLifeCycleB componentDidMount')
    }

    shouldComponentUpdate() {
        console.log('UpdateLifeCycleB shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log('UpdateLifeCycleB getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate() {
        console.log('UpdateLifeCycleB componentDidUpdate')
    }

    render() {
        console.log('UpdateLifeCycleB render')
        return (
            <div>UpdateLifeCycle B </div>
        )
    }
}
export default UpdateLifeCycleB