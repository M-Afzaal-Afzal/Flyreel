import React from 'react';
import {Box, makeStyles, Typography} from "@material-ui/core";
import Reveal from "react-awesome-reveal";
import {keyframes} from "@emotion/react";

const useStyles = makeStyles(theme => ({
    featureSection: {
        padding: "6.25vw",
        paddingTop: '12.5vw',
        paddingBottom: ' 12.5vw',
        background: 'white',
        '@media only screen and (max-width: 800px)': {
            paddingLeft: '6vw',
            paddingRight: '0',
        }
    },
    inner: {
        display: 'flex',
        justifyContent: 'space-between',
        '@media only screen and (max-width: 800px)': {
            flexWrap: 'wrap',
            alignItems: 'flex-start',
            paddingRight: '0',
        },
    },
    illustration: {
        order: 1,
        '@media only screen and (max-width: 800px)': {
            width: "100%",
        },
    },
    copyBlock: {
        width: '36.4375vw',
        order: 0,
        marginTop: '-8vw',
        alignSelf: 'center',
        '@media only screen and (max-width: 800px)': {
            width: "100%",
            marginTop: 0,
        },
    },
    phone: {
        height: '63.3125vw',
        width: '44.3125vw',
        background: 'url(https://www.flyreel.co/resources/home/phone-white@2x.png) no-repeat',
        backgroundSize: '100%',
        position: 'relative',
        '@media only screen and (max-width: 800px)': {
            height: "120.3125vw",
            width: "100%",
            backgroundSize: 'auto 100%',
            marginTop: '6vw',
        }
    },
    viewport: {
        position: 'absolute',
        top: '6.2vw',
        left: '11.2vw',
        width: ' 23vw',
        height: ' 48vw',
        '@media only screen and (max-width: 800px)': {
            top: '9vw',
            left: '23.2vw',
            width: '40vw',
            height: '62vw',
        }
    },
    title: {
        textAlign: ' center',
        marginTop: '2vw',
        fontSize: '1.125vw',
        fontFamily: 'Helvetica,sans-serif',
        '@media only screen and (max-width: 800px)': {
            marginTop: '6vw',
            fontSize: '3.375vw',
        }
    },
    messages: {
        padding: '1.25vw',
        marginTop: '2vw',
        '@media only screen and (max-width: 800px)': {
            padding: '1.25vw',
            marginTop: '4vw'
        }
    },
    messageUniversal: {
        display: 'flex',
        // opacity: 0,
        alignItems: 'flex-start',
    },
    messageIcon: {
        height: '3.25vw',
        width: "3.25vw",
        background: 'url(https://www.flyreel.co/resources/home/flyreel-msg-icon@2x.png) no-repeat bottom',
        backgroundSize: '100%',
        marginRight: '0.5vw',
        alignSelf: 'flex-end',
        flexShrink: 0,

        '@media only screen and (max-width: 800px)': {
            height: "6.038647vw",
            width: '6.038647vw',
            marginRight: "1.5vw"
        }

    },
    messageBox: {
        background: "#00B3C6",
        padding: '1vw 1.25vw',
        borderRadius: '1vw',
        fontSize: '1vw',
        color: '#fff',
        lineHeight: '1.1875',
        fontFamily: 'Helvetica,sans-serif',
        position: 'relative',
        '@media only screen and (max-width: 800px)': {
            padding: "1.690821vw 2.898551vw",
            borderRadius: '2vw',
            fontSize: '1.78744vw',
            lineHeight: '1.1875',
        }
    },
    messageOne: {},
    messageMargin: {
        marginTop: '1.25vw',
        '@media only screen and (max-width: 800px)': {
            marginTop: '2.25vw',
        }

    },
    messageImage: {
        maxWidth: "100%",
        display: 'block',
    },
    messageThree: {},
    messageYou: {
        justifyContent: "flex-end",
    },
    yourMessage: {
        background: '#AFB6C1',
    },
    preHeading: {
        marginBottom: "1.5625vw",
        display: 'flex',
        '@media only screen and (max-width: 800px)': {
            marginBottom: '9.638554vw'
        }
    },
    iconContainer: {
        height: '3.375vw',
        width: '3.375vw',
        backgroundSize: '100%',
        position: 'relative',
        backgroundImage: 'url(https://www.flyreel.co/resources/home/dotted-square@2x.png)',
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
        backgroundImage: ' url(https://www.flyreel.co/resources/home/icon-feature-1.png)',
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
}))

const customAnimation = keyframes`
  from {
    opacity: 0;
    transform: translateY(-100px);
  }

  to {
    animation-delay: 1s;
    opacity: 1;
    transform: translateY(0);
  }`;

const FeatureSection = () => {

    const classes = useStyles();

    return (
        <Box className={classes.featureSection}>
            <Box className={classes.inner}>

                <Box className={classes.illustration}>
                    <Box className={classes.phone}>
                        <Box className={classes.viewport}>
                            <Box className={classes.title}>
                                Your Inspection
                            </Box>
                            <Box className={classes.messages}>

                                <Reveal  keyframes={customAnimation} direction={'down'} cascade triggerOnce>
                                    {/* first message*/}
                                    <Box className={`${classes.messageUniversal}`}>
                                        <Box className={classes.messageIcon}/>
                                        <Box className={classes.messageBox}>
                                            I'm going to turn on your camera. Please pan across your kitchen from left
                                            to right.
                                        </Box>
                                    </Box>

                                    {/* second message*/}
                                    <Box className={`${classes.messageUniversal} ${classes.messageMargin}`}>
                                        <img className={classes.messageImage}
                                             src="https://www.flyreel.co/resources/home/msg-photo.jpg"
                                            // srcSet="https://www.flyreel.co/resources/home/msg-photo@2x.jpg"
                                             alt="Photo of a kitchen"/>
                                    </Box>

                                    {/* 3rd message*/}
                                    <Box
                                        className={`${classes.messageYou} ${classes.messageUniversal} ${classes.messageMargin}`}>
                                        <Box className={classes.messageIcon}/>
                                        <Box className={classes.messageBox}>
                                            Great job. Are those quartz countertops?
                                        </Box>
                                    </Box>

                                    {/* 4th message*/}
                                    <Box className={`${classes.messageUniversal} ${classes.messageYou} ${classes.messageMargin}`}>
                                        <Box className={`${classes.messageBox} ${classes.yourMessage}`}>
                                            Yes
                                        </Box>
                                    </Box>

                                </Reveal>
                            </Box>
                        </Box>
                    </Box>
                </Box>

                <Box className={classes.copyBlock}>
                    <Reveal triggerOnce cascade keyframes={customAnimation}>

                        <Box className={classes.preHeading}>
                            <Box className={classes.iconContainer}>
                                <Box className={classes.icon}/>
                            </Box>
                            <Box className={classes.preHeadingText}>
                                FR.01 / CONVERSATIONAL AI ASSISTANT
                            </Box>
                        </Box>
                        <Typography variant={'h1'} className={classes.heading}>
                            It all starts with a simple AI-powered conversation.
                        </Typography>
                        <Typography variant={'body1'}>
                            Our friendly and intuitive AI assistant guides users through fully configurable workflows
                            for
                            self-service inspections and claims.
                        </Typography>
                    </Reveal>
                </Box>

            </Box>
        </Box>
    );
};

export default FeatureSection;