import React from 'react';
import {Box, Button, makeStyles, TextField, Typography} from "@material-ui/core";
import {useForm, Controller} from "react-hook-form";

const useStyles = makeStyles(theme => ({
    main: {
        height: '70.5vw',
        position: 'relative',
        color: '#fff',

        '@media only screen and (max-width: 800px)': {
            height: 'auto',
            background: '#1E1F27',
            paddingBottom: '32.53012vw',
        },
        '&:before': {
            content: "' '",
            display: 'table',
        },
        '&:after': {
            content: "' '",
            display: 'table',
        },
    },
    right: {
        float: 'right',
        width: '62.5vw',
        height: '100%',
        display: 'flex',
        position: 'relative',
        '@media only screen and (max-width: 800px)': {
            height: 'auto',
            float: 'none',
            width: '100%',
            zIndex: 1,
        },

    },
    formBox: {
        boxShadow: '0 1.6875vw 2.5vw rgb(0 0 0 / 33%)',
        position: 'absolute',
        top: '7.8125vw',
        left: '6.25vw',
        width: '39.375vw',
        padding: '2.5vw 4.375vw',
        background: '#424242',
        zIndex: 2,
        color: '#fff',
        '@media only screen and (max-width: 800px)': {
            zIndex: 2,
            position: 'relative',
            top: 0,
            left: 0,
            width: '90%',
            marginLeft: '5%',
            padding: '12vw 6vw',
            marginTop: '-110vw',
        },
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        height: '100%',
        width: '100%',
        zIndex: 1,
        background: '#1E1F27',
    },
    copy: {
        width: '100%',
        padding: '17.1875vw 0 0 16.9375vw',
        position: 'relative',
        zIndex: 4,
        '@media only screen and (max-width: 800px)': {
            padding: '12vw 6vw',
            paddingBottom: '120vw'
        },
    },
    copyHeading: {
        fontSize: '5.625vw',
        fontFamily: 'Helvetica',
        lineHeight: '1.077778',
        '@media only screen and (max-width: 800px)': {
            fontSize: '13.012048vw',
            lineHeight: 1.074074,
        },
    },
    copyInfo: {
        display: 'flex',
        fontFamily: 'Helvetica',
        fontSize: '0.875vw',
        marginTop: '3.5vw',
        lineHeight: 1.571429,
        '@media only screen and (max-width: 800px)': {
            display: 'block',
            fontSize: '3.373494vw',
            marginTop: '6vw',
            lineHeight: 1.571429,
        },
    },
    copyInfoText: {
        textDecoration: 'none',
        '@media only screen and (max-width: 800px)': {},
    },
    copyInfoLink: {
        color: '#00B3C6',marginLeft: '4rem',
        '@media only screen and (max-width: 800px)': {
            marginLeft: 0
        },
    },
    pattern: {
        position: 'absolute',
        bottom: '14vw',
        left: '-23vw',
        background: 'url(https://www.flyreel.co/resources/common/dot.png) repeat',
        backgroundSize: '1vw',
        height: '21.9375vw',
        width: '33.875vw',
        zIndex: 2,
        '@media only screen and (max-width: 800px)': {},
    },
    multilineColor: {
        color: "white"
    },
    inputFieldLabel: {
        color: "white !important"
    },
    singleInput: {
        margin: '1rem 0',
    }
}))

const Contact = () => {

    const classes = useStyles();

    const { control, handleSubmit, formState: {errors}} = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (
        <Box className={classes.main}>

            <Box className={classes.right}>
                <Box className={classes.background}/>

                <Box className={classes.copy}>

                    <Typography variant={'h1'} className={classes.copyHeading}>
                        Contact Us
                    </Typography>

                    <Box className={classes.copyInfo}>
                        <Box className={classes.copyInfoText}>
                            3000 Lawrence Street
                            <br/>
                            Denver, CO 80205
                        </Box>
                        <Box className={classes.copyInfoLink}>
                            info@flyreel.co
                        </Box>
                    </Box>

                </Box>

                <Box className={classes.pattern}/>

            </Box>

            <Box className={classes.formBox}>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Box className={classes.singleInput}>

                        <Controller
                            name="fullName"
                            control={control}
                            defaultValue=""
                            rules={{required: {value: true,message: 'You must have to specify your name'}}}

                            render={({field}) => (
                                <TextField
                                    size={'small'}
                                    variant={'outlined'}
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    InputLabelProps={{
                                        className: classes.inputFieldLabel
                                    }}
                                    error={!!errors.fullName}

                                    helperText={errors.fullName && errors.fullName.message}
                                    fullWidth={true}
                                    label={'Full Name'}
                                    color={'white'}
                                    {...field}
                                />
                            )}
                        />
                    </Box>

                    <Box className={classes.singleInput}>

                        <Controller
                            name="email"
                            control={control}
                            defaultValue=""
                            rules={{
                                required: {value: true,message: 'You must have to specify email'},
                                pattern: {
                                    value: /^\S+@\S+$/i,
                                    message: 'Please enter a valid email address',
                                }
                            }}
                            render={({field}) => (
                                <TextField
                                    size={'small'}
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    InputLabelProps={{
                                        className: classes.inputFieldLabel
                                    }}
                                    error={!!errors.email}

                                    fullWidth
                                    helperText={errors.email && errors.email.message}
                                    variant={'outlined'}
                                    label={'Email Address'}
                                    color={'white'}
                                    {...field}
                                />
                            )}
                        />
                    </Box>

                    <Box className={`${classes.singleInput} ${classes.singleInputRight}`}>

                        <Controller
                            name="company"
                            control={control}
                            defaultValue=""
                            render={({field}) => (
                                <TextField
                                    size={'small'}
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    InputLabelProps={{
                                        className: classes.inputFieldLabel
                                    }}
                                    error={!!errors.company}

                                    fullWidth
                                    variant={'outlined'}
                                    label={'Company (optional)'}
                                    color={'white'}
                                    {...field}
                                />
                            )}
                        />
                    </Box>

                    <Box className={`${classes.singleInput} ${classes.singleInputRight}`}>

                        <Controller
                            name="phone"
                            control={control}
                            defaultValue=""

                            rules={{
                                required: {value: true,message: 'You must have to specify your phone number'},
                                pattern: {value:  /^[0-9]\d*$/,message: 'Please enter valid phone number'}
                            }}
                            render={({field}) => (
                                <TextField
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    InputLabelProps={{
                                        className: classes.inputFieldLabel
                                    }}
                                    fullWidth

                                    error={!!errors.phone}
                                    helperText={errors.phone && errors.phone.message}
                                    variant={'outlined'}
                                    label={'Phone Number'}
                                    color={'white'}
                                    {...field}
                                />
                            )}
                        />
                    </Box>

                    <Box className={`${classes.singleInput} ${classes.singleInputRight}`}>

                        <Controller
                            name="jobTitle"
                            control={control}
                            defaultValue=""

                            rules={{
                                required: {value: true,message: 'You must have to specify your job title'}
                            }}
                            render={({field}) => (
                                <TextField
                                    size={'small'}
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    InputLabelProps={{
                                        className: classes.inputFieldLabel
                                    }}
                                    fullWidth

                                    error={!!errors.jobTitle}
                                    helperText={errors.jobTitle && errors.jobTitle.message}
                                    variant={'outlined'}
                                    label={'Job Title'}
                                    color={'white'}
                                    {...field}
                                />
                            )}
                        />
                    </Box>

                    <Box className={`${classes.singleInput} ${classes.singleInputRight}`}>

                        <Controller
                            name="message"
                            control={control}
                            defaultValue=""

                            rules={{
                                required: {value: true,message: 'You must have to specify your message'}
                            }}
                            render={({field}) => (
                                <TextField
                                    size={'small'}
                                    InputProps={{
                                        className: classes.multilineColor
                                    }}
                                    InputLabelProps={{
                                        className: classes.inputFieldLabel
                                    }}
                                    fullWidth
                                    multiline
                                    rows={4}
                                    error={!!errors.message}
                                    helperText={errors.message && errors.message.message}
                                    variant={'outlined'}
                                    label={'Your Message'}
                                    color={'white'}
                                    {...field}
                                />
                            )}
                        />
                    </Box>

                    <Box>
                        <Button variant={'contained'} color={'secondary'} fullWidth type={'submit'}>
                            Submit
                        </Button>
                    </Box>

                </form>
            </Box>

        </Box>
    );
};

export default Contact;