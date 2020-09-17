import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import useScrollTrigger from '@material-ui/core/useScrollTrigger'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import Button from '@material-ui/core/Button'
import { makeStyles} from '@material-ui/styles'
import myLogo from '../../assets/logo.svg'


const useStyles = makeStyles(theme =>({

    toolbarMargin: {
        ...theme.mixins.toolbar,
        marginBottom: "4em",
    },
    logo:{
        height: "6em",
    },
    tabBox: {
        marginLeft: "auto"
    },
    actionBtn:{
        ...theme.typography.estimate,
        padding: '10px',
        color: theme.palette.common.lightLinen,
        height: '50px',
        marginLeft: '80px',
    },
    tab:{
        ...theme.typography.tab,
        minWidth: 10,
        marginLeft: '20px',
        color: theme.palette.common.mainBlue,
    },
    logoBtn: {
        padding: 0,
        "&:hover":{
            backgroundColor: "transparent"
        }
    }
}))

const NavBar = (props) => {

    const classes = useStyles()
    const [value, setValue] = useState(0)

    useEffect(()=> {
        if(window.location.pathname === "/" && value !==0){
            setValue(0)
        } else if(window.location.pathname === "/services" && value !==1){
            setValue(1)
        }else if(window.location.pathname === "/gallery" && value !==2){
            setValue(2)
        }else if(window.location.pathname === "/about" && value !==3){
            setValue(3)
        }else if(window.location.pathname === "/contact" && value !==4){
            setValue(4)
        }else{
            return
        }
    },[value])

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


    return(
        <React.Fragment>
            <ElevationScroll>
                <AppBar position="fixed" color="primary">
                    <Toolbar>
                        <Button onClick={()=> setValue(0)} className={classes.logoBtn} component={Link} to="/">
                            <img src={myLogo} alt="logo" className={classes.logo}/>
                        </Button>
                        <Tabs indicatorColor="primary" onChange={handleTabChange} value={value} className={classes.tabBox}>
                            <Tab className={classes.tab} label="Home"component={Link} to="/" /> 
                            <Tab className={classes.tab} label="Services"component={Link} to="/services" />
                            <Tab className={classes.tab} label="Gallery" component={Link} to="/gallery"/>
                            <Tab className={classes.tab} label="About" component={Link} to="/about" />
                            <Tab className={classes.tab} label="Contact" component={Link} to="/contact"/>
                        </Tabs>
                        <Button color="secondary" variant="outlined" className={classes.actionBtn}>Free Estimate Now!!!</Button>
                    </Toolbar>
                </AppBar>
            </ElevationScroll>
            <div className={classes.toolbarMargin} />
        </React.Fragment>

    )
}

export default NavBar