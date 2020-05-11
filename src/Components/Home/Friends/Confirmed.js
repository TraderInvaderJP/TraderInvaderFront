import React from 'react'
import { ListItem, ListItemText, ListItemSecondaryAction, Divider,
    Button } from '@material-ui/core'
export default function Confirmed(props) {
    return (
        <React.Fragment>
            { props.friends.map((friend, index) => (
                <React.Fragment key={index}>
                    <Divider />
                    <ListItem>
                        <ListItemText>{friend}</ListItemText>
                        <ListItemSecondaryAction>
                            <Button color='primary' onClick={() => props.setNameAndOpen(friend)}>Invite</Button>
                        </ListItemSecondaryAction>
                    </ListItem>
                </React.Fragment>
            ))}
        </React.Fragment>
    )
}
