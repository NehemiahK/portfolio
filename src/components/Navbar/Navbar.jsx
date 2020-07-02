import React from 'react'
import BurgerMenu from './BurgerMenu'

const Navbar = () => {
    return (
        <>
            <BurgerMenu />
            <div className='navbar'>
                <a href='#header' className='brand'>n</a>
                <a href='#about'>ABOUT</a>
                <a href='#portfolio'>PORTFOLIO</a>
                <a href='#contact'>CONTACT</a>
            </div>
        </>)
}

export default Navbar