import React from 'react'
import {
  Dialog,
  DialogTitle,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Button,
} from '@material-ui/core'

export default function InviteDialog(props) {
  return (
    <Dialog open={props.open} onClose={props.toggleOpen}>
      <DialogTitle>Invite <b>{props.friendName}</b> to Game</DialogTitle>
      <List>
        {props.games.map((item) => (
          <ListItem>
            <ListItemText>{item}</ListItemText>
            <ListItemSecondaryAction>
              <Button color='primary' style={{padding: '0 5px'}} onClick={() => props.sendInviteAndClose(item)}>Invite</Button>
            </ListItemSecondaryAction>
          </ListItem>
        ))}
      </List>
    </Dialog>
  )
}
