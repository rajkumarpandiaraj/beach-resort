import React,{useState, useEffect} from 'react';
import {data} from '../data'

export const globalContext = React.createContext();

const featuredArr = data.filter(el => el.fields.featured === true)
const typeOfRooms = Array.from( new Set(data.map(obj => obj.fields.type)));


const initialState = {
    form : {
        roomType : 'all',
        price : 6000,
        guests : 10,
        breakfast : false,
        pets : false,
    },
    featuredArr,
    typeOfRooms,
    roomsArr : data
}
export function Globalcontext({children}) {
    const [state, setState] = useState(initialState);

    useEffect(() => {
        let tempRoom = data.filter(el  => el.fields.price*10 <= state.form.price);
        tempRoom = tempRoom.filter(el => el.fields.capacity <= state.form.guests) 
        if(state.form.breakfast){
            tempRoom = tempRoom.filter(el => el.fields.breakfast === true) 
        }else{
            tempRoom = data.filter(el  => el.fields.price*10 <= state.form.price);
            tempRoom = tempRoom.filter(el => el.fields.capacity <= state.form.guests)
            if(state.form.pets){
                tempRoom = tempRoom.filter(el => el.fields.pets === true)
            }
        }
        if(state.form.pets){
            tempRoom = tempRoom.filter(el => el.fields.pets === true)
        }else{
            tempRoom = data.filter(el  => el.fields.price*10 <= state.form.price);
            tempRoom = tempRoom.filter(el => el.fields.capacity <= state.form.guests) 
            if(state.form.breakfast){
                tempRoom = tempRoom.filter(el => el.fields.breakfast === true) 
            }
        }

        if(state.form.roomType !== 'all'){
            tempRoom = tempRoom.filter(el => el.fields.type === state.form.roomType) 
        }
        setState({
            ...state,
            roomsArr : tempRoom
        })
        
    }, [state.form])

    const formContextHandler =(e) =>{
        setState({
            ...state,
            form : {
                ...state.form,
                [e.target.name] : e.target.value
            }
        })
    }
    const formCheckBoxHandler = (e)=>{
        setState({
            ...state,
            form : {
                ...state.form,
                [e.target.name] : !state.form.[e.target.name],
            }
        })
    }
    return (
        <div>
            <globalContext.Provider value={{state,formContextHandler,formCheckBoxHandler}}>
                {children}
            </globalContext.Provider>
        </div>
    )
}

export default Globalcontext
