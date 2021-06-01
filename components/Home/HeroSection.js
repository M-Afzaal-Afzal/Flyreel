import React from 'react';
import {Slide} from "react-awesome-reveal";

import {Box, makeStyles, Typography} from "@material-ui/core";
import {motion} from "framer-motion";

const rightVariants = {
    hidden: {
        x: '100%',
    },
    visible: {
        x: 0,
        transition: {
            type: 'tween',
            duration: 1,
        }
    }
}

const useStyles = makeStyles(theme => ({
    heroSection: {
        height: '62.5vw',
        position: 'relative',
        '@media only screen and (max-width: 800px)': {
            height: 'auto',
        },

        // background: #fff;
        width: '100%',
        color: '#fff',
        background: '#fff',
        '&:before': {
            content: "' '",
            display: 'table',
        }
        // display: 'grid',
        // gridTemplateColumns: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        // gridTemplateRows: '1fr 1fr 1fr 1fr 1fr 1fr 1fr 1fr',
        // [theme.breakpoints.down('sm')]: {
        //     gridTemplateColumns: '1fr',
        //     gridTemplateRows: '1fr 1fr',
        // }
    },
    left: {
        // gridArea: 'left',
        background: 'blue',
        position: 'absolute',
        width: '52.5vw',
        height: '45vw',
        top: '50%',
        marginTop: '-22.5vw',
        zIndex: 3,
        verticalAlign: 'baseline',
        '@media only screen and (max-width: 800px)': {
            position: 'relative',
            ...theme.mixins.toolbar,
            width: '100%',
            paddingTop: '85.7143%',
        },
        '&:before': {
            content: "' '",
            display: 'table',
        }
    },
    right: {
        // gridArea: "right",
        // background: theme.palette.primary.main,
        float: 'right',
        width: '62.5vw',
        height: '100%',
        display: 'flex',
        position: 'relative',
        '@media only screen and (max-width: 800px)': {
            float: 'none',
            width: '100%',
            // padding: '12vw 6vw',
        },
        '&:after': {
            content: "' '",
            display: 'table',
        }
        // float: none;
        // width: 100%;
        // padding: 12vw 6vw;

        // gridColumn: '4/-1',
        // gridRow: '1/-1',
        // [theme.breakpoints.down('sm')]: {
        //     gridTemplateColumns: 'auto',
        //     gridTemplateRows: 'auto',
        // }
    },
    copy: {
        alignSelf: "center",
        padding: "0 4.8125vw 0 12.125vw",
        position: 'relative',
        zIndex: 4,
        '@media only screen and (max-width: 800px)': {
            padding: 0,
        }
    },
    preHeading: {
        textTransform: 'uppercase',
        fontSize: "0.875vw",
        fontSmooth: '1rem',
        color: "#797E8A",
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontFamily: 'Share Tech Mono, monospace',
        letterSpacing: '.075em',
        marginBottom: '1.4375vw',
//         text-transform: uppercase;
// font-size: 0.875vw;
// color: #797E8A;
// white-space: nowrap;
// overflow: hidden;
// font-family: 'Share Tech Mono', monospace;
// letter-spacing: 0.075em;
// margin-bottom: 1.4375vw;
    },
    copyHeading: {
        fontSize: '5.625vw',
        fontFamily: 'Gilroy-Medium',
        lineHeight: '1.077778',
        '@media only screen and (max-width: 800px)': {
            fontSize: "5.625vw",
            fontFamily: 'Gilroy-Medium',
            lineHeight: '1.077778',
        }

    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        background: '#000',
    },
    pattern: {
        bottom: "3.625vw",
        left: "8.1875vw",
        height: '21.9375vw',
        width: '15.875vw',
        zIndex: 2,
        position: 'absolute',
        background: 'url(https://www.flyreel.co/resources/common/dot.png)',
        backgroundSize: '.88vw',

    },
    contactUsButton: {
       ...theme.mainButton,

    }

}))

const HeroSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.heroSection}>
            {/*  Left Section*/}
            <Slide delay={700} triggerOnce={true} direction={'left'} className={classes.left}>
                <Box>
                    a
                </Box>
            </Slide>

            {/* Right Section*/}

            <Box className={classes.right}>

                    <Box component={motion.div}
                         variants={rightVariants}
                         initial={'hidden'}
                         animate={'visible'} className={classes.background}/>
                    <Box component={motion.div}
                         variants={rightVariants}
                         initial={'hidden'}
                         animate={'visible'} className={classes.copy}>
                        <Typography variant={'h4'} className={classes.preHeading}>
                            Introducing
                        </Typography>

                        <Typography className={classes.copyHeading} variant={'h1'}>
                            Total property understanding for better insurance outcomes
                        </Typography>

                        <Box className={classes.contactUsButton}>
                            Contact us
                        </Box>

                    </Box>
                    <Box className={classes.pattern}/>

            </Box>

        </Box>
    );
};

export default HeroSection;