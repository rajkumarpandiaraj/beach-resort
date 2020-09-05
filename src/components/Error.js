import React from 'react';
import Showcase from './Showcase';
import defaultBcg from "../images/defaultBcg.jpeg";



function Error() {
    return (
        <div>
            <Showcase bg={defaultBcg} title='404 Error'
                                            path='/' btnTitle='HOME'/>
        
        </div>
    )
}

export default Error
