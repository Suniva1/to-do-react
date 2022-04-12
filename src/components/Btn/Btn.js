import React from 'react';
import './index.css';

export const Btn = (props) => {

    const {onClick, className, input_text, enzyme_test} = props;

    return (
        <button onClick={onClick} className={className} test-enzyme={enzyme_test}>{input_text}</button>
    );

}