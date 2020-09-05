import React from 'react'
import Button from './Button';
import {Link} from 'react-router-dom';

function Banner(props) {
    const {title, subTitle, path, btnTitle} = props;
    return (
        <>
            <div className='banner'>
                <h1>{title}</h1>
                <div className='sm-border'></div>
                <p className='subtitle'>{subTitle}</p>
                <Link to={path}>
                    <Button title={btnTitle}/>
                </Link>
            </div>
        </>
    )
}

export default Banner

