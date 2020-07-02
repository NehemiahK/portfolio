import React from 'react'
import './footer.css'
import CoffeeButton from '../CofeeButton/CoffeeButton'

const Footer = () => {
    return (<div className='footer'>
        <div className='coffee-wrapper'>
            <CoffeeButton />
        </div>
        <div>© 2020 by Nehemiah Kivelevitz.</div>

    </div>)
}

export default Footer 