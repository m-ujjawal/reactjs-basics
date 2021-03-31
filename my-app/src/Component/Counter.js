import React, { Component } from 'react';

class Counter extends Component {
    constructor() {
        super();
        this.state = {
            count: 0
        }
    }
    increment() {
        this.setState((prevState) => ({
            count: prevState.count + 1
        }))
        /*
        this.setState({
            count:this.state.count+1
        },()=>{console.log('inside setState callback function and i executes after state set',this.state.count)})
    console.log('outside setState and i executes before state set, i am async',this.state.count);
        */
    }

    incrementFive() {
        this.increment();
        this.increment();
        this.increment();
        this.increment();
        this.increment();
    }
    render() {
        return (
            <div>
                <h1> Count-{this.state.count}</h1>
                <button onClick={() => this.incrementFive()}>Increment</button>
            </div>
        )
    }
}

export default Counter;