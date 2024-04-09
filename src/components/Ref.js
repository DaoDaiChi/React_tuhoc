import React, { Component } from 'react'

class Ref extends Component {
    constructor(props) {
      super(props)
      this.inputRef = React.createRef()
      this.cbRef = null
      this.setCbRef = element =>{
        this.cbRef = element
      }
    }
    componentDidMount(){
        if(this.cbRef){
            this.cbRef.focus()
        }
        // this.inputRef.current.focus()
        // console.log(this.inputRef)
    }
    clickhandler = () =>{
        console.log(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type='text' ref = {this.inputRef}></input>
        <input type='text' ref = {this.setCbRef}></input>
        <button onClick={this.clickhandler}>Click</button>
      </div>
    )
  }
}

export default Ref