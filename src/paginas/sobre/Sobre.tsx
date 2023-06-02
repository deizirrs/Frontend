import { Box, Grid } from '@material-ui/core';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

function Sobre(){
    return (    
        <>
       <Grid container direction="row" style={{ backgroundColor: "#e1d3f5"}}>
            <Grid item xs={12}>
                <Box paddingX={20}>
                    <Typography variant="h3" gutterBottom color="textPrimary" component="h6" align="center" style={{color: "#34185c", fontWeight: "bold"}} >Sobre</Typography>
                    <Typography variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{color: "#34185c"}}>
                        UFA (União Feminina Agora), uma poderosa rede social dedicada a unir mulheres e oferecer um apoio significativo em diversas áreas.
                        Nosso principal objetivo é promover a empregabilidade feminina, fornecendo um espaço para divulgação de cursos e habilidades profissionais,
                        além de oferecer uma plataforma para que as mulheres possam vender seus produtos e serviços.
                        Na UFA, acreditamos que a união faz a força. Estamos comprometidos em criar uma comunidade inclusiva e solidária, onde as mulheres possam se conectar, 
                        compartilhar conhecimentos e experiências, além de oferecer suporte mútuo. Queremos oferecer uma plataforma que vá além das interações sociais, 
                        fornecendo recursos práticos e oportunidades reais de crescimento profissional.
                        Por meio da UFA, as mulheres terão acesso a uma ampla gama de recursos, como listagens de empregos, informações sobre cursos e treinamentos,
                        bem como um mercado virtual exclusivo para que possam comercializar seus produtos e serviços de forma direta e eficiente.
                        Acreditamos na capacidade das mulheres de alcançar o sucesso em todas as esferas da vida e estamos comprometidos em fornecer um ambiente seguro,
                        empoderador e inspirador para que isso aconteça. Na UFA, você encontrará uma comunidade vibrante de mulheres prontas para apoiá-la em sua jornada.
                    </Typography>
                    <Typography  variant="h6" gutterBottom color="textPrimary" component="h6" align="center" style={{color: "black", fontWeight: "bold"}}>
                        Junte-se a nós na UFA e faça parte dessa incrível rede social criada especialmente para você, MULHER determinada a conquistar seus objetivos. Juntas, iremos mais longe!
                    </Typography>
                </Box>
            </Grid>
        </Grid>
        </>
    )
}

export default Sobre;