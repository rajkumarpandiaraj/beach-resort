import React,{useState} from 'react';
import room2 from "./images/details-2.jpeg";
import Showcase from './Showcase';
import Room from './Room';
import img1 from "./images/room-1.jpeg";
import img2 from "./images/room-2.jpeg";
import img3 from "./images/room-3.jpeg";


const initialRoomArr = [
    {
        title : 'Double Deluxe',
        bg : img1,
        price : 599
    },
    {
        title : 'Single Deluxe',
        bg : img2,
        price : 399
    },
    {
        title : 'Family Deluxe',
        bg : img3,
        price : 799
    },
    {
        title : 'Double Deluxe',
        bg : img1,
        price : 599
    },
    {
        title : 'Single Deluxe',
        bg : img2,
        price : 399
    },
    {
        title : 'Family Deluxe',
        bg : img3,
        price : 799
    },{
        title : 'Double Deluxe',
        bg : img1,
        price : 599
    },
    {
        title : 'Single Deluxe',
        bg : img2,
        price : 399
    },
    {
        title : 'Family Deluxe',
        bg : img3,
        price : 799
    },{
        title : 'Double Deluxe',
        bg : img1,
        price : 599
    },
    {
        title : 'Single Deluxe',
        bg : img2,
        price : 399
    },
    {
        title : 'Family Deluxe',
        bg : img3,
        price : 799
    },
]
function Rooms() {
    const [roomArr, setRoomArr] = useState(initialRoomArr)
    return (
        <>
            <Showcase bg={room2} title='Our Rooms'/>
        <section className='rooms-rooms'>
            <form>
                <div className='form-group'>
                    <label htmlFor='room-type'>Room Type</label>
                        <select name='type' value='all' id='room-type'>
                            <option value='all'>All</option>
                            <option value='triple'>Triple</option>
                            <option value='family'>Family</option>
                            <option value='double'>Double</option>
                            <option value='single'>Single</option>
                            <option value='double'>Double</option>
                        </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='guest'>Guests</label>
                    <input type='number' id='guest' name='guest' value='1'/>
                </div>
                <div className='form-group'>
                    <label htmlFor='price'>Room Price Rs.600</label>
                    <input type='range' id='price' min='600' max='2000' step='100  '/>
                </div>
                <div className='form-group'>
                    <div>
                        <input type='checkbox' name='breakfast' className='check' value='false'/>Breakfast
                    </div>
                    <div>
                        <input type='checkbox' name='pets' className='check' value='false'/>Pets
                    </div>
                </div>
            </form>
            <div className='rooms-container'>
                {
                    roomArr.map(room => <Room bg={room.bg} title={room.title} price={room.price}/>)
                }


            </div>
        </section>
        </>
    )
}

export default Rooms
