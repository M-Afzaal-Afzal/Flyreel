import React from 'react';
import {Slide} from "react-awesome-reveal";

import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    heroSection: {
        height: '45rem ',
        width: '100%',
        color: '#fff',
        background: '#fff',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        [theme.breakpoints.down('sm')]: {
            gridTemplateColumns: '1fr',
            gridTemplateRows: '1fr 1fr',
        }
    },
    left: {
        // gridArea: 'left',
        background: 'blue',
        gridColumn: '1/5',
        gridRow: '2/8',
        zIndex: '20',
        [theme.breakpoints.down('sm')]: {
            gridColumn: '1/-1',
            gridRow: '2/3',
        }
    },
    right: {
        // gridArea: "right",
        background: theme.palette.primary.main,
        gridColumn: '4/-1',
        gridRow: '1/-1',
        [theme.breakpoints.down('sm')]: {
            gridColumn: '1/-1',
            gridRow: '1/2',
        }
    }

}))

const HeroSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.heroSection}>
            {/*  Left Section*/}
            <Slide delay={700} triggerOnce direction={'left'} className={classes.left}>
                <Box  >
                    a
                </Box>
            </Slide>

            {/* Right Section*/}

            <Slide direction={'right'} triggerOnce className={classes.right}>
                <Box >
                    a
                </Box>
            </Slide>

        </Box>
    );
};

export default HeroSection;