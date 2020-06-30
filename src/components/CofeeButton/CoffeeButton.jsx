import React from 'react'
import pizzaSvg from '../../pizza-slice.svg'
import './coffeebutton.css'

const CoffeeButton = () => {
    return (<a className="bmc-button" target="_blank" href="https://www.buymeacoffee.com/nehemiah">
        <img src={pizzaSvg} alt="Buy me a pizza" />
        <span style={{ marginLeft: 5, fontSize: 19 }}>
            Buy me a pizza</span>
    </a>)
}

export default CoffeeButton

