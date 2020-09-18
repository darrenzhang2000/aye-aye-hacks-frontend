import React from 'react'
import { Grid, List, ListItem, Typography, Avatar, ListItemText, ListItemIcon } from '@material-ui/core'


const Friends = props => {
    return <div>
        <List>
            <ListItem>Friend's Feed</ListItem>

            <ListItem>
                <ListItemIcon>
                    <Avatar> J </Avatar>
                </ListItemIcon>
                <ListItemText>
                    <Typography>Karina</Typography>
                </ListItemText>
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <Avatar> J </Avatar>
                </ListItemIcon>

                <ListItemText>
                    <Typography>Jane</Typography>
                </ListItemText>
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <Avatar> D </Avatar>
                </ListItemIcon>
                <ListItemText>
                    <Typography>Darren</Typography>
                </ListItemText>
            </ListItem>

            <ListItem>
                <ListItemIcon>
                    <Avatar> C </Avatar>
                </ListItemIcon>
                <ListItemText>
                    <Typography>Connor</Typography>
                </ListItemText>
            </ListItem>

        </List>
    </div>
}

export default Friends