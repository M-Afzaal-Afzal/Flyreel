import React from 'react';
import {Box, Divider, makeStyles, Typography} from "@material-ui/core";
import Link from 'next/link'
import {keyframes} from "@emotion/react";
import Reveal from "react-awesome-reveal";

const useStyles = makeStyles(theme => ({
    textWithImage: {
        background: '#000',
        color: "white",
        display: 'grid',
        padding: '12vw 6vw',
        gridTemplateColumns: '1fr 1fr',
        gridTemplateAreas: `
            "left right"
        `,
        '@media only screen and (max-width: 800px)': {
            gridTemplateColumns: '1fr',
            gridTemplateAreas: `
            "right"
            "left"
        `,
        }
    },
    left: {
        gridArea: 'left',
        '@media only screen and (max-width: 800px)': {
            // gridArea: 'none',
        }
    },
    right: {
        gridArea: 'right',
        padding: '1rem',
        '@media only screen and (max-width: 800px)': {
            '@media only screen and (max-width: 800px)': {
                marginBottom: "2rem",
            }
        }
    },
    img: {
        width: "100%",
        height: "auto",
    },
    heading: {
        fontSize: '5.625vw',
        lineHeight: 1.077778,
        fontFamily: 'Helvetica',
        marginBottom: '2.5vw',
        '@media only screen and (max-width: 800px)': {
            fontSize: '13.04347vw',
            lineHeight: 1.074074,
            marginBottom: '6vw',
        }
    },
    paragraph: {
        fontSize: '1rem',
        lineHeight: '1.533333',
        // paddingBottom: '1.5625vw',
        // maxWidth: '25.5vw',
        '@media only screen and (max-width: 800px)': {
            maxWidth: 'none',
            fontSize: '3.855422vw',
            lineHeight: '1.75',
            // paddingBottom: '6vw',
        }
    },
    divider: {
        margin: '2rem 0',
        background: 'white',
    },
    contactButton: {
        ...theme.mainButton,
        textDecoration: 'none',
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

const TextWithImage = ({heading, p1, p2, p3, imagUrl}) => {

    const classes = useStyles();

    return (
        <Box className={classes.textWithImage}>

            <Box className={classes.left}>
                <Reveal keyframes={customAnimation} cascade triggerOnce>

                    <Typography variant={'h1'} className={classes.heading}>
                        {heading}
                    </Typography>

                    <Typography className={classes.paragraph}>
                        {p1}
                        <Divider className={classes.divider}/>
                    </Typography>

                    <Typography className={classes.paragraph}>
                        {p2}
                        <Divider className={classes.divider}/>
                    </Typography>

                    <Typography className={classes.paragraph}>
                        {p3}
                        {/*<Divider className={classes.divider}/>*/}
                    </Typography>

                    <Link href={'/contact'}>
                        <a className={classes.contactButton}>
                            Contact Us
                        </a>
                    </Link>
                </Reveal>

            </Box>

            <Box className={classes.right}>
                <img alt={'feature image'} className={classes.img} src={imagUrl}/>
            </Box>


        </Box>
    );
};

export default TextWithImage;