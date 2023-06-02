import React, {ChangeEvent, useState, useEffect} from 'react';
import './Login.css';
import { Box, Grid, Button, TextField, Typography } from '@material-ui/core';
import { Link, useNavigate } from 'react-router-dom';
import useLocalStorage from 'react-use-localstorage';
import 'react-toastify/dist/ReactToastify.css'
import { login } from '../../service/Service';
import UserLogin from '../../models/userLogin'
import { addId, addToken } from '../../store/token/Action';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

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
         
            await login('/usuarios/logar', userLogin, setRespUserLogin)
            toast.success('Login efetuado com sucesso!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        } catch (error) {
   
            toast.error('Erro ao efetuar login! Verifique os dados do Usuário!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: 'colored',
                progress: undefined,
            });
        }
    }


    return(
        <Grid container direction='row' justifyContent='center' alignItems='center' className='cor-fundo'>
            <Grid alignItems='center' xs={6}>
                <Box paddingX={20} className='box-login' justifyContent='center'>
                    <form onSubmit={onSubmit}>
                        <Typography variant='h3' gutterBottom component='h3' align='center' className='entrar'>Entrar</Typography>
                        <TextField className='campos-logar' value={userLogin.usuario} onChange={(e: ChangeEvent<HTMLInputElement>)=>updatedModel(e)} id='usuario' label='usuario' variant='outlined' name='usuario' margin='normal' fullWidth />
                        <TextField value={userLogin.senha} onChange={(e: ChangeEvent<HTMLInputElement>)=> updatedModel(e)} id='senha' label='senha' variant='outlined' name='senha' margin='normal' type='password' fullWidth />
                        <Box marginTop={2} textAlign='center' justifyContent='center'>
                                <Button type='submit' variant='contained' className='botao' >
                                    Logar
                                </Button>
                        </Box>
                    </form>
                    <Box display='flex' justifyContent='center' marginTop={2} >
                        <Box marginRight={1} justifyContent='center'>
                            <Typography variant='subtitle1' gutterBottom align='center' className='nao-tem-conta'>Não tem uma conta?</Typography>
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