import React, {useEffect, useState} from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home/HomeComponent";
import {PersistGate} from "redux-persist/integration/react";
import Chats from "../src/Components/Chats/Chats";
import {useDispatch} from "react-redux";
import {Profile} from "./Components/Profile/Profile";
import {Err} from "./Components/404/404"
import './App.css';
import {ChatList} from "./Components/ChatList/ChatList";
import {persistor} from "./Components/store";
import {CircularProgress} from "@mui/material";
import {Users} from "./Components/Users/Users";
import {PublicOutlet} from "./Components/PublicRoute";
import {SignUp} from "./Components/SignUp";
import {PrivateRoute} from "./Components/PrivatRoute";
import {auth, messagesRef} from "./servises/firebase";
import {signIn, signOut} from "./Components/store/profile/actions";
import {onValue} from "firebase/database"

export const App = () => {
    const dispatch = useDispatch();
    const [msgs, setMsgs] = useState({});
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((user) => {
            if (user) {
                dispatch(signIn());
            } else {
                dispatch(signOut());
            }
        });

        return () => unsubscribe();
    }, []);

    useEffect(() => {
        onValue(messagesRef, (snapshot) => {
            const newMsgs = {};

            snapshot.forEach((chatMsgsSnap) => {
                newMsgs[chatMsgsSnap.key] = Object.values(
                    chatMsgsSnap.val().messageList || {}
                );
            });

            setMsgs(newMsgs);
        });
    }, []);

    return (
        <PersistGate persistor={persistor} loading={<CircularProgress/>}>
            <BrowserRouter>
                <ul className="linkList">
                    <li className="liStyle">
                        <Link className="link" to="/">Home</Link>
                    </li>
                    <li className="liStyle">
                        <Link className="link" to="/chats">Chats</Link>
                    </li>
                    <li className="liStyle">
                        <Link className="link" to="/profile">Profile</Link>
                    </li>
                    <li className="liStyle">
                        <Link className="link" to="/users">Users</Link>
                    </li>
                </ul>
                <Routes>
                    <Route path="/" element={<PublicOutlet/>}>
                        <Route path="" element={<Home/>}/>
                    </Route>
                    <Route path="/signup" element={<PublicOutlet/>}>
                        <Route path="" element={<SignUp/>}/>
                    </Route>
                    <Route
                        path="profile"
                        element={
                            <PrivateRoute>
                                <Profile/>
                            </PrivateRoute>}
                    />
                    <Route path="/" element={
                        <PublicOutlet>
                            <Home/>
                        </PublicOutlet>}/>
                    <Route path="chats">
                        <Route index element={<PrivateRoute>
                            <ChatList text="Выберете чат"/>
                        </PrivateRoute>}/>
                        <Route path=":chatId" element={
                            <PrivateRoute>
                                <Chats msgs={msgs}/>
                            </PrivateRoute>}/>
                    </Route>
                    <Route path="profile" element={<Profile/>}/>
                    <Route path="users" element={<Users/>}/>
                    <Route path="*" element={<Err/>}/>
                    <Route path="" element={<Err/>}/>
                </Routes>
            </BrowserRouter>
        </PersistGate>
    );
}
