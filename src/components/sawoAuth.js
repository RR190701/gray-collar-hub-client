import React from 'react';
import Sawo from "sawo";
import { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
form:{
    width:'400px',
    height:'400px',
    margin:'0 auto'

},
auth:{
    width:'100%',
    textAlign:'center',
    '& > p':{
       fontSize:'2rem',
       marginTop:'3rem'
    },     
     '& strong':{
        color:"#FF4F5B"
      }

}
      }));


const Sawolabs = ({history}) => {
    
const classes = useStyles();
    const [payload, setPayload] = useState({});

    useEffect(()=>{

        var config = {
            // should be same as the id of the container created on 3rd step
            containerID: "sawo-container",
            // can be one of 'email' or 'phone_number_sms'
            identifierType: "phone_number_sms",
            // Add the API key copied from 2nd step
            apiKey: "21ba0674-e5c2-4aec-b55f-da596c1de7fb",
            // Add a callback here to handle the payload sent by sdk
            onSuccess: (payload) => {
                console.log(payload)
                localStorage.setItem("authToken", payload.verification_token);
                localStorage.setItem("userId", payload.user_id);
                localStorage.setItem("phone", payload.identifier);
               history.push(`/`);
            },
        };
        let sawo = new Sawo(config);
        sawo.showForm()
    },[])
    
    return ( 
        <div className={classes.auth}>
            <p>Easy <strong>Sawo login/Sign Up</strong>, lets go passwordless </p>
        <div id="sawo-container"className={classes.form}></div> 
        </div>
        );
}
 
export default Sawolabs;