import React, { useState } from 'react'
import { Grid, Typography, Paper, List, ListSubheader } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles({
    paper: {
        backgroundColor: 'white'
    },
    sections: {
        color: 'black',
    }
})

export default function Help() {
    const classes = useStyles()  

    return (
        <div>
            <Grid container style={{ justifyContent: 'center', marginTop: '25px' }} 
                direction= 'column'
                justify= 'center'
                alignItems= 'center'
                spacing={2}>
                <Grid item style={{justifyContent: 'center' }}>
                    <Typography variant = "h4" style={{color: 'black', textAlign: 'center'}}>
                        Help
                    </Typography>
                </Grid>
                <Grid item style={{justifyContent: 'center'}}>
                    <Paper className={classes.paper} style={{ margin: '10px 0 0 0', padding: '10px 0' }}>
                        <List className={classes.sections}>
                            <ListSubheader color='primary' align='center'>
                                <Typography varient = "h5" style={{color: 'black', textAlign: 'center'}}>
                                    Jump To Section
                                </Typography>
                            </ListSubheader>
                        </List>
                    </Paper>
                </Grid>
            </Grid>
            <Grid container style={{ justifycontent: 'left', marginTop: '25px'}}
                direction= 'column'
                justify= 'left'
                alignItems='left'
                spacing={2}>
                <Grid item style={{justifyContent: "center"}}>
                    <Typography variant = 'h4' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Accounts
                    </Typography>
                    <Typography variant = 'h5' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Creating an Account
                    </Typography>
                </Grid>
                <Grid item style={{justifyContent: "center"}}>
                    <Typography variant = 'h5' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Changing Your Password
                    </Typography>
                </Grid>

                <Grid item style={{justifyContent: "center"}}>
                    <Typography variant = 'h4' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Games
                    </Typography>
                    <Typography variant = 'h5' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Creating a Game
                    </Typography>
                </Grid>
                <Grid item style={{justifyContent: "center"}}>
                    <Typography variant = 'h5' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Joining A Game
                    </Typography>
                </Grid>
                <Grid item style={{justifyContent: "center"}}>
                    <Typography variant = 'h5' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Participating In A Game
                    </Typography>
                </Grid>

                <Grid item style={{justifyContent: "center"}}>
                    <Typography variant = 'h4' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Friends
                    </Typography>
                    <Typography variant = 'h5' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Sending A Friend Request
                    </Typography>
                </Grid>
                <Grid item style={{justifyContent: "center"}}>
                    <Typography variant = 'h5' style={{color: 'black', padding: '0 0 10px 0', textAlign: 'left'}}>
                        Accepting A Friend Request
                    </Typography>
                </Grid>
            </Grid>
            
        </div>
    )
}
