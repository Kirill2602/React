import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CommentIcon from '@mui/icons-material/Comment';
import IconButton from '@mui/material/IconButton';
import {Avatar} from '@mui/material';
import {useState} from "react";
import "./chatListStyle.css";

export const ChatList = () => {
    const [chat, setChat] = useState([
        {
            id: `id-${Date.now()}`,
            name: 'Robot'
        },
        {
            id: `id-${Date.now()}`,
            name: 'Roman'
        },
        {
            id: `id-${Date.now()}`,
            name: 'Amir'
        },
        {
            id: `id-${Date.now()}`,
            name: 'Ivan'
        }
    ]);
    return (
        <List sx={{width: '100%', maxWidth: 360, bgcolor: 'background.paper'}}>
            <h3 className="ChatHeader">Chat List</h3>
            {chat.map(({id, name}, index) => (
                <ListItem
                    className="chatList"
                    key={id + index}
                    disableGutters
                    secondaryAction={
                        <IconButton>
                            <CommentIcon/>
                        </IconButton>
                    }
                >
                    <Avatar className="myAvatar" alt="Remy Sharp" src="/static/images/avatar/1.jpg"/>

                    <ListItemText primary={name}/>
                </ListItem>
            ))}
        </List>
    );
}
