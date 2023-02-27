import React from 'react'
import { Avatar, Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';

// imgs
import userDP from '../assets/imgs/userDP.png'
import groupDP from '../assets/imgs/groupDP.png'

const ChatListItem = ({ chat, onChatSelected }) => {

    return (
        <>
            <ListItemButton key={chat.id} onClick={() => onChatSelected(chat)}>
                <ListItemIcon>
                    <Avatar alt='userDP' src={chat.isGroup ? groupDP : userDP} />
                </ListItemIcon>
                <List>
                    <ListItemText primary={chat.name} />
                    <ListItemText primary={chat.lastMsg} />
                </List>
                <ListItemIcon>
                    <LooksOneRoundedIcon />
                </ListItemIcon>
            </ListItemButton>
        </>
    )
}

export default ChatListItem
