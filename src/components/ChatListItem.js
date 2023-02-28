import React from "react";
// import { Avatar, Box, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
// import LooksOneRoundedIcon from '@mui/icons-material/LooksOneRounded';

import { Avatar, Badge, Box } from "@mui/material";
import { useTheme } from '@mui/material/styles';

// imgs
import userDP from "../assets/imgs/userDP.png";
import groupDP from "../assets/imgs/groupDP.png";

const ChatListItem = ({ chat, onChatSelected }) => {
    // return (
    //     <>
    //         <ListItemButton key={chat.id} onClick={() => onChatSelected(chat)}>
    //             <ListItemIcon>
    //                 <Avatar alt='userDP' src={chat.isGroup ? groupDP : userDP} />
    //             </ListItemIcon>
    //             <List>
    //                 <ListItemText primary={chat.name} />
    //                 <ListItemText primary={chat.lastMsg} />
    //             </List>
    //             <ListItemIcon>
    //                 <LooksOneRoundedIcon />
    //             </ListItemIcon>
    //         </ListItemButton>
    //     </>
    // )

    // const classes = useStyles();
    const theme = useTheme();

    return (
        <Box
            sx={{
                display: "flex",
                alignItems: "center",
                padding: theme.spacing(2),
                "&:hover": {
                    backgroundColor: theme.palette.grey[100],
                    cursor: "pointer"
                }
            }}
            onClick={() => onChatSelected(chat)}
        >
            <Avatar
                sx={{
                    marginRight: theme.spacing(2)
                }}
                src={chat.pic ? chat.pic : chat.isGroup ? groupDP : userDP}
                alt={"userDP"}
            />
            <Box>
                <Box sx={{ fontWeight: "bold", fontSize: 'large' }}>
                    {chat.name}
                </Box>
                <Box sx={{ color: theme.palette.grey[500], fontSize: 'small' }}>
                    {chat.lastMessage}
                </Box>
            </Box>
            {chat.newMessages > 0 &&
                <Badge
                    sx={{ marginLeft: "auto" }}
                    badgeContent={chat.newMessages}
                    color="secondary"
                />}
        </Box>
    );
};

export default ChatListItem;
