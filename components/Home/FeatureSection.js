import React from 'react';

import * as styles from './FeatureSection.module.css'
import {Box} from "@material-ui/core";

const FeatureSection = () => {
    return (
        <Box className={`${styles.feature} ${styles.feature1} ${styles.revealed}`} data-ref="chatAnimation">
            <Box className={`${styles.inner}`} >
                <Box className={`${styles.illustration}`} >
                    <Box className={`${styles.phone}`} >
                        <Box className={`${styles.viewport}`} >
                            <Box className={`${styles.title}`} >Your Inspection</Box>
                            <Box className={`${styles.messages}`} >
                                <Box className={`${styles.message}`} >
                                    <Box className={`${styles.msgIcon}`} />
                                    <Box className={styles.msgBox}>
                                        I'm going to turn on your camera. Please pan across your kitchen from left to
                                        right.
                                    </Box>
                                </Box>
                                <Box className={`${styles.message}  ${styles.messageMargin}`} >
                                    <img className={styles.messageImg} src="https://www.flyreel.co/resources/home/msg-photo.jpg"
                                         alt="Photo of a kitchen"/>
                                </Box>
                                <Box className={`${styles.message} ${styles.messageMargin}`}>
                                    <Box className={`${styles.msgIcon}`} />
                                    <Box className={`${styles.msgBox}`} >
                                        Great job. Are those quartz countertops?
                                    </Box>
                                </Box>
                                <Box className={`${styles.message} ${styles.messageMargin} ${styles.you}`} >
                                    <Box className={`${styles.msgBox}`}>
                                        Yes.
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box className={`${styles.copyBlock}`} >
                    <Box className={`${styles.preHeading}`} >
                        <Box className={`${styles.iconContainer}`} >
                            <Box className={`${styles.icon}`}/>
                        </Box>
                        <Box className={`${styles.text}`} >FR.01 / CONVERSATIONAL AI ASSISTANT</Box>
                    </Box>
                    <h1>It all starts with a simple AI-powered conversation.</h1>
                    <p>Our friendly and intuitive AI assistant guides users through fully configurable workflows for
                        self-service inspections and claims.</p>
                </Box>
            </Box>
        </Box>
);
};

export default FeatureSection;