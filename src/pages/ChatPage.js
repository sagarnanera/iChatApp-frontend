import React, { useState, useEffect } from "react";
import { Container, Grid } from "@mui/material";
import Chatlist from "../components/Chatlist";
import ChatBox from "../components/ChatBox";
import ChatHome from "../components/ChatHome";

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
                    <ChatBox chat={selectedChat} isMobile={isMobile} handleBackClicked={handleBackClicked} />
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
                <Grid item xs={12} sm={3}>
                    <Chatlist onChatSelected={handleChatSelected} />
                </Grid>
                <Grid item xs={12} sm={9}>
                    {selectedChat ? (
                        <ChatBox chat={selectedChat} />
                    ) : (
                        <ChatHome />
                    )}
                </Grid>
            </Grid>
        </Container>
    );
}

export default ChatPage;