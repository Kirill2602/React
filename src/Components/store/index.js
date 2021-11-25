import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import {persistReducer, persistStore} from "redux-persist"
import storage from "redux-persist/lib/storage";
import thunk from "redux-thunk";

import {profileReducer} from "./profile/reducer";
import {chatsReducer} from "./chats/reducer";
import {messageReducer} from "./messages/reducer";
import {usersReducer} from "./users/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const persistConfig = {
    key: 'HW_7',
    storage,
    blacklist:['users']
}

const persistedReducer = persistReducer(
    persistConfig,
    combineReducers({
        chats: chatsReducer,
        profile: profileReducer,
        messages: messageReducer,
        users: usersReducer
    }))
export const store = createStore(
    persistedReducer,
    composeEnhancers(applyMiddleware(thunk))
);

export const persistor = persistStore(store)