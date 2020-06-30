import React from 'react'
import './portfolio.css'
import PortfolioItem from './PortfolioItem'
import { items } from './portfolio'

const Portfolio = () => {
    return (<div className='portfolio'>
        <h2>Portfolio</h2>
        <div className='portfolio-gallery'>
            {items.map(item => <PortfolioItem {...item} />)}
        </div>

    </div>)
}

export default Portfolio