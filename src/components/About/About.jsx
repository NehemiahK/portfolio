import React from 'react'
import './about.css'
import WorkSection from './WorkSection'
import { sections } from './about'

const About = () => {
    return (<div className='about'>
        <h2>About Me</h2>
        <div className='tagline'>Fullstack Web Developer with experience in React, PHP, NodeJs.
        I most recently worked at Hometalk, a web based internet company,
        and I’m looking for my next challenge.
        </div>
        <div className='work-experience'>
            {sections.map(section => {
                return (<>
                    <h3>{section.sectionTitle}</h3>
                    {section.value.map(item => <WorkSection {...item} />)}
                </>)
            })}
        </div>

    </div>)
}

export default About