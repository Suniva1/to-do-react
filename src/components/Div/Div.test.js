/* eslint-disable testing-library/await-async-query */
import React from "react";
import {shallow} from 'enzyme';

import {Div} from './Div'

import { findByCustomTag } from './../../../utils/index'

const setup = (props={}) => {
    const component = shallow(<Div {...props} />);
    return component;
}

describe('Render Div', () => {

    let wrapper;
    beforeEach (() => {
        const props = {
            className:'div-test'
        }

        wrapper = setup(props);
    });

    it('should contain 1 div component', () => {
        //console.log(wrapper.debug());
        const div = findByCustomTag(wrapper, 'div');
        expect(div.length).toBe(1); // Pass
    })

})

