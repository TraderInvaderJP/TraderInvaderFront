import React, { } from 'react';
import {
    List, ListItem, Divider, ListItemIcon, ListItemText, Drawer
} from '@material-ui/core'
import { People, Equalizer, Menu, Tv, Settings, Person, Help } from '@material-ui/icons';
import '../App.css'
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
            onClose={ props.toggleDrawer}>
            <div
                className={classes.list}>
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
        </Drawer>
    )
}

export default UserDrawer