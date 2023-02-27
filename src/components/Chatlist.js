import React from "react";
import {
    Divider,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Stack
} from "@mui/material";
import ChatListItem from "./ChatListItem";

const chats = [
    { id: 1, name: "Chat 1", lastMsg: "This is last msg...", isGroup: false },
    { id: 2, name: "Chat 2", lastMsg: "This is last msg...", isGroup: false },
    { id: 3, name: "Chat 3", lastMsg: "This is last msg...", isGroup: true },
    { id: 4, name: "Chat 4", lastMsg: "This is last msg...", isGroup: false },
    { id: 5, name: "Chat 5", lastMsg: "This is last msg...", isGroup: true },
    { id: 6, name: "Chat 6", lastMsg: "This is last msg...", isGroup: false },
    { id: 7, name: "Chat 7", lastMsg: "This is last msg...", isGroup: true },
    { id: 8, name: "Chat 8", lastMsg: "This is last msg...", isGroup: true },
    { id: 9, name: "Chat 9", lastMsg: "This is last msg...", isGroup: false },
    { id: 10, name: "Chat 10", lastMsg: "This is last msg...", isGroup: false },
];

const Chatlist = ({ onChatSelected }) => {
    return (
        <Stack divider={<Divider orientation="horizontal" flexItem />} spacing={1} sx={{ overflowY: 'scroll' }}>
            {chats.map(chat =>
                // <ListItemButton button key={chat.id} onClick={() => onChatSelected(chat)}>
                //     <ListItemText primary={chat.name} />
                // </ListItemButton>
                <ChatListItem chat={chat} key={chat.id} onChatSelected={onChatSelected} />
            )}
        </Stack>
    );
};

export default Chatlist;
