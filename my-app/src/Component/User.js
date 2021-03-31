import React ,{Component} from 'react'

class User extends Component{
    render(){
        return(
            //Since renedr is a function not reference so will use '()' with render
            <div>
               {this.props.render(false)}
            </div>
        )
    }
}
export default User