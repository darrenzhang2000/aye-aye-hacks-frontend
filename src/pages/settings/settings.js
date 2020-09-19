import React from 'react'
import { FormControlLabel, Switch, TextField, Typography, Button } from '@material-ui/core'
import "./settings.css"

const Settings = (props) => {
    return <div className="background">

        <p className="goal-title">Setting your goal</p>
        <TextField
            required
            id="filled-required"
            label="Type your fitness goal here"
            defaultValue=""
            variant="outlined"
        />

        <p className="goal-title">Share your goal and progress</p>

        <FormControlLabel
            control={
                <Switch
                    checked={true}
                    onChange={() => { }}
                    name="switch"
                />
            }
            label="Share with your network"
        />
        <p>(otherwise your statistics will remain private to yourself)</p>

        <p className="goal-title">Account Information</p>

        <form>
            <div className="setting-form">
                <TextField
                    required
                    id="filled-required"
                    label="Name"
                    defaultValue=""
                    variant="standard"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Email"
                    defaultValue=""
                    variant="standard"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Date of birth"
                    defaultValue=""
                    variant="standard"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Gender"
                    defaultValue=""
                    variant="standard"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Country"
                    defaultValue=""
                    variant="standard"
                />
            </div>
        </form>
        <div className="button">
            <Button variant="outlined" color="primary" >
                <p className="buttonText">Finish</p>
            </Button>
        </div>
    </div>
}

export default Settings