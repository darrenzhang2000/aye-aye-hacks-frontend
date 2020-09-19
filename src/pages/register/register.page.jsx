import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import SignupStudent from '../../component/signup/signup.component';
import hook from "../../assets/hook.png";
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    parent: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        height: '100vh',
        // padding: '0px 3rem 0px 3rem',
        [theme.breakpoints.down('sm')]: {
            padding: '0px 10rem 0px 10rem'
        }
    },
    mainform: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: "50%",
        backgroundColor: '#FFFFFF'
    },
    option: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: '20px',
        border: 'ivory'
    },
    hookStyle: {
        width: "50%",
        backgroundColor: "#FBEEFF",
        color: "#253E70",
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center'
    },
    texts: {
        margin: 50,
        fontStyle: "bold"
    },
    images: {
        alignSelf: "center",
        marginLeft: 120
    }
}));
const Register = () => {
    const classes = useStyles();
    const [value, setValue] = React.useState(true);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    return (
        <div className={classes.parent}>
            <div className={classes.hookStyle}>
                <img src={hook} width={500} className={classes.images} />
                <Typography variant="h4" align="center" className={classes.texts}>
                    Virtual workout with your friends and share your seamlessly integrated health statistics to hold each other accountable
                </Typography>
                <Typography variant="h5" align="center" className={classes.texts} >
                    Get hooked on your fitness goal and follow it through with Fitogether!
                </Typography>
            </div>
            <div className={classes.mainform}>
                {/* <div className={classes.option}>
                    <Paper square>
                        <Tabs
                            value={value}
                            indicatorColor="primary"
                            textColor="primary"
                            onChange={handleChange}
                            aria-label="disabled tabs example"
                            // disableRipple={true}
                            centered
                        >
                            <Tab label="Sign Up" />
                            //<Tab label="Recruiter" />
                        </Tabs>
                    </Paper>
                </div> */}

                <div className={classes.signup}>
                    <SignupStudent />
                </div>

            </div>
        </div>
    )
};
export default Register;