import React from 'react'
import {TextField} from '@material-ui/core'

const Settings = (props) => {
    return <div>


        <form>
            <TextField
                required
                id="filled-required"
                label="Required"
                defaultValue="Name"
                variant="filled"
            />
            <TextField
                required
                id="filled-required"
                label="Email"
                defaultValue="Email"
                variant="filled"
            />
        </form>
    </div>
}

export default Settings