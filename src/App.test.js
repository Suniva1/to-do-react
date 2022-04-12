/* eslint-disable testing-library/await-async-query */
import React from "react";
import {shallow} from 'enzyme';

import App from './App'

import { findByCustomTag } from './../utils/index'

/*

* shallow -> render a component
* find -> find a component based on a certain parameter
* finding a class -> find('.className') -> need to use a . before the className to find it in the DOM.
* checking what is being printed out -> console.log(component.debug());
* Using className to find a component is very risky as other developers might change it. So we can use custom made tag for testing. Use them -> component.find(`[test-enzyme-data='input-task']`);
* REFACTORING: very important to reduce the number of lines of code. If they can be combined, just do it.
* use adapter-17 for using mount in react 17 -> https://stackoverflow.com/a/71143962

*/

let MainApp;

beforeEach(() => {
    MainApp = shallow(<App />);
})

window.alert = jest.fn();

describe('Render Components', () => {

    it('should render 1 header without errors', () => {

        const headWrapper = MainApp.find('.header');
        expect(headWrapper.length).toBe(1); // Pass
    });

    it('should contain 1 add button', () => {
        const btnWrapper = MainApp.find('.addBtn');
        expect(btnWrapper.length).toBe(1); // Pass
    })

    it('should contain 1 input text box', () => {
        const InputWrapper = findByCustomTag(MainApp, 'input-task');
        expect(InputWrapper.length).toBe(1); // Pass
    })

})

describe('Click button works ?', () => {
    it('should show an alert box', () => {
        const addButton = MainApp.find('Btn');

        addButton.simulate('click');
        expect(window.alert.length).toBe(0);
    })
})
