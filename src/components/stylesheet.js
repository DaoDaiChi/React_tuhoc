import React from 'react'
import './stylesheet.css'
function stylesheet(props) {
    let className = props.primary ? 'primary' :''
  return (
    <div className={`${className} font-xl`}><h1>stylesheet</h1></div>
  )
}

export default stylesheet