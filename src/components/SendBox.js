import React, { useState } from 'react';
import { Box, IconButton, TextField } from '@mui/material';
import SendSharpIcon from '@mui/icons-material/SendSharp';

const SendBox = ({ setMsg }) => {

    const [message, setMessage] = useState('');

    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            sendMessage(event);
        }
    };

    const sendMessage = (event) => {
        event.preventDefault();
        if (message.trim() !== '') {
            setMsg(message);
            // onSendMessage(message.trim());
            setMessage('');
        }
    };

    return (
        // <Paper component="form" sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', position: 'fixed', bottom: 0 }}>
        //     <InputBase
        //         sx={{ ml: 1, flex: 1 }}
        //         placeholder="Type your message"
        //         value={message}
        //         onChange={(event) => setMessage(event.target.value)}
        //         onKeyDown={handleKeyDown}
        //     />
        //     <IconButton type="submit" sx={{ p: '10px' }} onClick={sendMessage}>
        //         <SendSharpIcon />
        //     </IconButton>
        // </Paper>

        // <div className="send-box-container" style={{
        //     position: "fixed",
        //     bottom: 0,
        //     left: 0,
        //     right: 0,
        //     padding: "16px",
        //     backgroundColor: "#f5f5f5",
        //     display: "flex",
        //     alig: "center"
        // }}>
        //     <TextField label="Type a message" fullWidth />
        //     <IconButton>
        //         <SendSharpIcon />
        //     </IconButton>
        // </div>
        <Box
            sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                display: "flex",
                alignItems: "center",
                padding: 1,
                backgroundColor: "transparent",
            }}
        >
            <TextField
                fullWidth
                id="standard-multiline-flexible"
                multiline
                maxRows={2}
                variant="standard"
                placeholder='Type a message here'
                onKeyDown={handleKeyDown}
                value={message}
                onChange={(event) => setMessage(event.target.value)}
            />
            <IconButton onClick={sendMessage}>
                <SendSharpIcon fontSize='large' />
            </IconButton>
        </Box>

    );
};

export default SendBox;
