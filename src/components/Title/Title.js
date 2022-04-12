import React from 'react';
import './index.css';

export const Title = ({text}) => {
    //console.log('Title');
    return (
        <h2 className='title' test-enzyme='title'>{text}</h2>
    )
}