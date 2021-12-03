import {profileReducer} from "../reducer";
import {toggleCheckbox} from "../actions";

describe('reducer test', () => {
    it('Checkbox should be true', () => {
        let action = toggleCheckbox
        let state = {
            checkbox: false,
            name: 'Change text color',
            color: 'blueviolet',
            authed: false,
        };
        let newState = profileReducer(state, action)
        expect(newState.checkbox).toBe(true)
    })

    it('Color should be yellow', () => {
        let action = toggleCheckbox
        let state = {
            checkbox: false,
            name: 'Change text color',
            color: 'blueviolet',
            authed: false,
        };
        let newState = profileReducer(state, action)
        expect(newState.color).toBe('yellow')
    })
})