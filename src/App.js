import React from "react";
import {BrowserRouter, Link, Route, Routes} from "react-router-dom";
import {Home} from "./Components/Home/HomeComponent";
import {PersistGate} from "redux-persist/integration/react";
import Chats from "../src/Components/Chats/Chats";
import {Provider} from "react-redux";
import {Profile} from "./Components/Profile/Profile";
import {Err} from "./Components/404/404"
import './App.css';
import {ChatList} from "./Components/ChatList/ChatList";
import {persistor, store} from "./Components/store";
import {CircularProgress} from "@mui/material";

export const App = () => {
    return (
        <Provider store={store}>
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
            </PersistGate>
        </Provider>
    );
}
