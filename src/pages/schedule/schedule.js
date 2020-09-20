import { Typography, Button } from '@material-ui/core'
import React from 'react'
import "./schedule.css"
import dst from "../../assets/dst.png";
//comment from Catherine
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
                <div className="goal-row start">
                    <div className="goal-title start">Goal |</div>
                    <div className="goal-block left">
                        <div className="goal-message left">Workout everyday and abs twice a week</div>
                        <div className="goal-date left">Until September 31</div>
                    </div>
                </div>

                <div className="progress-row start">
                    <div className="goal-title start">
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
            <iframe width="560" height="315" src="https://www.youtube.com/embed/oAPCPjnU1wA" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
            <div className="buttons">
                <Button variant="outlined" color="primary" className="button">
                    <p className="blue">Start Workout</p>
                    </Button>
                <Button  variant="outlined" color="primary" className="button">
                    <p className="blue">Schedule</p>
                </Button>
            </div>



        </div>
    </div>
}

export default Schedule