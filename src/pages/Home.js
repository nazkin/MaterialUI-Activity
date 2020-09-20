import React from 'react'
import Lottie from 'react-lottie'
import heroAnimation from '../animations/landinganimation/data'
import { makeStyles } from '@material-ui/styles'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import WebIcon from '../images/web-browser.png'
import MobileIcon from '../images/smartphone.png'
import SoftwareIcon from '../images/testing.png'
import Background from '../images/background.jpg'


const useStyles = makeStyles(theme => ({
    hero: {
        margin: 0,
        backgroundColor: theme.palette.common.mainBlue
    },
    heroText:{
        textAlign: "center",
        textTransform: "uppercase"
       
    },
    heroAnimation:{
        paddingTop: "5em",
        [theme.breakpoints.down('md')]: {
            paddingLeft: "0px",
            paddingTop: "2em",
        }
    },
    anime: {
        minWidth: "20em",
        maxWidth: "50em",
        marginTop: "2em",
        marginLeft: "10%",
        [theme.breakpoints.down('sm')]: {
            maxWidth: "30em",
            marginTop: "3em"
        }
    },
    services:{
        backgroundColor: theme.palette.common.mainBlue,
        paddingBottom: "3rem",
    },
    serviceContainer:{
        marginTop: "3rem",
        paddingLeft: "3rem",
        paddingTop: "2rem",
        display: "flex",
        backgroundColor: "whitesmoke",
        flexDirection: "row",
        justifyContent: "flex-start",
        [theme.breakpoints.down('sm')]: {
            textAlign: "center",
            justifyContent: "center",
            paddingLeft: "0px",
        }
    },
    icon: {
        height: "18em",
        marginLeft: "5rem",
        color: "darkorange",
        [theme.breakpoints.down('sm')]: {
            margin: "0px"
        }
    },
    iconVtwo: {
        height: "18em",
        marginLeft: "5rem",
        color: "purple",
        [theme.breakpoints.down('sm')]: {
            margin: "0px"
        }
    },
    viewBtn:{
        marginRight: "1rem",
        color: "purple",
        fontSize: "1rem",
        textTransform: "none",
        boxShadow: "1px 1.5px 1.5px 1px purple",
        margin: "1em"
    },
    callToAction:{
        backgroundImage: `url(${Background})`,
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: "40em",
        textAlign: "center"
    },
    ctaText: {
        color: "white"
    },
    contactBtn:{
        height: "60px",
        padding: "20px",
        backgroundColor: "#003B00",
        color: "whitesmoke",
        border: "3px solid #008F11",
        textTransform: "none",
        fontSize: "1rem",
        "&:hover": {
            backgroundColor: "#008F11",
            color: "silver",
        }
    }
}))

const Home = () => {
    const classes = useStyles()

    const defaultOptions = {
        loop: true,
        autoplay: true, 
        animationData: heroAnimation,
        rendererSettings: {
          preserveAspectRatio: 'xMidYMid slice'
        }
      };

    return(
        <Grid container direction="column">
    {/* hero section  */}
            <Grid item className={classes.hero}>
                <Grid container direction="row" justify="center" alignItems="center">
                    <Grid md={6} item className={classes.heroText} >
                        <Typography variant="h1">Sharp, simple and effective development<br /></Typography>
                        <Typography variant="h4"> byNaz <br/></Typography>
                    </Grid>
                    <Grid md={6} item className={classes.heroAnimation}>
                        <Lottie className={classes.anime} options={defaultOptions}/> 
                    </Grid>
                </Grid>
            </Grid>
{/* services section */}
            <Grid item className={classes.services}>
                <Grid container direction="row" className={classes.serviceContainer}>
                    {/* text */}
                    <Grid md={8} lg={6} item>
                        <Typography variant="h3">Full stack web development</Typography>
                        <Typography variant="h5">Node.js/Express Django Flask React Angular Vue ... and more</Typography>
                        <Button size="large" variant="outlined" className={classes.viewBtn}>View</Button>
                    </Grid>
                    {/* icon */}
                    <Grid md={4} item>
                        {/* <WebIcon className={classes.icon} /> */}
                        <img src={WebIcon} className={classes.icon} />
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.serviceContainer}>
                    <Grid  md={1} lg={2} item>

                    </Grid>
                    {/* text */}
                    <Grid md={8} lg={6} item>
                        <Typography variant="h3">Mobile Applications</Typography>
                        <Typography variant="h5">IOS Android React-Native Flutter Swift Kotlin ... and more </Typography>
                        <Button size="large" variant="outlined" className={classes.viewBtn}>View</Button>
                    </Grid>
                    {/* icon */}
                    <Grid md={3} lg={4}item>
                        {/* <MobileIcon className={classes.iconVtwo} /> */}
                        <img src={MobileIcon} className={classes.icon} />
                    </Grid>
                </Grid>

                <Grid container direction="row" className={classes.serviceContainer}>
                    {/* text */}
                    <Grid md={8} lg={6} item>
                        <Typography variant="h3">Custom Software development</Typography>
                        <Typography variant="h5">Python, Java, C++, Machine Learning, Cloud Computing, Data Science ... and more </Typography>
                        <Button size="large" variant="outlined" className={classes.viewBtn}>View</Button>
                    </Grid>
                    {/* icon */}
                    <Grid md={3} lg={4}item>
                        {/* <SoftwareIcon className={classes.icon} /> */}
                        <img src={SoftwareIcon} className={classes.icon} />
                    </Grid>
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="center" className={classes.callToAction}>
                    <Grid item container xs={12} justify="center" alignItems="center">
                        <Typography className={classes.ctaText} variant="h1">Join The Revolution Today</Typography>
                    </Grid>
                    <Grid item container justify="center" xs={12}>
                        <Button variant="outlined" className={classes.contactBtn}>Contact Us Today</Button>
                    </Grid>
                </Grid>
        </Grid>
    )
}

export default Home