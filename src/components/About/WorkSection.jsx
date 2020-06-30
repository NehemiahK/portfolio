import React from 'react'

const WorkSection = (props) => {
    return (<>
        <div className='job-title'>{props.title}</div>
        <ul>
            {props.bullets.map((bullet, indx) => <li key={indx}>{bullet}</li>)}
        </ul>
    </>
    )
}

export default WorkSection