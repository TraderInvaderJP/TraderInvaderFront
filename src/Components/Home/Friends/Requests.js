import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Divider,
    IconButton } from '@material-ui/core'
import { Clear } from '@material-ui/icons'

export default function Requests(props) {
    return (
        <React.Fragment>
            { props.requests.map(request => (
                <React.Fragment>
                    <Divider />
                    <ListItem>
                        <ListItemText>{request}</ListItemText>
                        <ListItemSecondaryAction>
                            <IconButton>
                                <Clear />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
