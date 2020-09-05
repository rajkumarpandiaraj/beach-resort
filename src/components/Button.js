import React from 'react';
import '../App.css';

function Button(props) {
    
    const {title} = props
    return (
        <>
            <button className='btn'>{title}</button>
        </>
    )
}

export default Button
