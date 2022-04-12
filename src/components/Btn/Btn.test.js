/* eslint-disable testing-library/await-async-query */
import React from "react";
import {shallow} from 'enzyme';

import {Btn} from './Btn'

import { findByCustomTag } from './../../../utils/index'

const setup = (props={}) => {
    const component = shallow(<Btn {...props} />);
    return component;
}

describe('Render Button', () => {

    let wrapper;
    let mockFunc;
    beforeEach (() => {

        mockFunc = jest.fn();

        const props = {
            onClick: mockFunc,
            className:'addBtn',
            input_text:'Add',
            enzyme_test: 'addButton'
        }

        wrapper = setup(props);
    });

    it('should contain 1 button', () => {
        //console.log(wrapper.debug());
        const button = findByCustomTag(wrapper, 'addButton');
        expect(button.length).toBe(1); // Pass
    })

    it('should emit event', () => {
        const button = findByCustomTag(wrapper, 'addButton');
        button.simulate('click');
        const callback = mockFunc.mock.calls.length;
        expect(callback).toBe(1);
    })

})

