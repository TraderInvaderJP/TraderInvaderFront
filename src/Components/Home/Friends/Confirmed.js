import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Divider,
    Button } from '@material-ui/core'
export default function Confirmed(props) {
    return (
        <React.Fragment>
            { props.friends.map(friend => (
                <React.Fragment>
                    <Divider />
                    <ListItem>
                        <ListItemText>{friend}</ListItemText>
                        <ListItemSecondaryAction>
                            <Button color='primary'>Invite</Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
