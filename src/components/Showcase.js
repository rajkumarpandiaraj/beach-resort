import React from 'react'
import Banner from './Banner';


function Showcase(props) {
    const {bg, title,subTitle} = props;
    
    return (
        <div>
            <div className='showcase' style={{background: `url(${bg})`}}>
                <Banner title={title} subTitle={subTitle} />
            </div>
        </div>
    )
}

export default Showcase
