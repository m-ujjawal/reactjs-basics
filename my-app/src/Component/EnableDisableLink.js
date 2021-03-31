import React, { Component } from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

class EnableDisableLink extends Component {
    render() {
        return (
            <Router>
                <li>
                    {
                        this.props.notClickable
                            ? <Link to="www.google.com"  onClick={(event) => event.preventDefault()}>Link</Link>
                            : <Link to="www.facebook.com" >Link</Link>
                    }
                </li>
            </Router>
        )
    }
}
export default EnableDisableLink