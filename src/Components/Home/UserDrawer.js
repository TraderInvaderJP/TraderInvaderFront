import React, { } from 'react';
import {
    List, ListItem, Divider, ListItemIcon, ListItemText, Drawer
} from '@material-ui/core'
import { Link } from 'react-router-dom'
import { People, Equalizer, Settings, Person, Help, Home } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';


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

    return (
        <Drawer
            open={props.isOpen}
            onClose={props.toggleDrawer}>
            <div
                className={classes.list}>
                <List>
                    <Link to='/app' style={{color: 'black', textDecoration: 'none'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <Home />
                            </ListItemIcon>
                            <ListItemText primary={'Home'} />
                        </ListItem> 
                    </Link>
                    <Link to='/app/profile' style={{color: 'black', textDecoration: 'none'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <Person />
                            </ListItemIcon>
                            <ListItemText primary={'Profile'} />
                        </ListItem> 
                    </Link>
                    <Link to='/app/friends' style={{color: 'black', textDecoration: 'none'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <People />
                            </ListItemIcon>
                            <ListItemText primary={'Friends'} />
                        </ListItem>
                    </Link>
                    <Link to='/app/statistics' style={{color: 'black', textDecoration: 'none'}}>
                        <ListItem button>
                            <ListItemIcon>
                                <Equalizer />
                            </ListItemIcon>
                            <ListItemText primary={'Statistics'} />
                        </ListItem>
                    </Link>
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
        </Drawer>
    )
}

export default UserDrawer