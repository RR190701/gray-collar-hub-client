import React, {useState} from 'react';
import Lottie from 'react-lottie';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import * as animationData from './../utils/deliveryMan.json';
import * as dayNight from './../utils/day-night.json'
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
import Application from './application';
import timeTrack from './../utils/time-tracking.png'
import deliveryWomen from './../utils/delivery-woman.png'
import earning from './../utils/earning.png'



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
  fontSize: '2.5rem',
margin:".5rem 0",
fontWeight:'normal',
'& strong':{
  color:"#18A558"
}
  },
track: {
width: '50%',
},
cont: {
  padding: '1.5rem',
  backgroundColor:'#d0f0c0',
  },
    home_heading:{
        fontSize:"2.5rem",
        margin:"2rem 0 0rem",
        '& strong':{
          color:"#18A558"
        }
    },
    find_jobs:{
        margin:"0rem 0 2rem",
        backgroundColor:"#40E0D0",
        color:"#000",
        textTransform:"none",
        marginLeft:'1rem',
              
      '&:hover': {
        backgroundColor:"#00BFFF",
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
      backgroundColor:'#90EE90',
      padding:'1rem 0 3rem',
      '& > p':{
        fontSize:'2rem',
        marginBottom:'3rem',
        '& > strong':{
          color:'#00BFFF'
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
          color:'#18A558'
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
fontSize:'2.5rem',
marginTop:'3rem',
fontWeight:'normal',
'& > strong':{
  color:'#18A558'
}
      },
      '& > h2':{
fontWeight:'normal',
width:'80%',
margin:'1.5rem auto 1.5rem'
      },
      '& > p':{
        fontSize:'1.5rem',
        fontWeight:'bold',
        color:"#18A558"
      }
    },
    infoCard:{
    width:'80%',
    margin:'2rem auto',
    backgroundColor:'#fff',
    borderRadius:'5px',
    padding:'2rem ',
    '& h1':{
      color:"#18A558",
      fontSize:'1.7rem',
      fontWeight:'normal'
    },
    '& p':{
      fontSize:'1.3rem'
    },
    '& strong':{
      color:"#40E0D0"
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
  const DayNight = {
    loop: true,
    autoplay: true, 
    animationData: dayNight.default,
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
        <p className={classes.home_heading} data-aos ="slide-up">
            Earn <strong> hourly</strong>, where ever and when ever you want!
        </p>
        <div data-aos ="slide-right">
        <Lottie options={defaultOptions}
     
              height={450}
              width={400}
              isStopped={false}
              isPaused={false}/>

        </div>


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
<Paper className={classes.card} data-aos="fade-up" >
  <img src={submitCard} alt="submit"></img>
  <p>Applying to a job is never been this <strong>easy</strong></p>
</Paper>
<Paper className={classes.card } data-aos="fade-up">
  <img src={interview} alt="interview"></img>
  <p>Get call for <strong>interview</strong></p>
</Paper>
<Paper  className={classes.card} data-aos="fade-up">
<img src={job} alt="job"  ></img>
<p>work for multiple companies and <strong>earn more</strong> </p>
</Paper>
      </div>
      </div>

      <div className={classes.down}>
        <h1>Work <strong>Day</strong> and <strong>Night</strong>, plan your own shift</h1>
        <div data-aos ="zoom-in-up">
        <Lottie options={DayNight}
     
              height={270}
              width={420}
              isStopped={false}
              isPaused={false}/>

        </div>
        <h2 data-aos ="fade-up">Its time to be smart and earn more, join us and work for more than one company at a time. Less waiting times and higher earnings.
        Utilize that free time to earn a little more, selects jobs and work for all of them, don't be a normal delivery guy be smart work with multiple big companies to maximize your earnings.

        </h2>
        <p>With us</p>
        <div className={classes.earn} data-aos ="zoom-in-up">
          <img src={work} alt="work"></img>
          <img src={arrow} alt="work"></img>
          <img src={work} alt="work"></img>
          <img src={arrow} alt="work"></img>
          <img src={work} alt="work"></img>
          <img src={money} alt="work"></img>
        </div>
        <p>Normal delivery job</p>
        <div className={classes.earn} data-aos ="zoom-in-up">
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
  <h1 className={classes.r}>What's <strong>more</strong> ?</h1>

</Grid>
<Grid container justifyContent="center" alignItems="center">
  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item sm={6}>
<img src={timeTrack} height="" alt="work"  data-aos="zoom-in-right"></img>
</Grid>
<Grid item sm={6}>
  <div className={classes.infoCard} data-aos="flip-up"> 
    <h1>Stay updated about your <strong>applications</strong></h1>
    <p>Keep a track of your applications and stay updated with your hiring status, weather you get hired or regected we keep you informed.</p>
    </div>
</Grid>
  </Grid>

  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item sm={6}>
<div className={classes.infoCard} data-aos="flip-up">
    <h1>Keep track of your <strong>daily earning</strong> goals</h1>
<p>Meet up to your daily earning goals as we keep that track for you, look for the shifts you have work for today and earn hourly</p>
    </div>
</Grid>
<Grid item sm={6}>
<img src={earning} height="" alt="work" data-aos="zoom-in-left"></img>
</Grid>
  </Grid>

  <Grid container justifyContent="center" alignItems="center" direction="row">

<Grid item sm={6}>
<img src={deliveryWomen} height="" alt="work"  data-aos="zoom-in-right"></img>
</Grid>
<Grid item sm={6}>
  <div className={classes.infoCard} data-aos="flip-up">
    <h1>Delivery jobs for <strong>women</strong></h1>
<p>Work as a delivery women, find safe jobs easily in your area and select the timing shifts you are comfortable with</p>
    </div>
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