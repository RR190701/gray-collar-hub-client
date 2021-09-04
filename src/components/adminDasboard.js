import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import AllJobs from './adminJobs';
import AllClients from './adminClients';
import AllApplication from './adminApplication';


function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`full-width-tabpanel-${index}`}
        aria-labelledby={`full-width-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box p={3}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
  };
  
  function a11yProps(index) {
    return {
      id: `full-width-tab-${index}`,
      'aria-controls': `full-width-tabpanel-${index}`,
    };
  }
  
  const useStyles = makeStyles((theme) => ({
      dashboard:{
          width:'100%',
          textAlign:'center',
          '& > p':{
              fontSize:'2.3rem',
              margin:'1rem 0 1.3rem',
              '& > strong':{
                color:"#FF4F5B"
            }
        }
      },
      tab:{
          width:'98%',
          margin:'auto',
          backgroundColor:'#fff'
      }
  }));

  
const AdminDasboard = () => {

    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);
  
    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    const handleChangeIndex = (index) => {
      setValue(index);
    };


    return (<div className={classes.dashboard}>
       <p><strong>Admin </strong>Dasboard</p>
        <AppBar className={classes.tab} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          textColor="secondary"
        >
          <Tab label="All jobs" {...a11yProps(0)} />
          <Tab label="All Clients" {...a11yProps(1)} />
          <Tab label="Applications" {...a11yProps(2)} />
          <Tab label="Users" {...a11yProps(3)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel value={value} index={0} dir={theme.direction}>
        <AllJobs></AllJobs>
        </TabPanel>
        <TabPanel value={value} index={1} dir={theme.direction}>
         <AllClients></AllClients>
        </TabPanel>
        <TabPanel value={value} index={2} dir={theme.direction}>
          <AllApplication></AllApplication>
        </TabPanel>
        <TabPanel value={value} index={3} dir={theme.direction}>
          Item four
        </TabPanel>
      </SwipeableViews>
        
     </div>  );
}
 
export default AdminDasboard;