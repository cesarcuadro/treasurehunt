import React from 'react'

const Countdown = (props) => {
    const handleClick = () => {
        props.countdown(props.index)
    }
  return (
    <div className='countdown' onClick={handleClick}>Countdown: {props.value}</div>
  )
}


export default Countdown