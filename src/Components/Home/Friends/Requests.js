import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Divider,
    IconButton, Button } from '@material-ui/core'
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
                            <Button color='primary'>Confirm</Button>
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
