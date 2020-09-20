import { Typography, Grid } from '@material-ui/core'
import React, { useState } from 'react'
import "./progress.css"
import { VictoryPie } from 'victory';
import Calendar from 'react-calendar'


const Progress = (props) => {

    const [value, onChange] = useState(new Date());

    const [data, setData] = useState([
        { x: "Abs", y: 35 },
        { x: "Biceps", y: 40 },
        { x: "Legs", y: 55 }
    ]);

    return <div className="background">
        <p className="goal-title start">Goals</p>
        <Grid container className="row">
            <Grid sm={0} md={3}></Grid>
            <Grid md={6}><p className="goal-text left">Workout everyday</p></Grid>
            <Grid md={2}><p className="goal-text">Until Sep 31</p> </Grid>
        </Grid>


        <p className="goal-title start">Achievements</p>
        <Grid container className="grid-timer">
            <Grid container md={5} >
                <div className="col">
                    <p className="achieve-text">10</p>
                    <p>Days</p>
                </div>

                <div className="col">
                    <p className="achieve-text">200</p>
                    <p>Minutes</p>
                </div>

                <div className="col">
                    <p className="achieve-text">15</p>
                    <p>Sessions</p>
                </div>

            </Grid>

        </Grid>


        <p className="goal-title start">Categories breakdown</p>

        <Grid container className="row center">
            <Grid sm={0} md={3} justify="center">
                <VictoryPie
                    innerRadius={100}
                    data={data}
                />
            </Grid>
        </Grid>



        <p className="goal-title start">Progress</p>
        <Calendar
        onChange={onChange}
        value={value}
      />
    </div>
}

export default Progress