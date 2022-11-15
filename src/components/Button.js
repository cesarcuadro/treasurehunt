import React from 'react'

const Button = (props) => {
    const handleClick = () => {
        props.reset()
    }
  return (
    <>
        <button className='button' onClick={handleClick}>Play Again</button>
        
    </>
  )
}

export default Button