import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import {keyframes} from "@emotion/react";
import Reveal from "react-awesome-reveal";

const useStyles = makeStyles(theme => ({
    overlay: {
        position: 'relative',
        top: 0,
        // color: 'white',
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 3,
        background: 'rgba(10,5,43,.79)',
        display: 'flex',
        justifyContent: 'space-around',
        minHeight: '100vh',
        padding: '12vw 6vw',
    },
    copyBlock: {
        alignSelf: 'center',
        width: '62.5vw',
        // height: '23vw',
        position: 'relative',
        '@media only screen and (max-width: 800px)': {
            width: '100%',
            height: 'auto',
        }
    },
    preHeading: {
        marginBottom: '1.5625vw',
        display: 'flex',
        '@media only screen and (max-width: 800px)': {
            marginBottom: '9.638554vw',
        }
    },
    iconContainer: {
        height: '3.375vw',
        width: '3.375vw',
        backgroundSize: '100%',
        position: 'relative',
        backgroundImage: 'url(https://www.flyreel.co/resources/home/dotted-square-feature2@2x.png)',
        flexShrink: 0,
        '@media only screen and (max-width: 800px)': {
            height: '10.628019vw',
            width: '10.628019vw',
        }


    },
    icon: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        backgroundSize: '100%',
        backgroundImage: ' url(https://www.flyreel.co/resources/home/icon-feature-2.png)',
    },
    preHeadingText: {
        height: "3.375vw",
        lineHeight: '3.375vw',
        textTransform: 'uppercase',
        fontSize: '0.875vw',
        color: '#797E8A',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        fontFamily: 'Share Tech Mono, monospace',
        marginLeft: '5.542169vw',
        letterSpacing: '0.075em',
        '@media only screen and (max-width: 800px)': {
            height: '10.628019vw',
            lineHeight: '10.628019vw',
            textTransform: 'uppercase',
            fontSize: '3.373494vw',
        }
    },
    heading: {
        fontSize: '4vw',
        lineHeight: '1.203125',
        fontFamily: 'Helvetica,sans-serif',
        '@media only screen and (max-width: 800px)': {
            paddingRight: "6vw",
            fontSize: "7.246377vw",
            lineHeight: 1.2,
        }
    },
    title: {
        // color: "white",
        fontSize: '4vw',
        lineHeight: '1.203125',
        fontFamily: 'Helvetica, sans-serif',
        '@media only screen and (max-width: 800px)': {
            fontSize: '7.246377vw',
            lineHeight: '1.366667',
        }
    },
    copy: {
        fontSize: '1rem',
        lineHeight: '1.882353',
        marginTop: '2vw',
        // maxWidth: '30vw',
        // color: 'white',
        '@media only screen and (max-width: 800px)': {
            fontSize: '3.855422vw',
            lineHeight: '1.75',
            maxWidth: 'none',
            marginTop: '12vw',
        }

    }
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

const FeatureUniversalSection = ({bottomText,color, iconUrl,preHeadingText,heading,bgColor}) => {

    const classes = useStyles();

    return (
        <Box style={{background: bgColor,color: color}} className={classes.overlay}>
            <Box className={classes.copyBlock}>
                <Reveal keyframes={customAnimation} cascade triggerOnce>

                    <Box className={classes.preHeading}>
                        <Box className={classes.iconContainer}>
                            <Box style={{
                                backgroundImage: `url(${iconUrl}`,
                            }} className={classes.icon}/>
                        </Box>

                        <Typography variant={'body1'} className={classes.preHeadingText}>
                            {preHeadingText}
                        </Typography>

                    </Box>

                    <Typography variant={'h1'} className={classes.title}>
                        {heading}
                    </Typography>

                    <Typography variant={'body1'} className={classes.copy}>
                        {bottomText}
                    </Typography>
                </Reveal>
            </Box>
        </Box>
    );
};

export default FeatureUniversalSection;