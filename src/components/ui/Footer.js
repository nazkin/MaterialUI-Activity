import React from 'react'
import { Link } from 'react-router-dom'
import {makeStyles} from "@material-ui/styles"
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import facebook from '../../assets/facebook.svg'
import twitter from '../../assets/twitter.svg'
import instagram from '../../assets/instagram.svg'

const useStyles = makeStyles(theme => ({
    footerBox: {
        backgroundColor: theme.palette.common.mainGreen,
        width: '100%',
        minHeight: '6em'
    },
    mainGrid:{
        width: '100%',
    },
    linksGrid:{
        color: "whitesmoke",
        fontFamily: "Overpass Mono",
        fontSize: '1rem',
        fontWeight: 400,
        textDecoration: "none",
    },
    linksBox:{
        margin: "3em"
    },
    socialMedia:{
        width: "5rem",
        height: "5rem",
        margin: "1rem",
        [theme.breakpoints.down('xs')]: {
            height: "3em",
            width: "3em",
        }
    }
}))

const Footer = () => {
    const classes = useStyles()

    return(
        <footer className={classes.footerBox}>
          <Hidden mdDown>
            <Grid className={classes.mainGrid} container justify="center">
                <Grid item className={classes.linksBox}>
                    <Grid spacing={3} container direction="column">
                      <Grid item component={Link} to="/" className={classes.linksGrid} >
                        Home
                      </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.linksBox}>
                    <Grid container direction="column" spacing={3} >
                        <Grid item component={ Link } to="/services" className={classes.linksGrid} >
                            Services
                        </Grid>
                        <Grid item component={ Link } to="/services" className={classes.linksGrid} >
                            Custom Software Development
                        </Grid>
                        <Grid item component={ Link } to="/services" className={classes.linksGrid} >
                            Progressive Web Applications
                        </Grid>
                        <Grid item component={ Link } to="/services" className={classes.linksGrid} >
                            Android/IOS Applications
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.linksBox}>
                    <Grid container direction="column" spacing={3} >
                        <Grid item component={Link} to="/gallery" className={classes.linksGrid} >
                            Gallery
                        </Grid>
                        <Grid item component={Link} to="/gallery" className={classes.linksGrid} >
                            Project 1
                        </Grid>
                        <Grid item component={Link} to="/gallery" className={classes.linksGrid} >
                            Project 2
                        </Grid>
                        <Grid item component={Link} to="/gallery" className={classes.linksGrid} >
                            Project 3
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.linksBox}>
                    <Grid container direction="column" spacing={3} >
                        <Grid item component={Link} to="/about" className={classes.linksGrid} >
                            About
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.linksGrid} >
                            Vision
                        </Grid>
                        <Grid item component={Link} to="/about" className={classes.linksGrid} >
                            Team
                        </Grid>
                    </Grid>
                </Grid>
                <Grid item className={classes.linksBox}>
                    <Grid container direction="column" spacing={3} >
                        <Grid item component={Link} to="/contact" className={classes.linksGrid} >
                            Contact Information
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
          </Hidden>
          <Grid container justify="flex-end" alignItems="flex-end">
              <Grid item component={"a"} href="https://www.facebook.com" target="_blank">
                <img alt="facebook logo"  className={classes.socialMedia} src={facebook} />
              </Grid>
              <Grid item component={"a"} href="https://www.twitter.com" target="_blank">
                <img alt="twitter logo"  className={classes.socialMedia} src={twitter} />
              </Grid>
              <Grid item component={"a"} href="https://www.instagram.com" target="_blank">
                <img alt="instagram logo"  className={classes.socialMedia} src={instagram} />
              </Grid>
          </Grid>
        </footer>
    )
}
export default Footer