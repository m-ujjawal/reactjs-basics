import React,{Component} from 'react'
import ComponentF from './ComponentF'
import UserContext from './userContext'
class ComponentE extends Component{
    render(){
        return(
            <div>
                Component E context {this.contextType}
            <ComponentF/>
            </div>
        )
    }
}
ComponentE.contextType=UserContext
export default ComponentE