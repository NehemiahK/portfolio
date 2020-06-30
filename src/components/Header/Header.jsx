import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter, faLinkedin, faFreeCodeCamp, faGithub } from "@fortawesome/free-brands-svg-icons"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"
import profilePic from '../../profilepic3.png'
import './header.css'

const Header = () => {
    return (
        <header className="App-header">
            <div className='picture-text'>
                <div className='text'>
                    <div className='name'>Hi, I'm Nehemiah</div>
                    <div>A Full Stack Developer, maker of stuff, <br />tinkerer of things.</div>
                    <div className='cta'>You can see some of that stuff
                    <a href='#portfolio' style={{ marginLeft: 5 }}>here</a>.</div>
                </div>
                <div>
                    <img src={profilePic} className='profile-pic' />
                </div>
            </div>
            <div className='social-links'>
                <a><FontAwesomeIcon icon={faTwitter} /></a>
                <a><FontAwesomeIcon icon={faLinkedin} /></a>
                <a><FontAwesomeIcon icon={faFreeCodeCamp} /></a>
                <a><FontAwesomeIcon icon={faGithub} /></a>
                <a><FontAwesomeIcon icon={faEnvelope} /></a>
            </div>
        </header>)
}

export default Header