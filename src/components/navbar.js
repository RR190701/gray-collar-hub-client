import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import icon from './../utils/running-man.png';
import { Link } from 'react-router-dom';
import DescriptionIcon from '@material-ui/icons/Description';
import LockIcon from '@material-ui/icons/Lock';
import HomeIcon from '@material-ui/icons/Home';
import YoutubeSearchedForIcon from '@material-ui/icons/YoutubeSearchedFor';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import MonetizationOnIcon from '@material-ui/icons/MonetizationOn';
const useStyles = makeStyles((theme) => ({

  navbar:{
width:'95%',
margin:'0 auto',
display:'flex',
justifyContent:'space-between',

},
link:{
  textDecoration: 'none',
  color: 'black'
},
divi: {
display: 'flex'
},
icon: {
  paddingRight: '0.3rem'
},
left:{
  display:'flex',
  '& > p':{
    fontSize:'1.2rem',
    marginLeft:'.5rem',
    fontStyle:'italic',
    fontWeight:'bold'
  }

},
right:{
  display:'flex',
alignItems:'center',
},
button:{
  backgroundColor:'yellow',
  marginRight:'1rem',
  alignContent: 'center',
  justifyContent: 'center',
  textTransform:'none',
  '&:hover':{
      backgroundColor:'yellow'
  }
}
}));

export default function Navbar(props) {
  const classes = useStyles();
  const logoutHandler = () => {
    localStorage.removeItem("authToken");
    localStorage.removeItem("userId");
    const { history } = props;
   
    //console.log(props);
  };
  return (
    <div className={classes.navbar}>
      <div className={classes.left}>
      <img src ={icon} alt= "deliver-man" height="60"></img>
      <p>Lets Deliver it</p>
      </div>
      <div className={classes.right}>
      <Button
        variant="contained"
        className={classes.button}
      >
        <Link className={classes.link} to="/"><div className={classes.divi}><HomeIcon className={classes.icon} fontSize='small'/>  Home</div></Link>
    
      </Button>
      <Button
        variant="contained"
        className={classes.button}
      >
      <Link className={classes.link} to="/findJobs"><div className={classes.divi}><YoutubeSearchedForIcon className={classes.icon}/> Find jobs</div></Link>
      </Button>
     
      {localStorage.getItem("authToken") ? (
        <div>
      <Button
        variant="contained"
        className={classes.button}
      >
          <Link className={classes.link} to="/myApplications"><div className={classes.divi}><DescriptionIcon className={classes.icon}/>My Applications</div></Link>
 
      </Button>
      <Button
        variant="contained"
        className={classes.button}
      >
      <Link className={classes.link} to="/dailyEarning"><div className={classes.divi}><MonetizationOnIcon className={classes.icon}/>Daily earning</div></Link>
      </Button>
      <Button
        variant="contained"
        className={classes.button}
        onClick={logoutHandler}
      >
  <Link className={classes.link} to="/"> <div className={classes.divi}><LockIcon className={classes.icon}/> Log Out</div></Link></Button>
      </div>
      ):(<div>
         <Button
        variant="contained"
        className={classes.button}
      >
      <Link className={classes.link} to="/auth"><div className={classes.divi}><LockOpenIcon className={classes.icon}/> Login/Sign UP</div></Link>
      </Button>
      </div>)}
      </div>
    </div>
  );
}