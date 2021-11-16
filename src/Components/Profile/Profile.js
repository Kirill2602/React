import React from "react";
import "./profile.css"
import {toggleCheckbox} from "../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";

export const Profile = () => {
    const checkboxValue = useSelector(state => state.checkbox)
    const name = useSelector(state => state.name)
    const color = useSelector(state => state.color)
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