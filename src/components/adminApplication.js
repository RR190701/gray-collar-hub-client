import React ,{useState, useEffect} from "react";
import Loader from "react-loader-spinner";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import { DataGrid,
  filterGridStateSelector,
  GridToolbarContainer,
  GridToolbarExport, } from '@material-ui/data-grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import TextField from '@material-ui/core/TextField';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import LinearProgress from '@material-ui/core/LinearProgress';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function CustomToolbar() {
    return (
      <GridToolbarContainer>
        <GridToolbarExport />
      </GridToolbarContainer>
    );
  }

  //columns
const columns = [
    { field: 'id', 
    headerName: 'Id', 
    width: 160 },
    { field: 'jobId', 
    headerName: 'Job Id', 
    width: 160 },
    { field: 'userId', 
    headerName: 'User Id', 
    width: 160 },
    { field: 'jobName', 
    headerName: 'Job Title', 
    width: 160 },
    { field: 'name', 
    headerName: 'Full Name', 
    width: 160 },
    { field: 'address', 
    headerName: 'Address', 
    width: 160 },
    { field: 'aadhar', 
    headerName: 'Aadhar Number', 
    width: 160 },
    { field: 'pan', 
    headerName: 'Pan Card Number', 
    width: 160 },
    { field: 'license', 
    headerName: 'License', 
    width: 160 },
    { field: 'mobile', 
    headerName: 'Phone Number', 
    width: 160 },
    { field: 'mobile', 
    headerName: 'Phone Number', 
    width: 160 },
    { field: 'date', 
    headerName: 'Application date', 
    width: 160 },
    { field: 'status', 
    headerName: 'Application Status', 
    width: 160,

    editable: true }
  ];

  //style
const useStyles = makeStyles((theme) => ({
    loader:{
        margin:'9rem auto'
    },
    
    allJobs:{
        textAlign:'left',
        '& > button':{
            backgroundColor:'yellow',
            textTransform:"none",
            color:'black',
            marginBottom:'1rem',
    
            '&:hover':{
                backgroundColor:'yellow',
            }
        }
    },
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin:'auto'
      },
      paper: {
        backgroundColor: theme.palette.background.paper,
        border: '.5px solid #000',
        borderRadius:'5px',
        width:'60%',
        boxShadow: theme.shadows[5],
        paddingBottom: theme.spacing(4, 2),
        textAlign:'center',
        '& > p':{
         fontSize:'2rem',
         margin:'1.4rem 0 0 0',
         '& > strong':{
             color:'#FF4F5B'
         }
    
        }
    
      },
      form:{
          display:'flex',
          justifyContent:'space-between',
          width:'100%',
          flexWrap:'wrap',
          padding:'1rem',
          boxSizing:'border-box',
        '& > *':{
            margin:'1rem',
            width:'28%',
            
        }
      },
      addButton:{
        backgroundColor:'yellow',
        textTransform:"none",
        color:'black',
        width:'200px',
        margin:'1rem auto 1.3rem',
    
        '&:hover':{
            backgroundColor:'yellow',
        }
      },
      bigLength:{
        width:'62%'
      }
      }));
    
const AllApplication= ({history}) => { 
const classes = useStyles();
const [loader, setLoader] =useState(true); 
const [rows, setRows] = useState([]);

const handleEditRowsModelChange = React.useCallback((model) => {

    const row =  Object.keys(model)-'0';
    const cell = {...model[`${row}`]}
    const fieldArray = Object.keys(cell);
    const field = Object.keys(cell)[0];
    const value = {...cell[`${field}`]};
  
    console.log(row);
  
  console.log(fieldArray[0],value["value"]);
  
  
  }, []);

  let l = []  
  useEffect(() => {
    
    const fetchData = async () => {
        try {
    
    
          const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/apply/adminApplications`);
          console.log(data);
        
           
        
          data.allApplications?.forEach(({jobName, jobId, userId, address, name, aadhar, pan, license, mobile, date, status}, i) => {
            const appDate = new Date(date);
            l.push( { id: i+1, jobId, jobName,userId, address, name,aadhar, pan, license, mobile,
                date:`${appDate.getDate()}/${appDate.getMonth()}/${appDate.getFullYear()}`,
            status},)
          })
          setRows( prevSate => {
            return [...prevSate, ...l]})

          setLoader(false)
          console.log(l)
        
        } catch (error) {
          console.log(error.response.data.error);
        }
      };
      fetchData();
    },[history]);


    return (<div>
        {
            loader?(
                <div>
               <Loader
               className={classes.loader}
                type='TailSpin'
                color="#FF4F5B"
                height={80}
                width={80}
              />
              </div>
            ):(
        <div className={classes.allJobs}>
         <ToastContainer />   
      <div style={{ height: 450, width: '100%' }}>
                <DataGrid
                  rows={rows}
                  columns={columns}
                  pageSize={5}
                  onEditRowsModelChange={handleEditRowsModelChange}
                  disableSelectionOnClick      
                  components={{
                    Toolbar: CustomToolbar,
                  }}  
  
                />
              </div>
              </div>
            )
        }
    </div>
          );
}
 
export default AllApplication;