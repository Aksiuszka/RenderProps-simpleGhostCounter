import React from 'react'

function Counter2(props) {
  return (
    <div>
      <button onClick={props.incrementCounting}>{props.count}</button>
    </div>
  )
}

export default Counter2