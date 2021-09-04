import React from "react"
import './footer.css'
import FacebookIcon from '@material-ui/icons/Facebook';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import icon from './../utils/running-man.png';

const useStyles = makeStyles((theme) => ({

   
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
  
const Footer = () => {
    const classes = useStyles();
    return(
<footer class="footer">
             <div class="footer-left col-md-4 col-sm-6">
    <p class="about">
      <span> About the Project</span> An online Web-application for workers to earn money on daily basis. In covid crisis the demand of grey color workers has been increased by 25-30% so the major focus was on to provide delivery jobs to these workers.  

    </p>
    <div class="icons">
      <a href="#"><FacebookIcon/></a>
      <a href="#"><InstagramIcon/></a>
      <a href="#"><TwitterIcon/></a>
      <a href="#"><LinkedInIcon/></a>

    </div>
  </div>
  <div class="footer-center col-md-4 col-sm-6">
    <div>
      <i class="fa fa-map-marker"></i>
      <p><span> Street name and number</span> Delhi, India</p>
    </div>
    <div>
      <i class="fa fa-phone"></i>
      <p> (+91) 9324 7874 00</p>
    </div>
    <div>
      <i class="fa fa-envelope"></i>
      <p ><a href="#"> office@letsdeliever.com</a></p>
    </div>
  </div>
  <div class="footer-right col-md-4 col-sm-6">
  <div className={classes.left}>
  <img src ={icon} alt= "deliver-man" height="60"></img>
      <p style={{color: 'white'}}>Lets Deliver</p>
      </div>
    <p class="menu">
      <a href="#"> Home</a> |
      <a href="#"> About</a> |
      {/* <a href="#"> Services</a> | */}
      {/* <a href="#"> Portfolio</a> |
      <a href="#"> News</a> | */}
      <a href="#"> Contact</a>
    </p>
    {/* <p class="name"> Company Name &copy; 2016</p> */}
  </div>
      </footer>
    )
}
export default Footer