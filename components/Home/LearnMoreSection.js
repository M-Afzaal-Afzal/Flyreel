import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import Link from 'next/link';
import {keyframes} from "@emotion/react";
import Reveal from "react-awesome-reveal";

const useStyles = makeStyles(theme => ({
    learnMore: {
        padding: '6.25vw',
        paddingTop: '11.8125vw',
        paddingBottom: '15.625vw',
        color: '#fff',
        background: '#fff',
        '@media only screen and (max-width: 800px)': {
            padding: '0 0 80vw 0',
            background: '#000',
        }
    },
    inner: {
        background: '#000',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: '41.125vw',
        '@media only screen and (max-width: 800px)': {
            height: 'auto',
            padding: '39.759036vw 6vw 61.927711vw 6vw',
            flexWrap: 'wrap',
        }

    },
    illustration: {
        height: '100%',
        width: '40vw',
        position: 'relative',
        '@media only screen and (max-width: 800px)': {
            order: 2,
            width: '100%',
            marginTop: "29.638554vw",
            marginBottom: '-29.638554vw',
        }

    },
    phone: {
        position: 'absolute',
        top: '-13%',
        left: 0,
        width: '30.75vw',
        height: '56.1875vw',
        background: ' url(https://www.flyreel.co/resources/home/phone-final.png)',
        backgroundSize: '100%',
        backgroundRepeat: 'no-repeat',
        zIndex: 2,

        '@media only screen and (max-width: 800px)': {
            width: '51.325301vw',
            height: '100.481928vw',
        }

    },
    pattern: {
        position: 'absolute',
        background: 'url(https://www.flyreel.co/resources/common/dot.png) repeat',
        backgroundSize: '0.88vw',
        zIndex: 1,
        '@media only screen and (max-width: 800px)': {
            top: '-13vw',
            left: '28vw',
            width: '61.204819vw',
            height: '84.578313vw',
            backgroundSize: '3.4vw',
        }
    },
    copyBlock: {
        width: '43.75vw',
        '@media only screen and (max-width: 800px)': {
            order: 1,
            width: '100%',
        }
    },
    copyBlockHeading: {
        fontSize: '4vw',
        lineHeight: 1.203125,
        fontFamily: 'Helvetica',
        '@media only screen and (max-width: 800px)': {
            fontSize: '10.843373vw',
            lineHeight: 1.111111,
            maxWidth: 'none',
        }

    },
    contactUsButton: {
        ...theme.mainButton,
    },
}))

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-50px);
  }

  to {
    animation-delay: 1s;
    opacity: 1;
    transform: translateY(0);
  }`;

const LearnMoreSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.learnMore}>
            <Box className={classes.inner}>
                <Box className={classes.illustration}>
                    <Box className={classes.phone}/>
                    <Box className={classes.pattern}/>
                </Box>
                <Box className={classes.copyBlock}>
                    <Reveal keyframes={customAnimation} cascade triggerOnce>
                        <Typography variant={'h1'} className={classes.copyBlockHeading}>
                            Learn more and see Flyreel in action today
                        </Typography>
                        <Link href={'/contact'}>
                            <a className={classes.contactUsButton}>
                                Contact Us
                            </a>
                        </Link>
                    </Reveal>
                </Box>
            </Box>
        </Box>
    );
};

export default LearnMoreSection;