import React from 'react'
// function Greet(props) {
//     return <h1>안녕하세요 {props.name}</h1>
// }
 const Greet = (props) => {
    
 return(
 <div> 
    <h1>xin chào {props.name} {props.lastName}</h1>
    {props.children}
 </div>)
 
 }
export default Greet