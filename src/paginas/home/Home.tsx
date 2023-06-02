import { Box, Grid } from "@mui/material";
import react, { useEffect } from "react";
import "./Home.css";
import Carrossel from "../../componentes/carrossel/Carrossel";

function Home() {
return (
    <>
      <Grid
      display="flex"
        container
        direction="row"
        justifyContent="center"
        alignItems="center"
        style={{ backgroundColor: "#c77dff" }}
      >
        <Grid >
          <Box>
            <Box
              style={{ color: "white", fontWeight: "bold" }}
            >
                      <Grid >
          <img
            className="imagemLogo"
            src="../../../src/assets/images/ufa_logo.roxo.png"
            alt=""
          />
        </Grid>
            </Box>
          </Box>
        </Grid>


      </Grid>

        <Grid container style={{ marginTop: "2px" }}>
            <Grid item xs={12}>
                <Carrossel />
            </Grid>
        </Grid> 


    </>
  );
}

export default Home;