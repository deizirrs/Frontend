import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from '@material-ui/core';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import './Navbar.css';

function Navbar() {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = (open: any) => (event: any) => {
        if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }

        setIsDrawerOpen(open);
    };

    return (
        <>
            <AppBar position="static" style={{ backgroundColor: '#ffb3c6' }}>
                <Toolbar variant="dense">
                    <img src="src/assets/images/logo_ufa_sem_fundo.png" alt="Logo ufa" width="100px" height="100px" />
                        <Box marginLeft="auto">
                            <IconButton
                                edge="end"
                                color="inherit"
                                aria-label="menu"
                                onClick={toggleDrawer(true)}
                            >
                                <MenuIcon />
                            </IconButton>
                            <Drawer
                                anchor="right"
                                open={isDrawerOpen}
                                onClose={toggleDrawer(false)}
                            >
                                <List>
                                    <Link to="/home" className="text-decorator-none">
                                        <ListItem button>
                                            <ListItemText primary="Home" />
                                        </ListItem>
                                    </Link>
                                    <ListItem button>
                                        <ListItemText primary="Criar Postagem" />
                                    </ListItem>
                                    <Link to="/sobre" className="text-decorator-none">
                                        <ListItem button>
                                            <ListItemText primary="Sobre" />
                                        </ListItem>
                                    </Link>
                                    <ListItem button>
                                        <ListItemText primary="Postagens" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Temas" />
                                    </ListItem>
                                    <ListItem button>
                                        <ListItemText primary="Cadastrar Temas" />
                                    </ListItem>
                                    <Link to="/login" className="text-decorator-none">
                                        <ListItem button>
                                            <ListItemText primary="Logout" />
                                        </ListItem>
                                    </Link>
                                </List>
                            </Drawer>
                        </Box>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;
