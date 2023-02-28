import React from 'react';
import Typography from '@mui/material/Typography';
import { Container } from '@mui/material';

const ChatHome = () => {
    return (
        <div style={{
            height: '100vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center'
        }}>
            <Container sx={{ maxWidth: '600px',width:'600px', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center' }}>
                <Typography variant="h4" align="center" sx={{ mb: 2 }}>
                    Welcome to iChatApp
                </Typography>
                <Typography variant="h6" align="center" textAlign={'center'}>
                    Connect with your friends and family in real-time with our chat app. Stay connected wherever you go!
                </Typography>
            </Container>
        </div>
    )
}

export default ChatHome

