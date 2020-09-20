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
import { AccessTime, Category, Assessment, Sms, AccountBox, Settings, Chat } from '@material-ui/icons';
import { Link } from 'react-router-dom'
import "./leftDrawer.css"

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
    position: 'relative'
  },
  drawerPaper: {
    width: drawerWidth,
    top: 80
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
      <div className="top"></div>

      <Drawer
        className={classes.drawer, "top"}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
      >
        <div className={classes.toolbar} />
        <List>
          <ListItem style={{justifyContent: 'center'}}>
          <Avatar className="center" style={{justifyContent: 'center'}}> U </Avatar>
          </ListItem>

          <ListItem className="center" style={{justifyContent: 'center'}}>
            <p className="name">Anna Smith</p>
          </ListItem>

          <ListItem>
            <ListItemIcon><AccessTime /></ListItemIcon>
            <ListItemText><Link to="/schedule" className="link"><Typography>Schedule</Typography></Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><Category /></ListItemIcon>
            <ListItemText><Link to="categories"><Typography>Categories</Typography></Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><Assessment /></ListItemIcon>
            <ListItemText><Link to="/progress"><Typography>Your Progress</Typography></Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><Sms /></ListItemIcon>
            <ListItemText><Link to="/messages"><Typography>Direct Message</Typography></Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><Chat /></ListItemIcon>
            <ListItemText><Link to="/chats"><Typography>Peer Chats</Typography></Link></ListItemText>
          </ListItem>
          <ListItem>
            <ListItemIcon><Settings /></ListItemIcon>
            <ListItemText><Link to="/settings"><Typography>Settings</Typography></Link></ListItemText>
          </ListItem>

        </List>

      </Drawer>
    </div>
  );
}