import React from 'react'
import './all.min.css';

function Service(props) {
    const {icon, title, description} = props
    return (
        <div className='service'>
            <i className={icon} ></i>
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    )
}

export default Service
