import React,{useState} from 'react';
import './all.min.css';
import Showcase from './Showcase';
import Title from './Title';
import Room from './Room';
import defaultBcg from "../images/defaultBcg.jpeg";
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
    },{
        title : 'Family Deluxe',
        bg : img3,
        price : 799
    },
]
function Homes() {
    const [roomArr, setRoomArr] = useState(initialRoomArr)
    return (
        <>
        <Showcase bg={defaultBcg} title='Luxurious Rooms' subTitle='Deluxe Rooms Starting At Rs.699'/>
        <section className='services'>
            <Title title='Service' />
            <div className='service-box'>
                <div className='service'>
                    <i className='fas fa-walking fa-3x'></i>
                    <h3>Endless Hiking</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae corrupti sunt nesciunt, quo dolorem distinctio dolor quam corporis alias cupiditate deleniti saepe veniam sequi maxime voluptatum eligendi facere. Possimus, a!</p>
                </div>
                <div className='service'>
                    <i className='fas fa-shuttle-van fa-3x'></i>
                    <h3>Free Shuttle</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae corrupti sunt nesciunt, quo dolorem distinctio dolor quam corporis alias cupiditate deleniti saepe veniam sequi maxime voluptatum eligendi facere. Possimus, a!</p>
                </div>
                <div className='service'>
                    <i className='fas fa-beer fa-3x'></i>
                    <h3>Strong Beer</h3>
                    <p> Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vitae corrupti sunt nesciunt, quo dolorem distinctio dolor quam corporis alias cupiditate deleniti saepe veniam sequi maxime voluptatum eligendi facere. Possimus, a!</p>
                </div>
            </div>

        </section>

        <section className='featured'>
            <Title title='Featured Rooms' />

            <div className='featured-room'>
                {
                    roomArr.map(room => <Room bg={room.bg} title={room.title} price={room.price}/>)
                }
                {/* <div className='room'>
                    <img className='room-img' src={require('../images/room-1.jpeg')} alt='hi'/>
                    <h3  className='room-title'>Double Deluxe</h3>
                    <div  className='price'>
                        <p>Rs.300</p>
                        <p>Per Night</p>
                    </div>
                    <div className='room-overlay'>
                        <button className='btn'>Feature</button>
                    </div>
                </div>
                <div className='room'>
                    <img  className='room-img' src={require('../images/room-1.jpeg')} alt='hi'/>
                        <h3  className='room-title'>Double Deluxe</h3>
                    <div  className='price'>
                        <p>Rs.300</p>
                        <p>Per Night</p>
                    </div>
                    <div className='room-overlay'>
                        <button className='btn'>Feature</button>
                    </div>
                </div>
                <div className='room'>
                    <img  className='room-img' src={require('../images/room-1.jpeg')} alt='hi'/>
                    <h3  className='room-title'>Double Deluxe</h3>
                    <div  className='price'>
                        <p>Rs.300</p>
                        <p>Per Night</p>
                    </div>
                    <div className='room-overlay'>
                        <button className='btn'>Feature</button>
                    </div>
                </div> */}
                
            </div>
        </section>
        
        </>
    )
}

export default Homes
