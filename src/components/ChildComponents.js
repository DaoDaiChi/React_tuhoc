import React from 'react'

function ChildComponents(props) {
  return (
    <div>
        <button onClick={props.greetHandler}>greetParent</button>
    </div>
  )
}

export default ChildComponents