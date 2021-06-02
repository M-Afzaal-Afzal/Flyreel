import React from 'react';
import {Box, makeStyles} from "@material-ui/core";

const useStyles = makeStyles(theme => ({
    footer: {
        background: '#000',
        padding: '10vw 6.25vw 11vw 6.25vw',
        display: 'flex',
        justifyContent: 'space-between',
        color: '#fff',
        fontSize: '0.875vw',
        fontFamily: 'Helvetica',
        '@media only screen and (max-width: 800px)': {
            flexWrap: 'wrap',
            fontSize: '2.891566vw',
        }
    },
    column: {
        '@media only screen and (max-width: 800px)': {
            '&:nth-child(5)': {
                marginBottom: '14vw',
            },
            '&:nth-child(2)': {
                order: 3,
            }, '&:nth-child(3)': {
                order: 4,
            }, '&:nth-child(4)': {
                order: 5,
            },
        },
    },
    nav: {
        lineHeight: 2.4375,
        '@media only screen and (max-width: 800px)': {
            width: '45%',
        },
    },
    list: {
        listStyle: "none",
        fontSize: '1rem',
        padding: 0,
        color: '#00B3C6',
    },
    listItem: {
        cursor: 'pointer',
    },
    heading: {
        fontSize: '1rem'
    },
    contactUsButton: {
        ...theme.mainButton,
    },
    contactUsBtnContainer: {
        '@media only screen and (max-width: 800px)': {
            width: '100%',
        },
        // textAlign: 'center',
    }
}))

const Footer = () => {

    const classes = useStyles();

    return (
        <Box className={classes.footer}>
            <Box className={classes.column}>
                <Box>
                    <img src={"https://www.flyreel.co/resources/common/flyreel-logo-white.svg"}
                         alt="Flyreel"
                    />
                </Box>
            </Box>

            <Box className={`${classes.column} ${classes.nav}`}>
                <h3 className={classes.heading}>Product</h3>
                <ul className={classes.list}>
                    <li className={classes.listItem}>
                        Overview <span className="arrow"/>
                    </li>
                    <li className={classes.listItem}>
                        Flyreel for Underwriters
                        <span className="arrow"/>
                    </li>
                    <li className={classes.listItem}>
                        lyreel for Claims
                        <span className="arrow"/>
                    </li>
                    <li className={classes.listItem}>
                        Flyreel for Risk Management
                        <span className="arrow"/>
                    </li>
                </ul>
            </Box>

            <Box className={`${classes.column} ${classes.nav}`}>
                <h3 className={classes.heading}>Product</h3>
                <ul className={classes.list}>
                    <li className={classes.listItem}>
                        Overview <span className="arrow"/>
                    </li>
                    <li className={classes.listItem}>
                        Flyreel for Underwriters
                        <span className="arrow"/>
                    </li>
                    <li className={classes.listItem}>
                        lyreel for Claims
                        <span className="arrow"/>
                    </li>
                    <li className={classes.listItem}>
                        Flyreel for Risk Management
                        <span className="arrow"/>
                    </li>
                </ul>
            </Box>

            <Box className={`${classes.column} ${classes.contactUsBtnContainer}`}>
                <Box className={classes.contactUsButton}>
                    Contact us
                </Box>
            </Box>
        </Box>
    );
};

export default Footer;