import React from 'react'

const Button = () => {
    const handleClick = () => {
        window.location.reload()
    }
  return (
    <>
        <button className='button' onClick={handleClick}>Play Again</button>
        
    </>
  )
}

export default Button