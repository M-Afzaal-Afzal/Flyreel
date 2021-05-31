import React, {useState} from 'react';
import {
    AppBar,
    Box,
    Container,
    Divider,
    Hidden,
    IconButton,
    makeStyles, Slide,
    Toolbar,
    Typography,
    useScrollTrigger
} from "@material-ui/core";
import {GiHamburgerMenu} from "react-icons/gi";
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

import Link from '../../src/Link'

function HideOnScroll(props) {
    const {children, window} = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger({target: window ? window() : undefined});

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles(theme => ({
    iconsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",

    },
    logo: {
        width: "75px",
    },
    rightIconsContainer: {
        display: 'flex',
        alignItems: 'center',
    },
    icon: {
        margin: '.5rem',
        color: 'white',
        '&:hover': {
            cursor: "pointer",
        }
    },
    list: {
        width: 250,
    },
    appbarMargin: {
        ...theme.mixins.toolbar,
    },
    drawerImageContainer: {
        position: "relative",
        width: '150px',
        height: '150px',
    },
    drawerLogoItem: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '2rem',
        marginTop: '2rem',
    },
}))


const Header = () => {

    const classes = useStyles();


    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    const toggleDrawer = () => {
        setIsDrawerOpen(!isDrawerOpen);
    }

    return (
        <>
            <HideOnScroll>
                <AppBar color={'primary'}>
                    <Toolbar>
                        <Container disableGutters maxWidth={'lg'}>
                            <Box className={classes.iconsContainer}>

                                {/*    left icons */}
                                <Box component={Link} href={'/'} style={{textDecoration: 'none'}}>
                                    <img className={classes.logo}
                                         src="https://www.flyreel.co/resources/common/flyreel-logo-white.svg"
                                         alt="Flyreel"/>
                                </Box>
                                {/*    right icons*/}

                                <Hidden smDown>

                                    <Box className={classes.rightIconsContainer}>

                                        <Box component={Link} href={'/'} style={{textDecoration: 'none'}}
                                             className={classes.icon}>
                                            Home
                                        </Box>


                                        <Box component={Link} href={'/contact'} style={{textDecoration: 'none'}}
                                             className={classes.icon}>
                                            Contact
                                        </Box>

                                    </Box>

                                </Hidden>

                                <Hidden mdUp>
                                    <IconButton onClick={toggleDrawer} className={classes.icon}>
                                        <GiHamburgerMenu color={'white'} size={30}/>
                                    </IconButton>
                                </Hidden>

                            </Box>
                        </Container>
                    </Toolbar>
                </AppBar>
            </HideOnScroll>
            <Drawer open={isDrawerOpen} onClose={toggleDrawer}>
                <List className={classes.list}>

                    {/* drawer logo */}
                    <ListItemText className={classes.drawerLogoItem} button>
                        <Box>
                            <Typography variant={'h5'}>
                                Logo
                            </Typography>
                        </Box>
                    </ListItemText>

                    <Divider/>

                    <Box>
                        <Box onClick={toggleDrawer}>
                            <ListItem button>
                                <ListItemText primary={'Home'}/>
                            </ListItem>
                        </Box>
                    </Box>
                    <Divider/>


                    <Box>
                        <Box component={Link} href={'/contact'} onClick={toggleDrawer}>
                            <ListItem button>
                                <ListItemText primary={'Contact'}/>
                            </ListItem>
                        </Box>
                    </Box>

                    <Divider/>

                </List>
            </Drawer>

            <Box className={classes.appbarMargin}/>

        </>
    );
};

export default Header;