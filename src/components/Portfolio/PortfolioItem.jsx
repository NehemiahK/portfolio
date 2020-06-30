import React from 'react'

const PortfolioItem = (props) => {
    return (
        <a href={props.link} key={props.title} target='_blank' rel="noopener noreferrer" className='portfolio-item'>
            <div className='title'>{props.title}</div>
            <div className='description'>{props.description}</div>
        </a>)
}

export default PortfolioItem