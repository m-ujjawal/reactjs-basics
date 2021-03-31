import React, { Component } from 'react'
class RegComp extends Component {
    render() {
        console.log('Reg COmponent rendered')
        return (
            <div>
                Reg COmponent {this.props.name}
            </div>
        )
    }
}
export default RegComp