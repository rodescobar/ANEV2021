import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Button,
} from '@material-ui/core'

import SettingsIcon from '@material-ui/icons/Settings'

import { makeStyles } from '@material-ui/core/styles'

import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: 8,
    },
    title: {
      flexGrow: 1,
    },
  }));


const Menu = ({ tema }) => {
    const classes = useStyles()

    return (
        <AppBar position="static">
            <Toolbar>
                <IconButton 
                    edge="start" 
                    color="inherit" 
                    aria-label="menu"
                    onClick={ tema }
                >
                    <SettingsIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title} >
                    ANEV 2021
                </Typography>
                <Link 
                    to="/admin" 
                    style={{ textDecoration: "none", color: "white" }}
                >
                    <Button color="inherit">Admin</Button>
                </Link>
                <Button color="inherit" className={classes.menuButton}>Atualizações</Button>
                <a href="/login">
                    <Button color="inherit">Login</Button>
                </a>
            </Toolbar>
        </AppBar>
    )
}

export default Menu