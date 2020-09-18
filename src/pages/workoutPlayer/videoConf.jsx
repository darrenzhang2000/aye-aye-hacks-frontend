import React from 'react';
import video from 'video';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
// import Header from '../../component/header/header.component';
// import Bottom from '../../component/bottom/bottom.component';
import Image from './images/background.jpg';
import Signin from '../../component/signin/signin.component';
var styles = {
    backgroundImage: `url(${Image})`,
    backgroundPositionX: 'center',
    backgroundPositionY: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover'
}

const useStyles = makeStyles((theme) => ({
    mainback: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '100%',
        height: '100vh'
    },
    mainimage: {
        position: 'relative',
        width: '75% !important',
        height: '100%',
        margin: '0px 5px 0px 0px'
    },
    signin: {
        position: 'relative',
        width: '25%',
        margin: '10% 5px 0px 5px',
        [theme.breakpoints.down('sm')]: {
            margin: '10% 5px 0px 5px'
        }
    },
    infor: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        backgroundColor: '#c3d8f0',
        position: 'absolute',
        bottom: '20%',
        right: '5%',
        left: '5%',
        padding: '10px'
    }
}));
  
<video
    id="my-player"
    class="video-js"
    controls
    preload="auto"
    poster="//vjs.zencdn.net/v/oceans.png"
    data-setup='{}'>
  <source src="//vjs.zencdn.net/v/oceans.mp4" type="video/mp4"></source>
  <source src="//vjs.zencdn.net/v/oceans.webm" type="video/webm"></source>
  <source src="//vjs.zencdn.net/v/oceans.ogv" type="video/ogg"></source>
  <p class="vjs-no-js">
    To view this video please enable JavaScript, and consider upgrading to a
    web browser that
    <a href="https://videojs.com/html5-video-support/" target="_blank">
      supports HTML5 video
    </a>
  </p>
</video>
export default Landing;