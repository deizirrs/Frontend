// Importando os Componentes React Swiper
import { Swiper, SwiperSlide } from "swiper/react";

// Importando os estilos do Swiper
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// Importando seu CSS
import "./Carrossel.css";

// Importanto Componentes do Swiper
import { Autoplay, Pagination, Navigation } from "swiper";
import { Box, Typography } from "@material-ui/core";

function Carrossel() {
  return (
    <>
      <Box style={{ backgroundColor: "#e0aaff" }}
      >
        <Typography 
                      variant="h4"
                      gutterBottom
                      color="textPrimary"
                      component="h6"
                      align="center"
                      style={{ color: "#3c096c", fontWeight: "bold" }}
        >Bem-vinda à nossa comunidade!</Typography>


        <Swiper
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          pagination={{
            clickable: true,
          }}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
          }}
          navigation={true}
          modules={[Autoplay, Pagination, Navigation]}
          className="mySwiper"
        >
          <SwiperSlide>
            <img src="../../../src/assets/images/mulheres.png" alt="Imagem" />
          </SwiperSlide>

          <SwiperSlide>
            <img src="../../../src/assets/images/home.jpg" alt="Imagem" />
          </SwiperSlide>

          {/* <SwiperSlide>
                    <img src="../../../src/assets/images/rosas.jpg" alt="Imagem" />
                </SwiperSlide>

                <SwiperSlide>
                    <img src="../../../src/assets/images/imagem2.jpg" alt="Imagem" />
                </SwiperSlide> */}
        </Swiper>
        <Box style={{ backgroundColor: "#e0aaff" }}
                    display="flex">
            <Typography                       variant="h6"

                      gutterBottom
                      color="textPrimary"
                      component="h6"
                      style={{ color: "#3c096c", fontWeight: "bold" }}>Uma rede social dedicada ao empoderamento feminino, ao apoio mútuo e ao crescimento profissional. Aqui, você encontrará um espaço acolhedor e inspirador, onde mulheres de todas as áreas podem se conectar, aprender e se desenvolver.
Nossa missão é fornecer um ambiente seguro e inclusivo, onde você possa compartilhar suas conquistas, desafios e aspirações. Estamos aqui para encorajá-la a alcançar seus sonhos, independentemente do setor em que deseja atuar.</Typography>

        </Box>
      </Box>

    </>
  );
}

export default Carrossel;
