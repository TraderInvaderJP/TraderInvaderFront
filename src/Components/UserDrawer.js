import React, { } from 'react';
import {
    Fab, List, ListItem, Toolbar, AppBar, IconButton, Divider, ListItemIcon, ListItemText, Drawer
} from '@material-ui/core'
import { People, Equalizer, Menu, Tv, Settings, Person, Help } from '@material-ui/icons';
import '../App.css'
import { Link } from 'react-router-dom';
import templogo from '../templogo.png';
import { makeStyles } from '@material-ui/core/styles';
import GameTable from './GameTable'

const useStyles = makeStyles({
    root: {
        flexGrow: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#9DAF96',
        height: '100vh',
        width: '100%'
    },
    list: {
        background: '#9DAF96',
        height: '100vh',
        width: '25vh'
    }
})

function UserDrawer(props) {
    const classes = useStyles()
    const [state, setState] = React.useState({
        
    })

    const sideList = side => (
        <div
            className={classes.list}
            role="presentation"
            onClick={ () =>props.toggleDrawer(side, false)}
            onKeyDown={ () =>props.toggleDrawer(side, false)}>
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Person />
                    </ListItemIcon>
                    <ListItemText primary={'Profile'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <People />
                    </ListItemIcon>
                    <ListItemText primary={'Friends'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Equalizer />
                    </ListItemIcon>
                    <ListItemText primary={'Statistics'} />
                </ListItem>
            </List>
            <Divider />
            <List>
                <ListItem button>
                    <ListItemIcon>
                        <Settings />
                    </ListItemIcon>
                    <ListItemText primary={'Settings'} />
                </ListItem>
                <ListItem button>
                    <ListItemIcon>
                        <Help />
                    </ListItemIcon>
                    <ListItemText primary={'Help'} />
                </ListItem>
            </List>
        </div>
    )

    return (
        <Drawer
            open={state.left}
            onClose={ () => props.toggleDrawer(props.left, false)}>
            {sideList(props.left)}
        </Drawer>
    )
}


export default UserDrawer