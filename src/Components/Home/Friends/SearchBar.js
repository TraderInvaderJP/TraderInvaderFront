import React from 'react'
import { Paper, InputBase, IconButton, List,
    Divider, ListItem, ListItemText, ListItemSecondaryAction,
    Button } from '@material-ui/core'
import { Search } from '@material-ui/icons'

export default function SearchBar(props) {
  return (
    <div>
      <Paper style={{ display: 'flex', margin: '10px 0 0 0' }}>
        <InputBase
          style={{ margin: '10px', flex: 10 }}
          placeholder="Username"
          onClick={() => props.setEditing(true)}
          onChange={props.onEditSearch}
        />
        <IconButton
          style={{ padding: 0, color: '#43AA1F', flex: 1, margin: '10px' }}
        >
          <Search style={{ color: 'black' }} />
        </IconButton>
      </Paper>
      {props.editing && (
        <List style={{ padding: 0, backgroundColor: 'white', width: '100%' }}>
          {props.users.map((user, index) => (
            <React.Fragment key={index}>
              <Divider />
              <ListItem
                key={user}
                value={user}
              >
                <ListItemText style={{ flex: 1 }}>{user}</ListItemText>
                <ListItemSecondaryAction>
                  <Button color="primary" onClick={() => props.sendRequestAndClose(user)}>Invite</Button>
                </ListItemSecondaryAction>
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      )}
    </div>
  )
}
