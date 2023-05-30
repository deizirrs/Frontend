import React from 'react';
import cx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { Box, Grid } from '@mui/material'
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import { useSoftRiseShadowStyles } from '@mui-treasury/styles/shadow/softRise';
import { useSlopeCardMediaStyles } from '@mui-treasury/styles/cardMedia/slope';
import { useN01TextInfoContentStyles } from '@mui-treasury/styles/textInfoContent/n01';
import TextInfoContent from '@mui-treasury/components/content/textInfo';
import imagem from '../../assets/images/IMG-5810 (1).jpg'
import logo from '../../assets/images/logo.png'
import kat from '../../assets/images/kat.jpeg'
import cau from '../../assets/images/cau.jpeg'
import deizi from '../../assets/images/deizi.jpeg'
import bianca from '../../assets/images/bianca.jpeg'
import michelle from '../../assets/images/michelle.jpeg'
import InstagramIcon from '@material-ui/icons/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import './Contatos.css'

const useStyles = makeStyles(() => ({
    root: {
        maxWidth: 304,
        margin: '20px',
    },
    content: {
        padding: 5,
    },
    avatar: {

        width: 100,
        height: 100,
        border: '2px solid #fff',
        margin: '-90px 95px 0 auto',
        '& > img': {
            margin: 0,
        },
    },
}));

export const Contatos = React.memo(function PostCard() {
    const cardStyles = useStyles();
    const mediaStyles = useSlopeCardMediaStyles();
    const shadowStyles = useSoftRiseShadowStyles();
    const textCardContentStyles = useN01TextInfoContentStyles();
    return (
        <Grid container spacing={1} direction="row" justifyContent="center" alignItems="center" >
            <Grid item  >
                <Card className={cx(cardStyles.root, shadowStyles.root)}>
                    <CardMedia
                        classes={mediaStyles}
                        image={logo}
                    />
                    <Avatar className={cardStyles.avatar} src={bianca} />
                    <CardContent className={cardStyles.content}>
                        <TextInfoContent
                            classes={textCardContentStyles}
                            heading={'Olá, sou a Bianca'}
                            body={
                                'Tenho 25 anos, sou desenvolvedora java full stack atualmente no bootcamp Generation. Possuo inglês avançado, experiência profissional na área de análise anti fraude e em análise de dados.'
                            }
                        />
                    </CardContent>
                    <Box px={2} pb={2} mt={-1}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/r4inha" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/bianca-luna-88aaa7116/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item >
                <Card className={cx(cardStyles.root, shadowStyles.root)}>
                    <CardMedia
                        classes={mediaStyles}
                        image={logo}
                    />
                    <Avatar className={cardStyles.avatar} src={cau} />
                    <CardContent className={cardStyles.content}>
                        <TextInfoContent
                            classes={textCardContentStyles}
                            heading={'Olá meu nome é Carolina'}
                            body={
                                ' Mas pode me chamar de Cau. Tenho 31 anos, moro no centro de são paulo, já fui geografa , professora voluntária, garçonete, conferente e monitora, sou autodidata e dedicada. Sou fluente em espanhol e aprendiz de inglês.'
                            }
                        />
                    </CardContent>
                    <Box px={2} pb={2} mt={-1}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/krolcorrea" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/caucorreasilva/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item >
                <Card className={cx(cardStyles.root, shadowStyles.root)}>
                    <CardMedia
                        classes={mediaStyles}
                        image={logo}
                    />
                    <Avatar className={cardStyles.avatar} src={deizi} />
                    <CardContent className={cardStyles.content}>
                        <TextInfoContent
                            classes={textCardContentStyles}
                            heading={'Olá, eu sou a Deiziane'}
                            body={
                                'Tenho  21 anos, sou Desenvolvedora Full Stack e moro em São Paulo. Estou cursando o 2º semestre de ADS. Sou proativa e possuo habilidades interpessoais, como resolução de conflitos e trabalho em equipe.'
                            }
                        />
                    </CardContent>
                    <Box px={2} pb={2} mt={-1}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/deizirrs" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/deizianer/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item >
                <Card className={cx(cardStyles.root, shadowStyles.root)}>
                    <CardMedia
                        classes={mediaStyles}
                        image={logo}
                    />
                    <Avatar className={cardStyles.avatar} src={imagem} />
                    <CardContent className={cardStyles.content}>
                        <TextInfoContent
                            classes={textCardContentStyles}
                            heading={'Olá, eu sou o Gabriel Lopes'}
                            body={
                                'Tenho 26 anos, moro em São Paulo. Sou Desenvolvedor Full Stack, formado em Matmética e atualmente finalizando mestrado área de Otimização. Ja trabalhei como assitente administrativo e professor. Particularmente gosto de estudar e reolver problemas.'
                            }
                        />
                    </CardContent>
                    <Box px={2} pb={2} mt={-1}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/Gabriellopesg9" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/gabriel-lopes-98591924b/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item >
                <Card className={cx(cardStyles.root, shadowStyles.root)}>
                    <CardMedia
                        classes={mediaStyles}
                        image={logo}
                    />
                    <Avatar className={cardStyles.avatar} src={kat} />
                    <CardContent className={cardStyles.content}>
                        <TextInfoContent
                            classes={textCardContentStyles}
                            heading={'Olá, eu sou a Katarina'}
                            body={
                                'Tenho 22 anos, moro em São Paulo. Sou Desenvolvedora FullStack, possuo experiência com  análise anti fraude e em gestão de pessoas. Sou formada em RH , pretendo ingressar na faculdade tech. Atualmente estudando inglês. Amo crescer e me desenvolver'
                            }
                        />
                    </CardContent>
                    <Box px={2} pb={2} mt={-1}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/302kt" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/katarina-pereira-freire-30080b181/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Grid>
            <Grid item >
                <Card className={cx(cardStyles.root, shadowStyles.root)}>
                    <CardMedia
                        classes={mediaStyles}
                        image={logo}
                    />
                    <Avatar className={cardStyles.avatar} src={michelle} />
                    <CardContent className={cardStyles.content}>
                        <TextInfoContent
                            classes={textCardContentStyles}
                            heading={'Olá, eu sou o Michelle'}
                            body={
                                'Tenho 30 anos, moro em São Paulo. Sou desenvolvedora Fullstack e estou cursando engenharia de software. Tenho  experiência em atendimento ao público, como comunicação eficaz, resolução de conflitos e trabalho em equipe.'
                            }
                        />
                    </CardContent>
                    <Box px={2} pb={2} mt={-1}>
                        <Box display="flex" alignItems="center" justifyContent="center">
                            <a href="https://github.com/MichelleGreghi" target="_blank">
                                <GitHubIcon className="redes" />
                            </a>
                            <a href="https://www.linkedin.com/in/michellegreghi/" target="_blank">
                                <LinkedInIcon className="redes" />
                            </a>
                        </Box>
                    </Box>
                </Card>
            </Grid>
        </Grid>
    );
});

export default Contatos;