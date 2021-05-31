import React from 'react';

import {Box} from "@material-ui/core";

import * as styles from './HeroSection.module.css';

const HeroSection = () => {


    return (
        <Box className={`${styles.hero} ${styles.revealed}`}>
            <Box className={styles.left}>
                <Box className={styles.roomViewer}>
                    test
                </Box>
            </Box>

            <Box className={styles.right}>
                <div className={styles.background}/>
                <div className={styles.copy}>
                    <div className={styles.preHeading}>Introducing</div>
                    <h1>Total property understanding for better insurance outcomes</h1>
                    <Box className={styles.button}>
                        Request Demo
                        <span className={styles.arrow}/>
                    </Box>

                </div>
                <div className={styles.pattern}/>
            </Box>

        </Box>
    );
};

export default HeroSection;