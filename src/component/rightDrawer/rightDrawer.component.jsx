import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Avatar } from '@material-ui/core'
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import React from 'react';
import { AccessTime, Category, Assessment, Sms, AccountBox, Settings } from '@material-ui/icons';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
    },
    appBar: {
        width: `calc(100% - ${drawerWidth}px)`,
        marginRight: drawerWidth,
    },
    drawer: {
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.default,
        padding: theme.spacing(3),
    },
}));


export default function PermanentDrawerRight() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <CssBaseline />
            <Drawer
                className={classes.drawer}
                variant="permanent"
                classes={{
                    paper: classes.drawerPaper,
                }}
                anchor="right"
            >
                <div className={classes.toolbar} />
                <List>
                    <ListItem>Friend's Feed</ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Avatar> J </Avatar>
                        </ListItemIcon>

                        <ListItemText>
                            <Typography>Jess</Typography>
                            <Typography>goal: workout everyday</Typography>
                            <Typography>progress: on track</Typography>
                        </ListItemText>
                    </ListItem>

                    <ListItem>
                        <ListItemIcon>
                            <Avatar> D </Avatar>
                        </ListItemIcon>
                        <ListItemText>
                            <Typography>Dominic</Typography>
                            <Typography>goal: abs exercise</Typography>
                            <Typography>progress: not on track</Typography>
                        </ListItemText>
                    </ListItem>

                </List>

            </Drawer>
        </div>
    );
}