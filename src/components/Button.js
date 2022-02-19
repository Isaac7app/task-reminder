import React from 'react'

const Button = ({ text, color}) => {
  return (
    <button style={{background: color}} 
    className='btn'>
        {text}
    </button>
  )
}


Button.defaultProps = {
    color: 'steelblue',
  }

export default Button