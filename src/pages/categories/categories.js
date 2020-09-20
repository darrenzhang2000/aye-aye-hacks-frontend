import { Grid, Typography, Button } from '@material-ui/core'
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

const Categories = (props) => {
    return <div>
        <Typography>Workout Treasures</Typography>

        <Grid container>

            <Grid container>
                <Grid sm={12} md={4}><Button> 	<img src={Img1} /> </Button></Grid>
                <Grid sm={12} md={4}><Button> 	<img src={Img2} /> </Button></Grid>
                <Grid sm={12} md={4}><Button> 	<img src={Img3} /> </Button></Grid>
            </Grid>

            <Grid container>
                <Grid sm={12} md={4}><Button> 	<img src={Img4} /> </Button></Grid>
                <Grid sm={12} md={4}><Button> 	<img src={Img5} /> </Button></Grid>
                <Grid sm={12} md={4}><Button> 	<img src={Img6} /> </Button></Grid>
            </Grid>

            <Grid container>
                <Grid sm={12} md={4}><Button> 	<img src={Img7} /> </Button></Grid>
                <Grid sm={12} md={4}><Button> 	<img src={Img8} /> </Button></Grid>
                <Grid sm={12} md={4}><Button> 	<img src={Img9} /> </Button></Grid>
            </Grid>

        </Grid>
    </div>
}

export default Categories