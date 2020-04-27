import React, { useState } from 'react'
import { Grid, Typography } from '@material-ui/core'

export default function Help() {
    return (
        <div>
            <Grid container style={{ justifyContent: 'center', marginTop: '25px' }} 
                direction= 'column'
                justify= 'center'
                alignItems= 'center'
                spacing={2}>
                <Grid item style={{justifyContent: 'center' }}>
                    <Typography variant = "h4" style={{color: 'black', padding: '0 0 10px 0', textAlign: 'center'}}>
                        Help
                    </Typography>
                </Grid>
            </Grid>
            <Grid container style={{ justifycontent: 'left', marginTop: '25px'}}
                direction= 'column'
                justify= 'left'
                alignItems='left'
                spacing={2}>
            </Grid>
            
        </div>
    )
}
