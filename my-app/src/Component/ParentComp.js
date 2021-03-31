import React, {Component } from 'react'
import MemoComp from './MemoComp'
class ParentComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Vishwash'
        }
    }
    componentDidMount() {
        setInterval(() => {
            this.setState({
                name: 'Vishwash'
            })
        }
            , 2000)
    }
    render() {
        console.log('Parent COmponent rendered')
        return (
            <div>
                Parent COmponent
                <MemoComp name={this.props.name} />
                { /*   <RegComp name={this.state.name}/>
                <PureComp name={this.state.name}/>*/}
            </div>
        )
    }
}
export default ParentComp