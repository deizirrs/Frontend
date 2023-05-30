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
                    <Box style={{backgroundColor: "#FF4D6D",height: "120px"}}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{color:"white"}}>Siga-nos nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/UFA-Uniao-Feminina-Agora" target="_blank"><GitHubIcon style={{fontSize: 60, color: "white"}}/> </a>
                            <a href="mailto:michelle.neves23@gmail.com" target="_blank"><MailOutlineIcon style={{fontSize: 60, color: "white"}}/> </a>
                        </Box>
                    </Box>
                    <Box style={{backgroundColor:"#FF4D6D", height:"68px"}}>
                        <Box paddingTop={0}>
                            <Typography align="center" gutterBottom style={{color:"white"}}>©️ 2023 Copyright</Typography>
                        </Box>
                        <Box paddingTop={0}>
                            <Typography  align="center" gutterBottom style={{color:"white"}}>Feito com ❤ por Bianca, Carolina, Deiziane, Gabriel, Katarina e Michelle.</Typography>
                    </Box>
                    </Box>
                </Grid>
           </Grid>
  ); 
  }
  return <>{footerComponent}</>;
}

export default Footer;