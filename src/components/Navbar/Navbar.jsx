import React from 'react'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {
    return (
        <>
            <BurgerMenu />
            <div className='navbar'>
                <a href='/' className='brand'>n</a>
                <a href='#about'>About</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contact'>Contact</a>
            </div>
        </>)
}

export default Navbar