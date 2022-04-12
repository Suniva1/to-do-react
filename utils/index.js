/*

This file is mainly used to give different files access to common functions.

*/

export const findByCustomTag = (MainApp, attr) => {
    
    const wrapper = MainApp.find(`[test-enzyme='${attr}']`);
    return wrapper;
}