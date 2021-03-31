import React, { Component } from 'react'
import UpdatedComponent from './withCounter'
class HoverCounter extends Component {


    render() {
        //const {count}=this.state
        return (

            <h2 onMouseOver={this.props.incrementCount}> Hovered {this.props.count} times</h2>

        )
    }
}
export default UpdatedComponent(HoverCounter)