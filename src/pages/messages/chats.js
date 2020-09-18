import React from 'react'
import { Grid, List, ListItem, Typography, Avatar, ListItemText, ListItemIcon } from '@material-ui/core'

const Chats = props => {
    return <Grid container className="chats-chat">

        <Grid md={6} item className="chats">
            <List>
                <ListItem>Friend's Feed</ListItem>

                <ListItem>
                    <ListItemIcon>
                        <Avatar> J </Avatar>
                    </ListItemIcon>

                    <ListItemText>
                        <Typography>Dominic</Typography>
                        <Typography>Wanna workout together?</Typography>
                    </ListItemText>
                </ListItem>

                <ListItem>
                    <ListItemIcon>
                        <Avatar> D </Avatar>
                    </ListItemIcon>
                    <ListItemText>
                        <Typography>Workout group</Typography>
                        <Typography>This tues 1pm?</Typography>
                    </ListItemText>
                </ListItem>

            </List>
        </Grid>

        <Grid md={6} className="chat">
            <div className="row">
                <Avatar> D </Avatar>
                <Typography>Dominic</Typography>
            </div>

        </Grid>

    </Grid>
}

export default Chats