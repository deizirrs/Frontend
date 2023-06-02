import React, {useState} from 'react'
import { useNavigate } from "react-router-dom";
import { AppBar, Tab, Tabs} from '@material-ui/core';
import {Box} from '@mui/material';
import { TabContext, TabPanel } from '@material-ui/lab';
import './TabHome.css';
import Sobre from '../../sobre/Sobre';
import Missao from '../../missao/Missao';


function TabHome() {
    const navigate = useNavigate();

    const [value, setValue] = useState('1')
    function handleChange(event: React.ChangeEvent<{}>, newValue: string){
        setValue(newValue);
    }
  return (
    <>
      <TabContext value={value}>
        <AppBar position="static" className='fundoAppbar' style={{backgroundColor:"#c77dff"}}>
          <Tabs centered onChange={handleChange}>
            <Tab label="Sobre Nós" value="1" style={{color:"#3c096c", fontWeight: "bold"}}/>
            <Tab label="Missão" value="2" style={{color:"#3c096c", fontWeight: "bold"}}/>
            <Tab label="Junte-se a nós" value="3" style={{ color: "#3c096c", fontWeight: "bold" }} onClick={() => navigate("/cadastrar")} />
            <Tab label="Login" value="4" style={{ color: "#3c096c", fontWeight: "bold" }} onClick={() => navigate("/login")} />
          </Tabs>
        </AppBar>
        <TabPanel value="1" style={{backgroundColor:'#F4ECF7'}}>
          <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Sobre />
          </Box>
        </TabPanel>
        <TabPanel value="2" style={{backgroundColor:'#F4ECF7'}}>
        <Box display="flex" flexWrap="wrap" justifyContent="center">
            <Missao />
          </Box>
        </TabPanel>
      </TabContext>
    </>
  );
}
export default TabHome;