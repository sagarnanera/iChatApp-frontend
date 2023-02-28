import React from "react";
import {
    Divider,
    Stack
} from "@mui/material";
import ChatListItem from "./ChatListItem";

const chats = [
    {
        id: 1,
        name: "Chat 1",
        isGroup: false,
        newMessages: 1,
        lastMessage: "hey sk nanera",
        pic:
            ""
    },
    {
        id: 2,
        name: "Chat 2",
        isGroup: false,
        newMessages: null,
        lastMessage: "hey",
        pic:
            "https://picsum.photos/200"
    },
    {
        id: 3,
        name: "Chat 3",
        lastMsg: "This is last msg...",
        isGroup: true,
        newMessages: null,
        lastMessage: "hey sk",
        pic:
            "https://picsum.photos/200"
    },
    {
        id: 4,
        name: "Chat 4",
        isGroup: false,
        newMessages: 4,
        lastMessage: "hey sk",
        pic:
            "https://picsum.photos/200"
    },
    {
        id: 5,
        name: "Chat 5",
        isGroup: true,
        newMessages: 5,
        lastMessage: "hey sk",
        pic:
            "https://picsum.photos/200"
    },
    {
        id: 6,
        name: "Chat 6",
        isGroup: false,
        newMessages: 8,
        lastMessage: "hey sk",
        pic:
            "https://picsum.photos/200"
    },
    {
        id: 7,
        name: "Chat 7",
        isGroup: true,
        newMessages: null,
        lastMessage: "hey sk",
        pic:
            "https://picsum.photos/200"
    },
    {
        id: 8,
        name: "Chat 8",
        isGroup: true,
        newMessages: 2,
        lastMessage: "hey sk",
        pic:
            ""
    },
    {
        id: 9,
        name: "Chat 9",
        isGroup: false,
        newMessages: 9,
        lastMessage: "hey sk",
        pic:
            "https://picsum.photos/200"
    },
    {
        id: 10,
        name: "Chat 10",
        isGroup: false,
        newMessages: null,
        lastMessage: "hey sk",
        pic:
            "https://picsum.photos/200"
    }
];

const Chatlist = ({ onChatSelected }) => {
    return (

        <Stack
            divider={<Divider orientation="horizontal" flexItem />}
            spacing={1}
            sx={{ overflowY: "scroll", width: 'auto', height: '100vh', scrollbarColor: 'black', scrollbarWidth: '1px' }}
        >
            {chats.map(chat =>
                // <ListItemButton button key={chat.id} onClick={() => onChatSelected(chat)}>
                //     <ListItemText primary={chat.name} />
                // </ListItemButton>
                <ChatListItem
                    chat={chat}
                    key={chat.id}
                    onChatSelected={onChatSelected}
                />
            )}
        </Stack>
    );
};

export default Chatlist;
