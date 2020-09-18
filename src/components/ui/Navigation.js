import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Drawer from '@material-ui/core/SwipeableDrawer'
import MenuIcon from '@material-ui/icons/Menu'
import IconButton from '@material-ui/core/IconButton'
import { useTheme } from '@material-ui/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/styles'
import myLogo from '../../images/logo.png'


const useStyles = makeStyles(theme =>({

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "3rem",
        [theme.breakpoints.down("sm")]:{
            marginBottom: "2.25rem"
        }
    },
    logo:{
        height: "6rem",
        [theme.breakpoints.down("sm")]:{
            height: "5rem"
        }
    },
    tabBox: {
        marginLeft: "auto",
        marginRight: "40px",
    },
    actionBtn:{
        ...theme.typography.estimate,
        padding: '10px',
        height: '50px',
        alignSelf: 'center',
        color: theme.palette.common.mainBlack,
        backgroundColor: "goldenrod",
        fontSize: "1.3rem",
        fontWeight: 400
    },
    tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '20px',
        color: 'whitesmoke',
    },
    logoBtn: {
        padding: 0,
        "&:hover":{
            backgroundColor: "transparent"
        }
    },
    drawerButton: {
        marginLeft: 'auto',
        "&:hover": {
            backgroundColor: 'transparent'
        }
    },
    drawerIcon: {
        height: "3rem",
        width: "3rem",
        color: theme.palette.common.mainBlue,
    },
    drawer: {
        backgroundColor: theme.palette.common.mainGreen,
        display: "flex",
        flexDirection: "column",
        alignItems: "flex-start",
        padding: 0,
        width: '23rem'
    },
    listItem:{
        width: "23rem",
    },
    drawerItem: {
        ...theme.typography.tab,
        color: "whitesmoke",
        width: "100%",

    },
    drawerLogo: {
        height: '5rem',
        alignSelf: 'center'
    }
}))

const NavBar = (props) => {

    const theme = useTheme()
    const classes = useStyles()
    const matches = useMediaQuery(theme.breakpoints.down('md'))
    const iOS = process.browser && /iPad|iPhone|iPod/.test(navigator.userAgent);

    const [value, setValue] = useState(0)
    const [openDrawer, setOpenDrawer] = useState(false)

    const routes = [
        {name: "Home", link: "/"},
        {name: "Services", link: "/services"},
        {name: "Gallery", link: "/gallery"},
        {name: "About", link: "/about"},
        {name: "Contact", link: "/contact"},

    ]

    useEffect(()=> {

        //Setting correct values for the navigation response
        [...routes].forEach((route, index) => {
            switch(window.location.pathname) {
                case `${route.link}`:
                    if(value !== index){
                        setValue(index)
                    }
                    break

                default:
                    break
            }
        })
    },[value, routes])


    const handleTabChange = (e, value) => {
        setValue(value)
    }

 
    const ElevationScroll = (props)=> {
        const { children } = props;

        const trigger = useScrollTrigger({
          disableHysteresis: true,
          threshold: 0,
        });
      
        return React.cloneElement(children, {
          elevation: trigger ? 4 : 0,
        });
      }

    const toEstimate = <Button variant="contained" className={classes.actionBtn}>Free Estimate</Button>
    
    const drawer = (
        <React.Fragment>
            <Drawer disableBackdropTransition={!iOS}
                    disableDiscovery={iOS} 
                    open={openDrawer} 
                    onClose={() => setOpenDrawer(false)}
                    onOpen={() => setOpenDrawer(true)}
                    classes={{paper: classes.drawer}}
            >
                <img src={myLogo} alt="logo in drawer" className={classes.drawerLogo}/>
                <List disablePadding>
                    {
                        routes.map((route, index) => {
                            return(
                                <ListItem
                                    key={`${route.name}${route.link}`}
                                    className={classes.listItem}
                                    selected={value === index} 
                                    onClick={() => {setOpenDrawer(false); setValue(index);}} 
                                    divider 
                                    button 
                                    component={Link} 
                                    to={route.link}
                                >
                                    <ListItemText className={classes.drawerItem} disableTypography>
                                        {route.name}
                                    </ListItemText>
                                </ListItem>
                            )
                        })
                    }
                </List>
                {toEstimate}
            </Drawer>
            <IconButton className={classes.drawerButton} onClick={() => setOpenDrawer(!openDrawer)}>
                <MenuIcon className={classes.drawerIcon} />
            </IconButton>
        </React.Fragment>
    )
    

    const tabs = (
        <React.Fragment>
            <Tabs indicatorColor="primary" onChange={handleTabChange} value={value} className={classes.tabBox}>
                {//Displaying all the navigation links
                routes.map((route) => {
                    return (
                        <Tab 
                            key={`${route.name}${route.link}`} 
                            className={classes.tab} 
                            label={route.name} 
                            component={Link} 
                            to={route.link} 
                        />
                    )
                })
                }
            </Tabs>
            {toEstimate}
        </React.Fragment>
    )

    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Button onClick={()=> setValue(0)} className={classes.logoBtn} component={Link} to="/">
                            <img src={myLogo} alt="logo" className={classes.logo}/>
                        </Button>
                        {matches ? drawer : tabs}
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>

    )
}

export default NavBar