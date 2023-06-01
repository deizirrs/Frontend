import { Box, Button, Grid, Typography } from '@mui/material'
import react, { useEffect } from 'react'
import "./Home.css";
import { Link } from 'react-router-dom';

function Home() {

    return (
        <>
            <Grid container direction="row" justifyContent="center" alignItems="center" style={{ backgroundColor: "#f1f0f2" }}>
                <Grid alignItems="center" item xs={6}>                   
                   
                    // <Box paddingX={5} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#34185c", fontWeight: "bold" }}>Bem vindo a nossa comunidade!!</Typography> 
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#34185c", fontWeight: "bold" }}>Encontre aqui oportunidades de crescimento!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                    <Link to={'/postagens'} className="textDecoration">  
                        <Box marginRight={1}>
                        </Box>
                        <Button className='botao-postagem' variant="outlined">Ver Postagens</Button>
                    </Link>    
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="../../../src/assets/images/imagem1.svg" alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>

            <Grid container direction="row-reverse" justifyContent="center" alignItems="center" style={{ backgroundColor: "#e1d3f5" }}>
                <Grid alignItems="center" item xs={6}>
                    <Box paddingX={20} >
                        <Typography variant="h3" gutterBottom color="textPrimary" component="h3" align="center" style={{ color: "#34185c", fontWeight: "bold" }}>Ou...</Typography>
                        <Typography variant="h5" gutterBottom color="textPrimary" component="h5" align="center" style={{ color: "#34185c", fontWeight: "bold" }}>Veja os nossos temas!</Typography>
                    </Box>
                    <Box display="flex" justifyContent="center">
                        <Box marginRight={1}>
                        </Box>
                        <Button className='botao-tema' variant="outlined">Ver Temas</Button>
                    </Box>
                </Grid>
                <Grid item xs={6} >
                    <img src="../../../src/assets/images/imagem2.svg" alt="logo" width="550px" height="300px" />
                </Grid>
                <Grid xs={12} style={{ backgroundColor: "white" }}>
                </Grid>
            </Grid>
        </>
    )
}

export default Home;