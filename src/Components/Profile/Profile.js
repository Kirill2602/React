import React from "react";
import "./profile.css"
import {toggleCheckbox} from "../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCheckbox, selectColor, selectName} from "../store/profile/selectors";

export const Profile = () => {
    const checkboxValue = useSelector(selectCheckbox)
    const name = useSelector(selectName)
    const color = useSelector(selectColor)
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(toggleCheckbox)
    }

    return (
        <div className="profile">
            <h1 style={{color: color}} className="profile__header">Profile</h1>
            <label className="pointer" style={{color: color}}>
                <input type="checkbox" checked={checkboxValue} onChange={handleChange}/>
                {name}</label>
        </div>
    )
}