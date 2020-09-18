import { Typography, Grid } from '@material-ui/core'
import React from 'react'
import "./progress.css"

const Progress = (props) => {
    return <div>
        <Typography>Goals</Typography>
        <Grid container className="row">
            <Grid sm={0} md={3}></Grid>
            <Grid md={6}>Workout everyday</Grid>
            <Grid md={3}>Until Sep 31</Grid>
        </Grid>


        <Typography>Achievement</Typography>
        <Grid container className="row">
            <Grid sm={0} md={3}></Grid>

            <Grid container md={6} className="row">

                <div className="col">
                    <Typography>10</Typography>
                    <Typography>Days</Typography>
                </div>

                <div className="col">
                    <Typography>200</Typography>
                    <Typography>Minutes</Typography>
                </div>

                <div className="col">
                    <Typography>15</Typography>
                    <Typography>Sessions</Typography>
                </div>

            </Grid>

            <Grid sm={0} md={3}></Grid>
        </Grid>


        <Typography>Categories breakdown</Typography>
        <Typography>### PLACEHOLDER FOR PIE CHART ###</Typography>



        <Typography>Progress</Typography>
        <Typography>### PLACEHOLDER FOR CALENDAR ###</Typography>
    </div>
}

export default Progress