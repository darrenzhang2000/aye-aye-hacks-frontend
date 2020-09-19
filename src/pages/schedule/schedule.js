import { Typography, Button } from '@material-ui/core'
import React from 'react'
import "./schedule.css"
import dst from "../../assets/dst.png";

const Schedule = (props) => {
    return <div className="wrapper">
        <div className="greetings-date">
            <Typography variant="h4" className="dateHeader">Ahoy, Anna!</Typography>
            <Typography variant="h4" className="dateHeader">10 September 2020 <Typography variant="h4" className="dateHeader">Thursday</Typography> </Typography>
        </div>

        {/* Fitness Treasure Map */}
        <div className="fitnessTreasureMap">
            <div className="fitHead">
                Your fitness treasure map
            </div>

            <div className="middle">
                <div className="goal-row">
                    <div className="goal-title">Goal |</div>
                    <div className="goal-block">
                        <div className="goal-message">Workout everyday and abs twice a week</div>
                        <div className="goal-date">Until September 31</div>
                    </div>
                </div>

                <div className="progress-row">
                    <div className="goal-title">
                        Progress |
                    </div>
                    <div className="progress-block">
                        <div className="col">
                            <div className="progress-text">0</div>
                            <div>Days</div>
                        </div>
                        <div className="col">
                            <div className="progress-text">0</div>
                            <div>Minutes</div>
                        </div>
                        <div className="col">
                            <div className="progress-text">0</div>
                            <div>Sessions</div>
                        </div>
                    </div>


                </div>

                <div className="message">
                    Welcome to Fitogether.
                    You can now schedule your first workout session
                    with you friends here effortlessly!
                </div>
            </div>

            <div className="right">
                <img src={dst} width={200} />
            </div>
        </div>


        <div className="week-block">
            <div className="week-header">This week</div>
            <div className="week-row">
                <div className="week-col">
                    <p className="week-text">Upcoming</p>
                    <p className="week-sub">Abs exercise with James</p>
                    <p className="week-sub">10/09/20 1:00pm - 2:00pm</p>
                </div>
                <div className="week-col">
                    <p className="week-text">Completed</p>
                    <p className="week-sub">Abs exercise with James</p>
                    <p className="week-sub">10/09/20 1:00pm - 2:00pm</p>

                </div>
            </div>
        </div>

        <div className="week-block">
            <p className="week-header">Suggested Workout</p>
            <p>###VIDEO HERE###</p>
            <div className="buttons">
                <div className="button">
                    <Button variant="outlined" color="primary" >
                        Start Workout
                    </Button>
                </div>
                <div className="button">
                    <Button variant="outlined" color="primary" >
                        Schedule
                    </Button>
                </div>
            </div>
        </div>



    </div>
}

export default Schedule