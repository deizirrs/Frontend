import React, {ChangeEvent, useState, useEffect} from 'react';
import './Login.css';
import { Box, Grid, Button, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import { login } from '../../service/Service';
import UserLogin from '../../models/userLogin'
import { addId, addToken } from '../../store/token/Action';
import { useDispatch } from 'react-redux';

function Login(){
    let navigate = useNavigate();
    
    const dispatch = useDispatch();

    // const [token, setToken] =useState("");

    const [userLogin, setUserLogin] = useState<UserLogin>(
        {
            id: 0,
            usuario: "",
            senha: "",
            token: ""
        });

    const [respUserLogin, setRespUserLogin] = useState<UserLogin>({
        id: 0,
        usuario: "",
        senha: "",
        token: "",
      });

    function updatedModel(e: ChangeEvent<HTMLInputElement>) {
        setUserLogin({
            ...userLogin,
            [e.target.name]: e.target.value,
        });
    }

    // useEffect(() => {
    //     if (token !== '') {
    //         dispatch(addToken(token))
    //         navigate('/home')
    //     }
    // }, [token])

    useEffect(() => {
        if (respUserLogin.token !== '') {
          console.log(respUserLogin.token)
          console.log(respUserLogin.id)
          dispatch(addToken(respUserLogin.token));
          dispatch(addId(respUserLogin.id.toString()));
          navigate("/home");
        }
      }, [respUserLogin.token]);

    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            await login(`/usuarios/login`, userLogin, setRespUserLogin)

            alert('Usuário logado com sucesso!')
        } catch (error) {
            alert('Dados do usuário inválido. Erro ao logar')

        }


    }

    return(
        <Grid container direction='row' justifyContent='center' alignItems='center'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} style={{backgroundColor:"white"}}>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='textos1'>Entrar</Typography>
                        <TextField value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center'>
                                <Button type='submit' variant='contained' className='botao'>
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2} >
                        <Box marginRight={1}  >
                            <Typography variant='subtitle1' gutterBottom align='center' style={{color: "#FF4D6D"}}>Não tem uma conta?</Typography>
                        </Box>
                        <Link to='/cadastrar'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='textos1'>Cadastre-se</Typography>
                        </Link>
                    </Box>
                </Box>    
            </Grid>
            <Grid xs={6} className='imagem'>
                
            </Grid>
        </Grid>

    )
}

export default Login;