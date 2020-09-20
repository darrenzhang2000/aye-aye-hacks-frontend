import React, { useState } from 'react'
import { FormControlLabel, Switch, TextField, Typography, Button } from '@material-ui/core'
import "./settings.css"
import axios from 'axios'
import { useDispatch, useSelector } from 'react-redux'
import { setName, setDateOfBirth, setCountry, setGender, setShareWithNetwork, setGoal } from '../../redux/redux'

const Settings = (props) => {
    const dispatch = useDispatch()
    const email = useSelector(state => state.email)
    const name = useSelector(state => state.name)
    const dateOfBirth = useSelector(state => state.dateOfBirth)
    const gender = useSelector(state => state.gender)
    const country = useSelector(state => state.country)
    const shareWithNetwork = useSelector(state => state.shareWithNetwork)
    const goal = useSelector(state => state.goal)

    const handleOnSubmit = (e) => {
        e.preventDefault()


        const body = {
            goal, email, name, dateOfBirth, gender, country, shareWithNetwork
        }
        console.log(body)

        axios.post(`http://localhost:5000/user/email/${email}/profile`, body, (err, res) => {
            console.log('res', res)
        })
    }

    return <div className="background">

        <form>
            <p className="setting-title">Setting your goal</p>
            <TextField
                required
                id="filled-required"
                label="Type your fitness goal here"
                defaultValue=""
                variant="outlined"
                value={goal}
                onChange={e => {
                    console.log('oc', e.target.value)
                    dispatch(setGoal(e.target.value))
                }}
            />

            <p className="setting-title">Share your goal and progress</p>

            <FormControlLabel
                control={
                    <Switch
                        checked={shareWithNetwork}
                        onChange={() => { dispatch(setShareWithNetwork(!shareWithNetwork)) }}
                        name="switch"
                    />
                }
                label="Share with your network"
            />
            <p>(otherwise your statistics will remain private to yourself)</p>

            <p className="setting-title">Account Information</p>



            <div className="setting-form">
                <TextField
                    required
                    id="filled-required"
                    label="Name"
                    defaultValue=""
                    variant="standard"
                    value={name}
                    onChange={(e) => dispatch(setName(e.target.value))}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Date of birth"
                    defaultValue=""
                    variant="standard"
                    value={dateOfBirth}
                    onChange={e => dispatch(setDateOfBirth(e.target.value))}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Gender"
                    defaultValue=""
                    variant="standard"
                    value={gender}
                    onChange={e => dispatch(setGender(e.target.value))}
                />
                <TextField
                    required
                    id="filled-required"
                    label="Country"
                    defaultValue=""
                    variant="standard"
                    value={country}
                    onChange={e => dispatch(setCountry(e.target.value))}
                />
            </div>
        </form>
        <div className="button">
            <Button variant="outlined"  onClick={handleOnSubmit} >
                <p className="buttonText">Finish</p>
            </Button>
        </div>
    </div>
}

export default Settings