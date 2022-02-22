import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer>
        <p>Copyright &copy; React-Project 2022</p>
        <Link to='/about'>About</Link>
    </footer>
  )
}

export default Footer;