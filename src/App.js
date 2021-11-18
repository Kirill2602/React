import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home/HomeComponent";
import Chats from "../src/Components/Chats/Chats";
import {Provider} from "react-redux";
import {Profile} from "./Components/Profile/Profile";
import {Err} from "./Components/404/404"
import './App.css';
import {ChatList} from "./Components/ChatList/ChatList";
import {store} from "./Components/store";

export const App = () => {
    return(
        <Provider store={store}>
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
        </ul>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="chats">
                <Route index element={<ChatList text="Выберете чат"/>}/>
                <Route path=":chatId" element={<Chats/>}/>
            </Route>
            <Route path="profile" element={<Profile/>}/>
            <Route path="*" element={<Err/>}/>
            <Route path="" element={<Err/>}/>
        </Routes>
    </BrowserRouter>
    </Provider>
);
}
