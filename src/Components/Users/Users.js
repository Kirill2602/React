import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {selectUsersError, selectUsersList, selectUsersLoading} from "../store/users/selectors";
import {getUsers} from "../store/users/actions";
import {CircularProgress} from "@mui/material";
import "./users.css";

export const Users = () => {
    const dispatch = useDispatch()
    const users = useSelector(selectUsersList)
    const isLoading = useSelector(selectUsersLoading)
    const error = useSelector(selectUsersError)

    const requestUsers = async () => {
        dispatch(getUsers())
    }
    useEffect(() => {
        requestUsers()
    }, [])
    return (
        <div className="users">
            <h3 className="user__header">USERS</h3>
            {isLoading ? (
                <CircularProgress/>
            ) : (
                <>
                    <button onClick={requestUsers}>RELOAD</button>
                    {error && <h4>ERROR</h4>}
                    {!!error && <h4>ERROR: {error}</h4>}
                    <div>
                        {users.map((user) => (
                            <div className="usersCard" key={user.id}>
                                <h3 className="card__header">Name: {user.name}</h3>
                                <p><span>Username:</span> {user.username}</p>
                                <p><span>Email:</span> {user.email}</p>
                                <p><span>Phone:</span> {user.phone}</p>
                                <p><span>Website:</span> {user.website}</p>
                                <p><span>City:</span> {user.address.city}</p>
                                <hr/>
                            </div>
                        ))}
                    </div>
                </>
            )}
        </div>
    );
}
