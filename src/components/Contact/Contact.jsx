import React from 'react'
import './contact.css'
import ContactForm from './ContactForm'
import CoffeeButton from '../CofeeButton/CoffeeButton'

const Contact = () => {
    return (<div className='contact'>
        <h2>Get in Touch!</h2>
        <ContactForm />

        <div className='coffee-wrapper'>  <CoffeeButton /></div>
    </div>)
}

export default Contact