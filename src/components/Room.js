import React from 'react';
import {Link} from 'react-router-dom';

function Room(props) {
    const {bg, title, price,slug} = props
    return (
        <>
            <div className='room'>
                <div className='overlay-div'>
                    <img className='room-img' src={bg} alt='room'/>
                    <div className='room-overlay'>
                        <Link to={`/rooms/${slug}`}>
                            <button className='btn'>Feature</button>
                        </Link>
                    </div>
                </div>
                    <h3  className='room-title'>{title}</h3>
                    <div  className='price'>
                        <p>{price*10}</p>
                        <p>Per Night</p>
                    </div>
                    
            </div>
        </>
    )
}

export default Room
