import React,{useContext} from 'react';
import room2 from "./images/details-2.jpeg";
import Showcase from './Showcase';
import Room from './Room';
import {globalContext} from '../context/Globalcontext';



function Rooms() {
    const {state, formContextHandler, formCheckBoxHandler} = useContext(globalContext);
    const {roomsArr, typeOfRooms, form} = state;
    const {
        roomType,
        price,
        guests,
        breakfast,
        pets,} = form

    return (
        <>
            <Showcase bg={room2} title='Our Rooms'
                        path='/' btnTitle='BACK TO HOME'/>
        <section className='rooms-rooms'>
            <form>
                <div className='form-group'>
                    <label htmlFor='room-type'>Room Type</label>
                        <select name='roomType' value={roomType} id='room-type' onChange={formContextHandler}>
                            <option value='all'>All</option>
                            {
                                typeOfRooms.map(type =>  <option key={type} value={type}>{type}</option>)
                            }
                        </select>
                </div>
                <div className='form-group'>
                    <label htmlFor='guest'>Guests</label>
                    <input type='number' id='guest' name='guests' value={guests}  onChange={formContextHandler}/>
                </div>
                <div className='form-group range'>
                        <label htmlFor='price'>Price Starts from Rs.1000 - Rs.{price}</label>
                    <input type='range' id='price' min='1000' max='6000' name='price' value={price} step='100'  onChange={formContextHandler}/>
                </div>
                <div className='form-group'>
                    <div>
                        <input type='checkbox' name='breakfast' className='check' value={breakfast}  onChange={formCheckBoxHandler}/>Breakfast
                    </div>
                    <div>
                        <input type='checkbox' name='pets' className='check' value={pets}  onChange={formCheckBoxHandler}/>Pets
                    </div>
                </div>
            </form>
            <div className={roomsArr.length === 0? 'rooms-empty-container' : 'rooms-container'}>
                {
                    roomsArr.length === 0?
                    <h1>Unfortunately No Rooms Matched For Your Search Parameter</h1>:
                    roomsArr.map(room => <Room key={room.sys.id} 
                                            bg={room.fields.images[0].fields.file.url} 
                                            title={room.fields.name.toUpperCase()}
                                            price={room.fields.price}
                                            slug={room.sys.id}/>)
                }


            </div>
        </section>
        </>
    )
}

export default Rooms
