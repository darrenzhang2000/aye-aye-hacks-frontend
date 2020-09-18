import React from 'react'
import { FormControlLabel, Switch, TextField, Typography } from '@material-ui/core'
import "./settings.css"

const Settings = (props) => {
    return <div>

        <Typography>Setting your goal</Typography>
        <TextField
            required
            id="filled-required"
            label="Type your fitness goal here"
            defaultValue=""
            variant="filled"
        />


        <FormControlLabel
            control={
                <Switch
                    checked={true}
                    onChange={() => { }}
                    name="switch"
                />
            }
            label="Share your goal and progress"
        />




        <Typography>Account Information</Typography>

        <form>
            <div className="setting-form">
                <TextField
                    required
                    id="filled-required"
                    label="Required"
                    defaultValue=""
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Email"
                    defaultValue=""
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Date of birth"
                    defaultValue=""
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Gender"
                    defaultValue=""
                    variant="filled"
                />
                <TextField
                    required
                    id="filled-required"
                    label="Country"
                    defaultValue=""
                    variant="filled"
                />
            </div>
        </form>
    </div>
}

export default Settings