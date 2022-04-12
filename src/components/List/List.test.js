/* eslint-disable testing-library/await-async-query */
import React from "react";
import {shallow, mount} from 'enzyme';

import {List} from './List'

import { findByCustomTag } from './../../../utils/index'

describe('Default output', () => {
    it('should render default list', () => {

        const wrapper = shallow(<List newtask = '' />)
        //console.log(wrapper.debug())

        const list_of_tasks = findByCustomTag(wrapper, 'list-tasks');
        expect(list_of_tasks.length).toBe(3); // Pass as by default there are 3 tasks
    })
})


describe('click event should work', () => {

    it('should delete the task on close click', () => {
        const wrapper = shallow(<List newtask = '' />)
        const xbutton_list = wrapper.find('.xButton');
    
        const list_of_tasks = findByCustomTag(wrapper, 'list-tasks');

        xbutton_list.at(0).simulate('click');
        const new_list_of_tasks = findByCustomTag(wrapper, 'list-tasks');

        expect(list_of_tasks.length - new_list_of_tasks.length).toBe(1);
    })

    it('should turn the text strikethrough when clicked on task', () => {
        const wrapper = shallow(<List newtask = '' />)
        
        const list_of_tasks = findByCustomTag(wrapper, 'list-tasks');
        
        const preventDefault = jest.fn();
        list_of_tasks.at(0).simulate('click', preventDefault);

        const new_list_of_tasks = findByCustomTag(wrapper, 'list-tasks');
        
        expect(new_list_of_tasks.at(0).hasClass('checked')).toBeTruthy();
    })
})

describe('Adding a task', () => {
    it('should append a task at the end of list', () => {
        let mountWrapperOriginal = mount(<List />);
        let original_number_of_tasks = mountWrapperOriginal.find('li').length;

        let mountWrapperNew = mount(<List newtask={'haha'} />);
        let new_number_of_tasks = mountWrapperNew.find('li').length;

        //console.log(mountWrapper.find('li').debug());       
        expect(new_number_of_tasks - original_number_of_tasks).toBe(1); 
    })
})