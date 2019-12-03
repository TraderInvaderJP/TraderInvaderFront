import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import { Paper, Grid, TextField, List, 
  ListItem, ListItemText, Container, IconButton } from '@material-ui/core'
import { Search } from '@material-ui/icons'
const axios = require('axios')

function App() {
  const [options, setOptions] = useState([])
  useEffect(() => {

  })

  const [input, setInput] = useState('')

  const [stock, setStock] = useState({
    symbol: 'Search',
    price: 0.0
  })

  const loadStock = async () => {
    try {
      let { data } = await axios.get(`https://o5gn70te7h.execute-api.us-west-2.amazonaws.com/latest/stock/${input}`)
      console.log(data)
      setStock(data)
    }
    catch(err) {
      console.log(err)
    }
  }

  const changeSearch = e => setInput(e.target.value)

  return (
    <div className="App">
      <Container style={{padding: '10px'}}>
        <Grid container direction='column' justify='center' alignItems='center' spacing={2}>
          <Grid item>
            <Grid container justify='center' alignItems='center'>
              <Grid item><TextField onChange={e => changeSearch(e)} variant='outlined' type='search' fullWidth/></Grid>
              <Grid item>
                <IconButton onClick={loadStock}>
                  <Search />
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
          <Grid item>
            <Paper style={{width: '300px'}}>
              <List>
                <ListItem><ListItemText primary='Symbol' secondary={stock.symbol}/></ListItem>
                <ListItem><ListItemText primary='Value' secondary={stock.price} /></ListItem>
              </List>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default App;
