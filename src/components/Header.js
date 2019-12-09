import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Link from '@material-ui/core/Link';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import useStyles from './Header.styles';

const Header = (props) => {
    const classes = useStyles();

    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = event => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton color="inherit" aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
                    <MenuIcon/>
                    <Menu
                        id="simple-menu"
                        anchorEl={anchorEl}
                        keepMounted
                        open={Boolean(anchorEl)}
                        onClose={handleClose}
                    >
                        {/* <Link underline='none' href='/usereinfo'><MenuItem onClick={handleClose}>Meu Perfil</MenuItem></Link> */}
                        <Link underline='none' href='/regauction'><MenuItem onClick={handleClose}>Cadastrar Leilão</MenuItem></Link>
                        <Link underline='none' href='/transactions'><MenuItem onClick={handleClose}>Transações</MenuItem></Link>
                        {/* <Link underline='none'><MenuItem onClick={handleClose}>Logout</MenuItem></Link> */}
                    </Menu>
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                    <Link href="/" className={classes.link} color='inherit'>
                        Bate o Martelo!
                    </Link>
                </Typography>
                <Button color="inherit" href="/Login">
                    Login
            </Button>
            </Toolbar>
        </AppBar >
    );
};

export default Header;