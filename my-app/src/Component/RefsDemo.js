import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.inputRef = React.createRef() //1st way, step 1
        this.cbRef = null //2nd way, step 1
        //2nd way, step 2
        this.setCbRef = (element) => {
            this.cbRef = element
        }
    }
    componentDidMount() {
        //2nd way, step 4 
        if (this.cbRef) {
            this.cbRef.focus()
        }
        // this.inputRef.current.focus() //step 3
        // console.log(this.inputRef) // inputRef hold the input element in current
    }
    clickHandler = () => {
        alert(this.inputRef.current.value)
    }
    render() {
        return (
            //1st way, step 2 ref={this.inputRef}
            //2nd way, step 3 ref={this.setCbRef } /
            <div>
                <input type='text' ref={this.inputRef} />
                <input type='text' ref={this.setCbRef} />
                <button onClick={this.clickHandler}> Click</button>
            </div>
        )
    }
}
export default RefsDemo