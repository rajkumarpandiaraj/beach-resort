import React from 'react'
import Button from './Button'

function Banner(props) {
    const {title, subTitle} = props
    return (
        <>
            <div className='banner'>
                <h1>{title}</h1>
                <div className='sm-border'></div>
                <p className='subtitle'>{subTitle}</p>
                <Button title='OUR ROOMS' className='btn'/>
            </div>
        </>
    )
}

export default Banner

