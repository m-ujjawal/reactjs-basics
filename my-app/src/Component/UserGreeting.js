import React, { Component } from 'react';
class UserGreeting extends Component {
    constructor(props) {
        super(props)
        this.state = {
            isLoggedIn: true
        }
    }
    render() {
        //4th way; short circuit operator; if left side is true, evalute right side and returns else doesn't return anything 
        return this.state.isLoggedIn && <div>Welcome Vishwash</div>

        /*//3rd way; ternary operator
        return this.state.isLoggedIn ? 
        <div>Hello Vishwash</div> : 
        <div>Hello Guest</div>
        */

        /* //2nd way
        let message
        if(this.state.isLoggedIn){
            message='Hello VIshwash'
        }
        else{
            message='Hello Guest'
        }
        return <div>{message}</div
        */

        /* //1st way; if-else statement don't work inside JSX so can't move inside return div tag
                if (this.state.isLoggedIn) {
                    return (
                        <div>
                            Hello Vishwash
                        </div>
                    )
                }
                else {
                    return (
                        <div>
                            Hello Guest
                        </div>
                    )
                }
                */
    }
}
export default UserGreeting