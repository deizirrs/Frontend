import React, { useState, useEffect, ChangeEvent } from "react";
import User from '../../models/User';
import { cadastroUsuario } from "../../service/Service";
import './CadastroUsuario.css'
import { Grid, Typography, Button, TextField } from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import { Box } from "@mui/material";

function CadastroUsuario() {
    let navigate = useNavigate();
    const [confirmarSenha, setConfirmarSenha] = useState<String>("")
    const [user, setUser] = useState<User>(
        {
            id: 0,
            nomeUsuario: '',
            usuario: '',
            senha: '',
            tipoUsuario: '',
            foto: ''
        })

    const [userResult, setUserResult] = useState<User>(
        {
            id: 0,
            nomeUsuario: '',
            usuario: '',
            senha: '',
            tipoUsuario: '',
            foto: ''
        })

    useEffect(() => {
        if (userResult.id != 0) {
            navigate("/login")

        }
    }, [userResult])


    function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
        setConfirmarSenha(e.target.value)
    }


    function updatedModel(e: ChangeEvent<HTMLInputElement>) {

        setUser({
            ...user,
            [e.target.name]: e.target.value
        })

    }
    async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
        e.preventDefault()
        if (confirmarSenha === user.senha) {
            await cadastroUsuario(`/usuarios/cadastrar`, user, setUserResult)
            alert('Usuario cadastrado com sucesso')
        } else {
            alert('Dados inconsistentes. Favor verificar as informações de cadastro.')
        }

    }
    return (
        <Grid container direction="row" justifyContent="center" alignItems="center" className='cor-fundo'>
            <Grid item className="imgCadastro" xs={6}>
            </Grid>

            <Grid item xs={6} alignItems="center" className="elementos">
                <Box className="box-cadastrar">
                    <form onSubmit={onSubmit}>
                        <Typography className="textoCadastro" color='textPrimary' align='center'>Cadastre-se</Typography>
                        <TextField className='custom-textfield' value={user.nomeUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='nomeUsuario' label='nome' variant="outlined" name='nomeUsuario' margin='dense'fullWidth/>
                        <TextField className='custom-textfield' value={user.usuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='usuario' label='usuario (e-mail)' variant="outlined" name='usuario' margin='dense' fullWidth />
                        <TextField className='custom-textfield' value={user.foto} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='foto' label='foto (link foto)' variant="outlined" name='foto' margin='dense'fullWidth />
                        <TextField className='custom-textfield' value={user.tipoUsuario} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='tipoUsuario' label='tipo de usuario (fisica/juridica)' variant="outlined" name='tipoUsuario' margin='dense' fullWidth />
                        <TextField className='custom-textfield' value={user.senha} onChange={(e: ChangeEvent<HTMLInputElement>) => updatedModel(e)} id='senha' label='senha (min: 8 caracteres)' variant="outlined" name='senha' margin='dense' type='password' fullWidth />
                        <TextField className='custom-textfield' value={confirmarSenha} onChange={(e: ChangeEvent<HTMLInputElement>) => confirmarSenhaHandle(e)} id='confirmarSenha' label='confirmarSenha' variant="outlined" name='confirmarSenha' margin='dense' type='password' fullWidth />

                        <Box marginTop={2} textAlign="center">

                            <Button type='submit' variant='contained' className='cadastrar'>
                                Cadastrar
                            </Button>

                            <Link to='/login'>
                                <Button variant='contained' className='cancelar' style={{ margin: '15px' }}>
                                    Cancelar
                                </Button>
                            </Link>

                        </Box>
                    </form>
                </Box>
            </Grid>
        </Grid>

    );
}

export default CadastroUsuario