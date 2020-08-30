import React from 'react'

function Room(props) {
    const {bg, title, price} = props
    return (
        <>
            <div className='room'>
                    <img className='room-img' src={bg} alt='image'/>
                    <h3  className='room-title'>{title}</h3>
                    <div  className='price'>
                        <p>{price}</p>
                        <p>Per Night</p>
                    </div>
                    <div className='room-overlay'>
                        <button className='btn'>Feature</button>
                    </div>
            </div>
        </>
    )
}

export default Room
