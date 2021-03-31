import React, { PureComponent } from 'react'
class PureComp extends PureComponent {
    render() {
        console.log('Pure COmponent rendered')
        return (
            <div>
                Pure COmponent {this.props.name}
            </div>
        )
    }
}
export default PureComp