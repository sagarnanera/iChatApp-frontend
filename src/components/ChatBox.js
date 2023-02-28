import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import ChatUserBar from './ChatUserBar';
import { Box, Container } from '@mui/material';
import SendBox from './SendBox';
import ChatContainer from './ChatContainer';

const ChatBox = ({ chat, handleBackClicked, isMobile }) => {

    const [msg, setMsg] = useState("");

    return (
        <Container sx={{ position: isMobile ? 'inherit' : 'relative', height: '100%' }}>
            <ChatUserBar chat={chat} handleBackClicked={handleBackClicked} />
            <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'}>
                {/* <Typography variant="h4">{chat.name}</Typography>
                <Typography variant="body1">This is the detail panel.</Typography> */}
                {msg !== "" && <ChatContainer message={msg} />}
            </Box>
            <Container>
                <SendBox setMsg={setMsg} />
            </Container>
        </Container>
    )
}

export default ChatBox;
