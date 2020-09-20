import { Grid, Typography, Button } from '@material-ui/core'
import {setExercise} from '../../redux/redux'
import React from 'react'
import Img1 from "./images/img1.png"
import Img2 from "./images/img2.png"
import Img3 from "./images/img3.png"
import Img4 from "./images/img4.png"
import Img5 from "./images/img5.png"
import Img6 from "./images/img6.png"
import Img7 from "./images/img7.png"
import Img8 from "./images/img8.png"
import Img9 from "./images/img9.png"
import { useDispatch } from 'react-redux'


const Categories = (props) => {
    const dispatch = useDispatch()
    const videos = {
        1: "8V6IBmD1qeI",
        2: "rxEMKXW2Wqs",
        3: "kzAi0fnElCA",
        4: "E3ODVGAjePg",
        5: "WJm9zA2NY8E",
        6: "qfoW2PKugyk",
        7: "RjexvOAsVtI",
        8: "6jHsraw2NIk",
        9: "vPhg6sc1Mk4",
    }

    const setVideo = (videoId) => {
        dispatch(setExercise(`https://www.youtube.com/embed/${videoId}`))
        return <iframe width="560" height="315" src={`https://www.youtube.com/embed/${videoId}`} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    }

    return <div>
        <Typography>Workout Treasures</Typography>

        <Grid container>
        {/* <iframe width="560" height="315" src="https://www.youtube.com/embed/8V6IBmD1qeI" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}

            <Grid container>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[1])}}> 	<img src={Img1} /> </Button></Grid>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[2])}}> 	<img src={Img2} /> </Button></Grid>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[3])}}> 	<img src={Img3} /> </Button></Grid>
            </Grid>

            <Grid container>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[4])}}> 	<img src={Img4} /> </Button></Grid>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[5])}}> 	<img src={Img5} /> </Button></Grid>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[6])}}> 	<img src={Img6} /> </Button></Grid>
            </Grid>

            <Grid container>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[7])}}> 	<img src={Img7} /> </Button></Grid>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[8])}}> 	<img src={Img8} /> </Button></Grid>
                <Grid sm={12} md={4}><Button onClick={()=>{setVideo(videos[9])}}> 	<img src={Img9} /> </Button></Grid>
            </Grid>

        </Grid>
    </div>
}

export default Categories