import React from 'react'
import Typography from '@mui/material/Typography';
import ChatUserBar from './ChatUserBar';
import { Box } from '@mui/material';

const ChatBox = ({ chat, handleBackClicked }) => {
    return (
        <>
            <ChatUserBar chat={chat} handleBackClicked={handleBackClicked} />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                <Typography variant="h4">{chat.name}</Typography>
                <Typography variant="body1">This is the detail panel.</Typography>
            </Box>
        </>
    )
}

export default ChatBox;
