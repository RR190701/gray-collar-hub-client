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
    headerName: 'Job Id', 
    width: 160 },
    {
      field: 'clientId',
      headerName: 'Client Id',
      width: 150,
      editable: true,
    },
    {
      field: 'clientName',
      headerName: 'Client name',
      width: 190,
      editable: true,
    },
    {
      field: 'contractor',
      headerName: 'Contractor name',
      width: 190,
      editable: true,
    },
      {
        field: 'number',
        headerName: 'Phone number',
        width: 190,
        editable: true,
      }

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
    
const AllClients = ({history}) => { 
const classes = useStyles();
const [loader, setLoader] =useState(true); 
const [rows, setRows] = useState([]);



  let l = []  
  useEffect(() => {
    
    const fetchData = async () => {
        try {
    
    
          const { data } = await axios.get(`https://pure-caverns-24063.herokuapp.com/api/client/allClients`);
        
           
        
          data.ClientsData?.forEach((element, i) => {
            l.push( { id: i+1, clientId: element.clientId, clientName:element.org, number:element.phone,contractor: element.name },)
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
 
export default AllClients ;