import React, { Component } from 'react'

class CounterTwo extends Component {
    constructor(props) {
        super(props)
        this.state = {
            count: 0
        }
    }
    incermentCount = () => {
        this.setState((prevState) => {
            return { count: prevState.count + 1 }
        })
    }
    render() {
        return (
            <div>
                {this.props.children(this.state.count, this.incermentCount)}
            </div>
        )
    }
}
export default CounterTwo