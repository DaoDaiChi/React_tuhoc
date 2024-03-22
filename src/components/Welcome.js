import React, {Component} from "react";
class Welcome extends Component {
constructor(){
    super()
    this.state ={ message : 'Welcome vistor'}
}
changeMessage(){
    this.setState({message:'thaansks to'})
}
    render()
    {
        return (
        <div>
        <h1 >{this.state.message}</h1>
        <button onClick={()=> this.changeMessage()}>Subcribe</button>
        </div>
        )
    }
}
export default Welcome