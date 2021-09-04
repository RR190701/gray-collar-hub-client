import React, {useState} from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as animationData from './../utils/deliveryMan.json';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import axios from 'axios';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import call from './../utils/call.svg'
import CircularProgress from '@material-ui/core/CircularProgress';
import { ToastContainer, toast } from 'react-toastify';
import Navbar from './navbar';
import Paper from '@material-ui/core/Paper';
import submitCard from './../utils/submitCard.png';
import interview from './../utils/interview.png';
import job from './../utils/job.png';
import work from "./../utils/work.png";
import progress from "./../utils/progress.svg";
import application from "./../utils/application.svg";
import arrow from './../utils/right-arrow.png';
import time from './../utils/clock.png';
import coins from './../utils/coins.png';

import money from './../utils/money-bag.png'
import FooterPagePro from './footer';
import Footer from './footer';



const useStyles = makeStyles((theme) => ({
    home_div: {
        textAlign:"center",
        overflowX: 'hidden'

    },
link: {
  textDecoration: 'none',
  color: 'black'
},
tr: {
color: '#FF4F5B',
fontSize: '2rem'
},
p: {
  
  fontSize: '1.3rem'
  },
r: {
fontFamily: 'cursive',
  fontSize: '3rem'
  },
track: {
width: '50%'
},
cont: {
  padding: '1.5rem',
  background: '#FFFF8A'
  },
    home_heading:{
        fontSize:"2.5rem",
        margin:"2rem 0 3rem",
        '& strong':{
          color:"#FF4F5B"
        }
    },
    find_jobs:{
        margin:"2rem 0",
        backgroundColor:"#fefe22",
        color:"#000",
        textTransform:"none",
        marginLeft:'1rem',
              
      '&:hover': {
        backgroundColor:"yellow",
        color:"#000"
        },
    },
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      margin:'auto',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      border: '.5px solid #000',
      borderRadius:'5px',
      width:'55%',
      boxShadow: theme.shadows[5],
      paddingBottom: theme.spacing(4, 2),
      display:'flex',
    },
    info:{
      width:'50%',
      padding:'2rem',
      display:'flex',
      flexWrap:'wrap',
      justifyContent:'center',
      '& > p':{
        fontSize:"1rem",
        textAlign:'center',
        margin:0,
        '& strong':{
          color:"#FF4F5B"
        }
      }

    },
    form:{
      
      width:'50%',
      display:'flex',
      padding:'3rem 2rem',
      boxSizing:'border-box',
      flexWrap:'wrap',
      justifyContent:'center',
      '& > *':{
        width:'200px',
        margin:'0.5rem'
        
        
      }
    },
    cardsDiv:{
      backgroundColor:'#ff9999',
      padding:'1rem 0 3rem',
      '& > p':{
        fontSize:'2rem',
        marginBottom:'3rem',
        '& > strong':{
          color:'#fefe22'
        }
      }
    },
    cards:{
      width:'100%',
      display:'flex',
      justifyContent:'space-evenly'
    },
    card:{
      padding:'2rem 1rem',
      width:'25%',
      '& > img':{
        width:'80%'
      },
      '& > p':{
        fontSize:'1.4rem',
        margin:'.5rem 0 0 0',
        '& > strong':{
          color:'#FF4F5B'
        }
      }
    },
    earn:{
      width:'45%',
      margin:'0 auto',
      display:'flex',
      '& > *':{
        margin:'1rem',
        width:'60px'
      }
    },
    down:{
      paddingBottom:'2rem',
      '& > h1':{
fontSize:'2.5rem'
      },
      '& > h2':{
fontWeight:'normal',
width:'80%',
margin:'0 auto'
      },
      '& > p':{
        fontSize:'1.5rem',
        fontWeight:'bold',
      }
    }
  }));

  const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: animationData.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

const Home = () => {
  const [error, setError] = useState("");
 const classes = useStyles();
 const [open, setOpen] = React.useState(false);
 const [name, setName] = useState("");
 const [org, setOrg] = useState("");
 const [phone, setPhone] =useState("");
 const [adding, setAdding] = useState(false);
 
const handleOpen = () => {
  setOpen(true);
};

const handleClose = () => {
  setOpen(false);
};

const handleSubmit = async (e) =>{
  setAdding(true);
  e.preventDefault();
  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };
  try {
    const { data } = await axios.post(
      "https://pure-caverns-24063.herokuapp.com/api/client/registerClient",
      {
        clientId: '512323', name, org,phone, status: 'active'

       
      },
      config
    );
    handleClose();
    setAdding(false)
    toast.success("Saved Sucessfully!")
  } catch (error) {
  //   popError(error.response.data.error);
    // setError(error.response.data.error);
   
      setTimeout(() => {
        setError("");
      }, 5000);
    

  }
}
    return ( <div className={classes.home_div}>
      <Navbar></Navbar>
       <ToastContainer />   
        <p className={classes.home_heading}>
            Earn <strong> hourly</strong>, where ever and when ever you want!
        </p>
        <Lottie options={defaultOptions}
              height={300}
              width={500}
              isStopped={false}
              isPaused={false}/>

<Button className={classes.find_jobs} variant="contained" color="primary">
        <Link className={classes.link} to="/findJobs" >Lets find jobs</Link>
      </Button>
      
      <Button className={classes.find_jobs} variant="contained" color="primary"
      
      onClick={handleOpen}>
        Hire workers
      </Button>
      <div className={classes.cardsDiv}>
      <p>With everything so easy, start your <strong>new job </strong>today</p>
      <div className={classes.cards}>
<Paper className={classes.card}>
  <img src={submitCard} alt="submit"></img>
  <p>Applying to a job is never been this <strong>easy</strong></p>
</Paper>
<Paper className={classes.card}>
  <img src={interview} alt="interview"></img>
  <p>Get call for <strong>interview</strong></p>
</Paper>
<Paper  className={classes.card}>
<img src={job} alt="job"></img>
<p>work for multiple companies and <strong>earn more</strong> </p>
</Paper>
      </div>
      </div>

      <div className={classes.down}>
        <h1>Don't wait, just earn</h1>
        <h2>Its time to be smart and earn more, join us and work for more than one company at a time. Less waiting times and higher earnings.
        Utilize that free time to earn a little more, selects jobs and work for all of them, don't be a normal delivery guy be smart work with multiple big companies to maximize your earnings.

        </h2>
        <p>With us</p>
        <div className={classes.earn}>
          <img src={work} alt="work"></img>
          <img src={arrow} alt="work"></img>
          <img src={work} alt="work"></img>
          <img src={arrow} alt="work"></img>
          <img src={work} alt="work"></img>
          <img src={money} alt="work"></img>
        </div>
        <p>Normal delivery job</p>
        <div className={classes.earn}>
          <img src={work} alt="work"></img>
          <img src={arrow} alt="work"></img>
          <img src={time} alt="work"></img>
          <img src={arrow} alt="work"></img>
          <img src={work} alt="work"></img>
          <img src={coins} alt="work"></img>
        </div>
      </div>
      <Grid container justifyContent="center" alignItems="center" className={classes.cont}>
<Grid item direction="row" xs={12}>
  <h1 className={classes.r}>Features</h1>

</Grid>
<Grid container justifyContent="center" alignItems="center">
  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item xs={6}>
<img src={progress} className={classes.track} alt="work"></img>
</Grid>
<Grid item xs={6}>
  <h2 className={classes.tr}>
Track Your Daily Earnings
</h2>
<h4 className={classes.p}>
Track your Earnings on daily basis and keep a track of your daily, weekly and monthly progress.
</h4>
</Grid>
  </Grid>
  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item xs={6}>
<h2 className={classes.tr}> 
Stay updated with your applications
</h2>
<h4 className={classes.p}>
Keep a track of your applications and stay updated with your hiring status.
</h4>
</Grid>
<Grid item xs={6}>
 
<img src={application} className={classes.track} alt="work"></img>
</Grid>
  </Grid>

</Grid>
      </Grid>
      <Footer/>

      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
        <div className={classes.paper}>
          <div className={classes.info}>
           
<img src={call} width="80%" height=" 80%" alt="admin"></img>

<p>Our team will <strong>contact you</strong>, at the earliest</p>
          </div>
          <form className={classes.form} Validate onSubmit={handleSubmit} autoComplete="off">
  <TextField  size="small" id="clientId" value={name} onChange={(e)=>setName(e.target.value)} label="Name" variant="outlined" />
  <TextField size="small" id="clientName" value={org} onChange={(e) => setOrg(e.target.value)} label="Organisation" variant="outlined" />
  <TextField  size="small" id="timings" value={phone} onChange={(e) => setPhone(e.target.value)} label="Phone" variant="outlined" />
<Button
        variant="contained"
        type="submit" 
        className={classes.find_jobs}
        
        
      >
        Submit
      </Button>
      {
        adding?
        <CircularProgress color="secondary" />:null
      } 
</form>

          </div>
        </Fade>
      </Modal>
    </div> );
}
 
export default Home;