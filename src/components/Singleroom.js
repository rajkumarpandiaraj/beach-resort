import React from 'react';
import {data} from '../data';
import Showcase from './Showcase';


function Singleroom(props) {
    const {match} = props;
    const singleRoomArr = data.filter(room => room.sys.id === match.params.slug)
    const [singleRoom] = singleRoomArr;
    return (
        <div>
            <Showcase bg={singleRoom.fields.images[0].fields.file.url} 
                        title={singleRoom.fields.name.toUpperCase()}
                        path='/rooms' btnTitle='BACK TO ROOMS'/>
            <div className='img-grid'>
                <img src={singleRoom.fields.images[1].fields.file.url} alt='facilities'/>
                <img src={singleRoom.fields.images[2].fields.file.url} alt='facilities'/>
                <img src={singleRoom.fields.images[3].fields.file.url} alt='facilities'/>
            </div>
            <div className='details-info'>
                <div className='details'>
                    <h2>Details</h2>
                    <p>{singleRoom.fields.description}</p>
                </div>
                <div className='info'>
                    <h2>Info</h2>
                    <p>Price : {singleRoom.fields.price}</p>
                    <p>Size : {singleRoom.fields.size}</p>
                    <p>Max-Capacity : {singleRoom.fields.capacity}</p>
                    <p>{singleRoom.fields.pets? 'Pets Allowed': 'Pets Not Allowed'}</p>
                    <p>{singleRoom.fields.breakfast? 'Free Breakfast Included' : 'No Free Breakfast'}</p>
                </div>
            </div>
            <div className='extras'>
                <h2>Extras</h2>
                <ul className='list'>
                    {
                        singleRoom.fields.extras.map((extra,index) => <li className='item' key={index}>{extra}</li>)
                    }
                </ul>
            </div>
        </div>
    )
}

export default Singleroom
