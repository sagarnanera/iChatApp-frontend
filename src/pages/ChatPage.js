import React, { useState, useEffect } from "react";
import { Container, Grid, Button } from "@mui/material";
import Chatlist from "../components/Chatlist";
import ChatBox from "../components/ChatBox";

const ChatPage = () => {


    const [selectedChat, setSelectedChat] = useState(null);
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 768);
        window.addEventListener("resize", handleResize);
        handleResize();
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    const handleChatSelected = (chat) => {
        setSelectedChat(chat);
    };

    const handleBackClicked = () => {
        setSelectedChat(null);
    };

    if (isMobile) {
        if (selectedChat) {
            return (
                <Container maxWidth={false} disableGutters>
                    {/* <Button onClick={handleBackClicked}>Back</Button> */}
                    <ChatBox chat={selectedChat} handleBackClicked={handleBackClicked} />
                </Container>
            );
        }
        return (
            <Container maxWidth={false}>
                <Chatlist onChatSelected={handleChatSelected} />
            </Container>
        );
    }

    return (
        <Container maxWidth={false} disableGutters>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Chatlist onChatSelected={handleChatSelected} />
                </Grid>
                <Grid item xs={12} sm={8}>
                    {selectedChat ? (
                        <ChatBox chat={selectedChat} />
                    ) : (
                        <h1>This is chat App</h1>
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ChatPage;