import React, { useEffect, useState } from "react";
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import axios from "axios";
import TextField from '@material-ui/core/TextField';
import admin from './../utils/admin.svg'
import { ToastContainer, toast, Zoom, Bounce } from 'react-toastify';

const useStyles = makeStyles((theme) => ({
    root: {
      width:'100%',
      textAlign:'center',
      marginTop:'3rem',

      '& p':{
        fontSize:'2.7rem',
        '& strong':{
            color:"#FF4F5B"
          }
      }
      
    },
    grid:{
        width:'80%',
        margin:'auto',
        display:'flex',
        justifyContent:'space-between',
        boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px',
        borderRadius:'5px'

    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    form_div:{
      boxSizing:'border-box',
  
    },
    form: {
        textAlign:'center',            
        display:'flex', 
        flexDirection:'column',   
        flexWrap:'wrap',
        width:'100%',
        padding:'3rem 1rem',
        '& > *': {
   
        
         width:"50%",
         margin: '1rem auto'
         
        },
      },

      login:{
          backgroundColor:'yellow',
          color:'#000',
          '&:hover':{
            backgroundColor:'yellow',
          }

      },
      left:{
        backgroundColor:'#FF4F5B',
        borderTopLeftRadius:'5px',
        borderBottomLeftRadius:'5px',
          '& img':{
             
              margin:'2.5rem auto'
          }
      },

 
  }));
  

  
const AdminLogin = ({history}) => {
    const classes = useStyles();
    const [errors, setErrors] = useState("");
    const [username, setuserName] = useState("");
    const [password, setpassword] = useState("");
    const popError = (errorMessage) => {

      toast.error(errorMessage, {
        className :"error-toast",
        position:toast.POSITION.BOTTOM_RIGHT
      });
    }
    const LoginSubmit = async (e) => {
  
      e.preventDefault();
  
      // const err = validate();
      // setErrors(err);
  
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
  
      try {
        const { data } = await axios.post(
          "https://pure-caverns-24063.herokuapp.com/api/auth/login",
          {username, password },
          config
        );
       
        
        localStorage.setItem("adminToken", data.token);
        // localStorage.setItem("username", data.username)
       history.push(`/admin/dasboard`);
      } catch (error) {
        popError(error.response.data.error);
        console.log(error.response.data.error);
        setTimeout(() => {
          setErrors("");
        }, 5000);
      }
    };
  
    return ( 
        <div className={classes.root}>
            <p><strong>Admin</strong> login</p>

            <Grid className={classes.grid} spacing={3}>

        <Grid className={classes.left} item xs={5}>
<img src={admin} width="70%" height=" 70%" alt="admin"></img>
        </Grid>
        <Grid className={classes.form_div} item xs={7}>
        <form onSubmit={LoginSubmit} className={classes.form} Validate>
      <TextField value={username} onChange={(e)=>setuserName(e.target.value)} id="outlined-basic" label="username" type ="text" variant="outlined" />
      <TextField value={password} onChange={(e)=>setpassword(e.target.value)}  id="outlined-basic" label="Password" type="password" variant="outlined" />
      <Button   type="submit" className={classes.login} variant="contained" color="primary">
        Login
      </Button>
    </form>
        </Grid>

      </Grid>
        </div>
     );
}
 
export default AdminLogin;