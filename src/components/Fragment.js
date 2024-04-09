import React from 'react'

function Fragment() {
    const item = []
  return (
    <React.Fragment>
        {
            item.map(item => (
                <React.Fragment key = {item.id}>
                    <h1>Title</h1>
                    <p>xin chào</p>
                </React.Fragment>
            ))
        }
        <h1>Fragment</h1>
    </React.Fragment>
  )
}

export default Fragment