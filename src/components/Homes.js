import React,{ useContext} from 'react';
import Showcase from './Showcase';
import Title from './Title';
import Room from './Room';
import defaultBcg from "../images/defaultBcg.jpeg";
import Service from './Service';
import {initialServiceArr} from './data/Servicedata';
import {globalContext} from '../context/Globalcontext';



function Homes() {
    const {state} = useContext(globalContext);
    const {featuredArr} = state;
    return (
        <div>
            <>
                <Showcase bg={defaultBcg} title='Luxurious Rooms' subTitle='Deluxe Rooms Starting At Rs.699'
                                            path='/rooms' btnTitle='OUR ROOMS'/>
        <section className='services'>
            <Title title='Service' />
            <div className='service-box'>
                    {
                        initialServiceArr.map( service => <Service key={service.id} icon={service.icon} 
                                                                title={service.title} description={service.description} />)
                    }
            </div>
        </section>

        <section className='featured'>
            <Title title='Featured Rooms' />
            <div className='featured-room'>
                {
                    featuredArr.map(room => <Room key={room.sys.id} 
                                bg={room.fields.images[0].fields.file.url} 
                                title={room.fields.name.toUpperCase()}
                                price={room.fields.price}
                                slug={room.sys.id}/>)
                }                
            </div>
        </section>
            </>
        </div>
    )
}

export default Homes
