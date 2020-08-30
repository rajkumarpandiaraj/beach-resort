import React from 'react'

function Button(props) {
    
    const {title} = props
    return (
        <>
            <button className='btn'>{title}</button>
        </>
    )
}

export default Button
