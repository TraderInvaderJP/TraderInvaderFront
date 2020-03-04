// import React, { useState } from 'react'
// import { TextField, Button, Select, MenuItem, InputLabel, FormControl, Grid } from '@material-ui/core'
// import { Link } from 'react-router-dom'
// import axios from 'axios'
// import { makeStyles } from '@material-ui/core/styles'

// export default function JoinGame() {

//     return (
//         <div>
//             <Grid container style={{ justifyContent: 'center', marginTop: '25px' }}
//                 direction='column'
//                 justify='center'
//                 alignItems='center'
//                 spacing={2}>
//                 <Grid item style={{ marginTop: '50px' }}>
//                     <TextField
//                         InputProps={{ classes: { underline: classes.text } }}
//                         onChange={e => SetGameID(e.target.value)}
//                         name='gamename'
//                         placeholder='Game Name '
//                         type='text'
//                         autoComplete='off' />
//                 </Grid>
//                 <Grid item style={{ marginTop: '25px', justifyContent: 'center' }}>
//                     <Link to='/app' style={{ textDecoration: 'none' }}>
//                         <Button className={classes.button}
//                             onClick={handleSubmit}
//                             variant='text'>Submit</Button>
//                     </Link>
//                 </Grid>

//             </Grid>
//         </div>
//     )
// }
