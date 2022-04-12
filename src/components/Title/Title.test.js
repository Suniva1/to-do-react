/* eslint-disable testing-library/await-async-query */
import React from "react";
import {shallow} from 'enzyme';

import {Title} from './Title'

import { findByCustomTag } from './../../../utils/index'

const setup = ({test_text}) => {
    const component = shallow(<Title text={test_text} />);
    return component;
}

describe('Render Title', () => {

    it('should contain 1 div component', () => {
        let wrapper = setup('testing-text');
        //console.log(wrapper.debug());
        const h2 = findByCustomTag(wrapper, 'title');
        expect(h2.length).toBe(1); // Pass
    })

})

