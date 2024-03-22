import React, { Component } from 'react'

export class counter extends Component {
constructor(props) {
  super(props)

  this.state = {
     count:0
  }
}
increment(){
    // this.setState({count: this.state.count + 1})
    this.setState(prevState =>({
        count: prevState.count + 1
    }))
}
// dercement(){
//     this.setState({count:this.state.count - 1})
// }
incrementFive(){
    this.increment()
    this.increment()
    this.increment()
    this.increment()
    this.increment()
}
  render() {
    return (
      <div>
        <div>counter - {this.state.count}</div>
        <button onClick={() => this.incrementFive()}>Increment</button>
        </div>
    )
  }
}

export default counter