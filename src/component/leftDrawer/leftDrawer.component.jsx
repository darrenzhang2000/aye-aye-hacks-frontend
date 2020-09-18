import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import {Avatar } from '@material-ui/core'
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
    marginLeft: drawerWidth,
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

export default function PermanentDrawerLeft() {
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
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
            <Avatar> U </Avatar>
            <ListItem>INSERT PROFILE PIC HERE</ListItem>

            <ListItem>
                <Typography>Anna Smith</Typography>
            </ListItem>

        <ListItem>
            <ListItemIcon><AccessTime/></ListItemIcon>
            <ListItemText><Typography>Schedule</Typography></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon><Category/></ListItemIcon>
            <ListItemText><Typography>Categories</Typography></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon><Assessment/></ListItemIcon>
            <ListItemText><Typography>Your Progress</Typography></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon><Sms/></ListItemIcon>
            <ListItemText><Typography>Direct Message</Typography></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon><AccountBox/></ListItemIcon>
            <ListItemText><Typography>Your Profile</Typography></ListItemText>
        </ListItem>
        <ListItem>
            <ListItemIcon><Settings/></ListItemIcon>
            <ListItemText><Typography>Settings</Typography></ListItemText>
        </ListItem>


          {/* {['Schedule', 'Categories', 'Your Progress', 'Direct Messages', 'Your Profile', 'Settings'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>{index % 2 === 0 ? "icon1" : "icon2"}</ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))} */}
        </List>

      </Drawer>
    </div>
  );
}