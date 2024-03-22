import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggin :true
      }
    }
  render() {
   return this.state.isloggin && <div>Welcome</div>
    // return (
    //   <div>UserGreeting</div>
    // )
  }
}

export default UserGreeting