import { Typography } from '@material-ui/core'
import React from 'react'
import "./schedule.css"

const Schedule = (props) => {
    return <div>
        <div className="greetings-date">
            <Typography>Ahoy, Anna!</Typography>
            <Typography>10 September 2020 Thursday</Typography>
        </div>

        {/* Fitness Treasure Map */}
        <div className="fitness-treasure-map">
            <div className="left">
                <Typography>Your fitness treasure map</Typography>
            </div>

            <div className="middle">
                <div className="goal row">
                    <div className="row goal-title"><Typography>Goal |</Typography></div>
                    <div className="row goal-message"><Typography>Workout everyday and abs twice a week</Typography></div>
                    <div className="goal-date"><Typography>Until September 31</Typography></div>
                </div>

                <div className="progress row">
                    <div className="col">
                        <Typography>0</Typography>
                        <Typography>Days</Typography>
                    </div>
                    <div className="col">
                        <Typography>0</Typography>
                        <Typography>Minutes</Typography>
                    </div>
                    <div className="col">
                        <Typography>0</Typography>
                        <Typography>Sessions</Typography>
                    </div>

                </div>

                <div className="message"><Typography>
                    Welcome to Fitogether.
                    You can now schedule your first workout session
                    with you friends here effortlessly!
                </Typography></div>
            </div>

            <div className="right">
                INSERT PIC HERE
            </div>
        </div>


        <div>
            <Typography>This week</Typography>
            <div className="week row">
                <div className="col">
                    <Typography>Upcoming</Typography>
                    <Typography>Abs exercise with James</Typography>
                    <Typography>10/09/20 1:00pm - 2:00pm</Typography>
                </div>
                <div className="col">
                    <Typography>Completed</Typography>
                    <Typography>Abs exercise with James</Typography>
                    <Typography>10/09/20 1:00pm - 2:00pm</Typography>

                </div>
            </div>
        </div>

        <div>
            <Typography>Suggested Workout</Typography>
            <Typography>###VIDEO HERE###</Typography>
            <Typography>Start Workout</Typography>
            <Typography>Schedule</Typography>
        </div>



    </div>
}

export default Schedule