import React, {useState} from "react";
import "./profile.css"
import {toggleCheckbox} from "../store/profile/actions";
import {useDispatch, useSelector} from "react-redux";
import {selectCheckbox, selectColor, selectName} from "../store/profile/selectors";
import {logOut} from "../../servises/firebase";

export const Profile = () => {
    const checkboxValue = useSelector(selectCheckbox)
    const name = useSelector(selectName)
    const color = useSelector(selectColor)
    const dispatch = useDispatch()

    const handleChange = () => {
        dispatch(toggleCheckbox)
    }
    const handleLogOutClick = async () => {
        try {
            await logOut();
        } catch (err) {
            console.log(err);
        }
    };

    return (
        <div className="profile">
            <h1 style={{color: color}} className="profile__header">Profile</h1>
            <label className="pointer" style={{color: color}}>
                <input type="checkbox" checked={checkboxValue} onChange={handleChange}/>
                {name}</label>
            <button className="profile__SignOut" onClick={handleLogOutClick}>SIGN OUT</button>
        </div>
    )
}