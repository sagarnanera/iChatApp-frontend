import React from "react";
// import { makeStyles } from "@material-ui/core/styles";
import { Grid, Typography, Avatar, Box, Tooltip, Icon } from "@mui/material";

import { useTheme } from "@mui/material/styles";

import DoneAllIcon from "@mui/icons-material/DoneAll";
import DoneIcon from "@mui/icons-material/Done";

const chat = {
    name: "John Doe",
    avatar: "",
    message: "Hello, how are you?",
    time: "11:30 AM",
    send: "sent", // or "received"
    doubleTick: true // or false
};

const ChatContainer = ({ message }) => {
    const isSentByCurrentUser = chat.send === "sent";

    const theme = useTheme();

    return (
        <Grid container direction={isSentByCurrentUser ? "row-reverse" : "row"}>
            <Grid item>
                <Tooltip title={chat.name}>
                    <Avatar
                        src={chat.avatar}
                        alt={chat.name}
                        sx={{
                            width: theme.spacing(4),
                            height: theme.spacing(4),
                            marginRight: theme.spacing(1)
                        }}
                    />
                </Tooltip>
            </Grid>
            <Grid item>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        marginBottom: theme.spacing(2)
                    }}
                >
                    <Typography
                        variant="body1"
                        sx={{
                            backgroundColor: "#F3F3F3",
                            padding: theme.spacing(1),
                            borderRadius: "10px",
                            maxWidth: "70%",
                            wordWrap: "break-word"
                        }}
                    >
                        {message}
                    </Typography>
                    <Typography
                        variant="caption"
                        sx={{
                            color: "#BFBFBF",
                            fontSize: "0.8rem",
                            marginTop: theme.spacing(1)
                        }}
                    >
                        {chat.time}
                        {isSentByCurrentUser &&
                            // <SvgIcon
                            //     component={chat.doubleTick ? DoubleTick : SingleTick}
                            //     viewBox="0 0 24 24"
                            //     className={classes.icon}
                            //     sx={{
                            //         width: theme.spacing(1.5),
                            //         height: theme.spacing(1.5),
                            //         marginLeft: theme.spacing(1),
                            //     }}
                            // />
                            <Icon>
                                {chat.doubleTick ? <DoneIcon /> : <DoneAllIcon />}
                            </Icon>}
                    </Typography>
                </Box>
            </Grid>
        </Grid>
    );
};

export default ChatContainer;
