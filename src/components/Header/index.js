import React from 'react'
import { Link } from 'react-router-dom'
import './index.css'


const Header = () => {
  return (
    <nav className="navbar navbar-dark bg-dark mynav">
        <div>
            <Link to='/' className='link-logo'>Bookstore</Link>
        </div>
        <div>
            <Link to='/books' className='link-pages'>Books</Link>
            <Link to='/genres' className='link-pages'>Genre</Link>
        </div>
    </nav>
  )
}

export default Header

