

import { Box, Grid, Typography, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import Carrossel from "../../componentes/carrossel/Carrossel";
import Sobre from "../../paginas/sobre/Sobre";
import TabHome from "./tabhome/TabHome";
import Missao from "../missao/Missao";


function Home() {
  const [tabIndex, setTabIndex] = useState(0);

  const [value, setValue] = useState('1')
  function handleChange(event: React.ChangeEvent<{}>, newValue: string) {
    setValue(newValue);
  }

  return (
    <>
      <Grid
        container
        // direction="row"
        // justifyContent="center"
        // alignItems="center"
        style={{ backgroundColor: "#c77dff" }}
      >
        <Grid >
          <Box>
            <Box>
              <Grid >
                <img
                  className="imagemLogo"
                  src="../../../src/assets/images/ufa_logo.roxo.png"
                  alt=""
                  style={{ width: '94px', height: '80px' }} // Ajuste o tamanho conforme desejado
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

      <Box sx={{ width: "100%" }}>

        <TabHome />
      </Box>
      )

    </>
  );
}
export default Home;