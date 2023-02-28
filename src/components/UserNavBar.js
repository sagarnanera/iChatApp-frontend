import React from 'react';
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import { Avatar, Divider } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CallIcon from '@mui/icons-material/Call';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';

// imgs

import userDP from '../assets/imgs/userDP.png'
import groupDP from '../assets/imgs/groupDP.png'

const ChatUserBar = ({ chat, handleBackClicked }) => {

    const [anchorEl, setAnchorEl] = useState(null);


    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ flexGrow: 1 }} >
            <AppBar position="static" sx={{ bgcolor: 'transparent', color: 'black' }}>
                <Toolbar>
                    <div>
                        <IconButton onClick={handleBackClicked} >
                            <ArrowBackIcon />
                        </IconButton>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleMenu}
                            color="inherit"
                        >
                            {/* <AccountCircle /> */}
                            <Avatar alt='userDP' src={chat.pic ? chat.pic : chat.isGroup ? groupDP : userDP} />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'right',
                            }}
                            open={Boolean(anchorEl)}
                            onClose={handleClose}
                        >
                            <MenuItem onClick={handleClose}>Profile</MenuItem>
                            <MenuItem onClick={handleClose}>My account</MenuItem>
                        </Menu>
                    </div>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        {chat.name}
                    </Typography>
                    <IconButton>
                        <CallIcon />
                    </IconButton>
                    <Divider orientation="vertical" flexItem />
                    <IconButton>
                        <SearchOutlinedIcon />
                    </IconButton>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default ChatUserBar;