import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFreeCodeCamp, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import profilePic from '../../profilepic3.png'
import './header.css'

const Header = () => {
    return (
        <header id='header' className="App-header">
            <div className='picture-text'>
                <div className='text'>
                    <div className='name'>Hi, I'm Nehemiah</div>
                    <div>A Full Stack Developer, maker of stuff, <br />tinkerer of things.</div>
                    <div className='cta'>You can see some of that stuff
                    <a href='#portfolio' style={{ marginLeft: 5 }}>here</a>.</div>
                </div>
                <div>
                    <img src={profilePic} className='profile-pic' alt='profile-pic' />
                </div>
            </div>
            <div className='social-links'>
                <a href='https://twitter.com/NehemiahKiv' target='_blank' rel="noopener noreferrer" ><FontAwesomeIcon icon={faTwitter} /></a>
                <a href='https://www.linkedin.com/in/nehemiah-kivelevitz-48b88a10a/' target='_blank' rel="noopener noreferrer" ><FontAwesomeIcon icon={faLinkedin} /></a>
                <a href='https://www.freecodecamp.org/news/author/nehemiah/' target='_blank' rel="noopener noreferrer" ><FontAwesomeIcon icon={faFreeCodeCamp} /></a>
                <a href='https://github.com/NehemiahK' target='_blank' rel="noopener noreferrer" ><FontAwesomeIcon icon={faGithub} /></a>
                <a href="mailto:nehemiahkiv@gmail.com"><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </header>)
}

export default Header