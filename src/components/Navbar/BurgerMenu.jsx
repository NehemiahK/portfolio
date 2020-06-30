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
                <a href='/'>Me</a>
                <a href='#about'>About</a>
                <a href='#portfolio'>Portfolio</a>
                <a href='#contact'>Contact</a>
            </div>
        }

    </div>)
}

export default BurgerMenu