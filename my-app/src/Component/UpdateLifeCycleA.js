import React,{Component} from 'react'
import UpdateLifeCycleB from './UpdateLifeCycleB'
class UpdateLifeCycleA extends Component{
    constructor(props){
        super(props)
        this.state={
            name: 'Vishal'
        }
        console.log('UpdateLifeCycleA constructure')
    }
    
    static getDerivedStateFromProps(props, state) {
        console.log('UpdateLifeCycleA getDerivedStateFromProps')
        return null
    }

    componentDidMount() {
        console.log('UpdateLifeCycleA componentDidMount')
    }

    shouldComponentUpdate(){
        console.log('UpdateLifeCycleA shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('UpdateLifeCycleA getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(){
        console.log('UpdateLifeCycleA componentDidUpdate')
    }

    changeState=()=>{
        this.setState({
            name:'codeEvovlution'
        })
    }
    render() {
        console.log('UpdateLifeCycleA render')
        return (
            <div>
                <div>UpdateLifeCycle A</div>
                <button onClick={this.changeState}>Change STate</button>

                <UpdateLifeCycleB/>
            </div>
        )
    }
}
export default UpdateLifeCycleA