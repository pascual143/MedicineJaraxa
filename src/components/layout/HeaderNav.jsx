import React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import Badge from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { alpha } from '@mui/material/styles';

const HeaderNav = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <IconButton size="large" aria-label="show 4 new mails" color="inherit">
                        <Badge badgeContent={4} color="error">
                            <MailIcon />
                        </Badge>
                    </IconButton>
                    <Box
                        sx={(theme) => ({
                            position: 'relative',
                            borderRadius: theme.shape.borderRadius,
                            backgroundColor: alpha(theme.palette.common.white, 0.15),
                            '&:hover': {
                                backgroundColor: alpha(theme.palette.common.white, 0.25),
                            },
                            marginLeft: 0,
                            width: '100%',
                            [theme.breakpoints.up('sm')]: {
                                marginLeft: theme.spacing(1),
                                width: 'auto',
                            },
                        })}
                    >
                        <Box
                            sx={(theme) => ({
                                padding: theme.spacing(0, 2),
                                height: '100%',
                                position: 'absolute',
                                pointerEvents: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            })}
                        >
                            <SearchIcon />
                        </Box>
                        <InputBase
                            placeholder="Buscar…"
                            sx={(theme) => ({
                                color: 'inherit',
                                padding: theme.spacing(1, 1, 1, 0),
                                paddingLeft: `calc(1em + ${theme.spacing(4)})`,
                                transition: theme.transitions.create('width'),
                                width: '100%',
                                [theme.breakpoints.up('md')]: {
                                    width: '20ch',
                                },
                            })}
                            inputProps={{ 'aria-label': 'buscar' }}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
};

export default HeaderNav;
