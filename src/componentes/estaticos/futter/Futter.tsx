import React from 'react';
import { Typography, Box, Grid } from '@material-ui/core';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

function Footer(){
    return(
        <>
           <Grid container direction="row" justifyContent="center" alignItems="center">
                <Grid alignItems="center" item xs={12} >
                    <Box style={{backgroundColor: "#DDA0DD",height: "120px"}}>
                        <Box paddingTop={1} display="flex" alignItems="center" justifyContent="center">
                            <Typography variant="h5" align="center" gutterBottom style={{color:"#800F2F"}}>Siga-nos nas redes sociais</Typography>
                        </Box>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/UFA-Uniao-Feminina-Agora" target="_blank"><GitHubIcon style={{fontSize: 60, color: "#800F2F"}}/> </a>
                            <a href="mailto:michelle.neves23@gmail.com" target="_blank"><MailOutlineIcon style={{fontSize: 60, color: "#800F2F"}}/> </a>
                        </Box>
                    </Box>
                    <Box style={{backgroundColor:"#DDA0DD", height:"68px"}}>
                        <Box paddingTop={0}>
                            <Typography align="center" gutterBottom style={{color:"#C9184A"}}>©️ 2023 Copyright</Typography>
                        </Box>
                        <Box paddingTop={0}>
                            <Typography  align="center" gutterBottom style={{color:"#800F2F"}}>Feito com ❤ por Bianca, Carolina, Deiziane, Gabriel, Katarina e Michelle.</Typography>
                    </Box>
                    </Box>
                </Grid>
           </Grid>
        </>
    )
}

export default Footer;