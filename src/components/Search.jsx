import React, { useState } from 'react';
import axios from 'axios';
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from '@mui/material/IconButton';
import Badge from "@mui/material/Badge";
import MailIcon from '@mui/icons-material/Mail';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';

const SearchComponent = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');

    const axiosInstance = axios.create({
        withCredentials: true,
      });

    const handleSearch = async (event) => {
        setSearchTerm(event.target.value);
        if (event.target.value.length < 1) {
            setResults([]);
            return;
        }
        setLoading(true);
        setError(''); 
        try {
            const response = await axiosInstance.get(`/api/animalandveterinary/event.json?search=${event.target.value}`);
            setResults(response.data.results); 
        } catch (error) {
            console.error('Error fetching data: ', error);
            setError(error.message || 'Something went wrong while fetching data');
        } finally {
            setLoading(false);
        }
    };

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
                        sx={{
                            position: 'relative',
                            borderRadius: 1,
                            backgroundColor: 'rgba(255, 255, 255, 0.15)',
                            '&:hover': {
                                backgroundColor: 'rgba(255, 255, 255, 0.25)',
                            },
                            marginLeft: 0,
                            width: '100%',
                            '@media (min-width:600px)': {
                                marginLeft: 1,
                                width: 'auto',
                            },
                        }}
                    >
                        <Box
                            sx={{
                                padding: '0 16px',
                                height: '100%',
                                position: 'absolute',
                                pointerEvents: 'none',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <SearchIcon />
                        </Box>
                        <InputBase
                            placeholder="Buscar…"
                            value={searchTerm}
                            onChange={handleSearch}
                            sx={{
                                color: 'inherit',
                                padding: '8px 8px 8px 0',
                                paddingLeft: 'calc(1em + 32px)',
                                transition: 'width 0.3s',
                                width: '100%',
                                '@media (min-width:960px)': {
                                    width: '20ch',
                                },
                            }}
                            inputProps={{ 'aria-label': 'buscar' }}
                        />
                    </Box>
                </Toolbar>
            </AppBar>
            {loading ? (
                <Box display="flex" justifyContent="center" mt={2}>
                    <CircularProgress />
                </Box>
            ) : error ? (
                <Typography color="error" align="center" mt={2}>
                    {error}
                </Typography>
            ) : (
                <List>
                    {results.map((result, index) => (
                        <ListItem key={index}>
                            <ListItemText primary={result.original_receive_date}  /> 
                            </ListItem>
                    ))}
                </List>
            )}
        </Box>
    );
};

export default SearchComponent;
