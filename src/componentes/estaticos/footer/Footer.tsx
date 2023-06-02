import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import { useSelector } from 'react-redux';
import { UserState } from '../../../store/token/Reducer';

function Footer(){
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
      );

  var footerComponent;

  if(token !== "") {
  footerComponent = (

           <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12} >
                    <Box style={{backgroundColor: "#9b72cf",height: "52px"}}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h6" align="center" gutterBottom style={{color:"#2f184b"}}>Siga-nos nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/UFA-Uniao-Feminina-Agora" target="_blank"><GitHubIcon style={{fontSize: 30, color: "#2f184b"}}/> </a>
                            <a href="mailto:michelle.neves23@gmail.com" target="_blank"><MailOutlineIcon style={{fontSize: 30, color: "#2f184b"}}/> </a>
                        </Box>
                        <Box paddingTop={0}>
                            <Typography  align="center" gutterBottom style={{color:"#2f184b"}}>©️ 2023 Copyright</Typography>
                         </Box>
                    </Box>
                    <Box style={{backgroundColor:"#9b72cf", height:"68px"}}>
                        {/* <Box paddingTop={0}> */}
                            {/* <Typography align="center" gutterBottom style={{color:"#2f184b"}}>©️ 2023 Copyright</Typography> */}
                        {/* </Box> */}
                        {/* <Box paddingTop={0}>
                            <Typography  align="center" gutterBottom style={{color:"#2f184b"}}>©️ 2023 Copyright</Typography>
                         </Box> */}
                    </Box>
                </Grid>
           </Grid>
  ); 
  }
  return <>{footerComponent}</>;
}

export default Footer;