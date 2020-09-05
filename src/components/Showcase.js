import React from 'react'
import Banner from './Banner';


function Showcase(props) {
    const {bg, title, subTitle, path, btnTitle} = props;
    
    return (
        <div>
            <div className='showcase' style={{background: `url(${bg})`}}>
                <Banner title={title} subTitle={subTitle} path={path} btnTitle={btnTitle}/>
            </div>
        </div>
    )
}

export default Showcase
