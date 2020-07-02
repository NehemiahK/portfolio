import React, { useState } from 'react'
import './navbar.css'

const BurgerMenu = () => {

    const [change, setChange] = useState(false)

    const toggleChange = () => {
        setChange(!change)
    }

    return (<div class={`${change ? 'change' : ''} container`} onClick={toggleChange}>
        <div class="bar1"></div>
        <div class="bar2"></div>
        <div class="bar3"></div>

        {change &&
            <div className='popout-menu'>
                <a href='#header'>ME</a>
                <a href='#about'>ABOUT</a>
                <a href='#portfolio'>PORTFOLIO</a>
                <a href='#contact'>CONTACT</a>
            </div>
        }

    </div>)
}

export default BurgerMenu