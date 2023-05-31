import React, { ChangeEvent, useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { toast } from "react-toastify";
import { buscaId, put } from "../../../service/Service";
import User from "../../../models/User";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Box, Button, Grid, TextField, Typography } from "@material-ui/core";

function AtualizarPerfil() {
  let navigate = useNavigate();

  const [confirmarSenha, setConfirmarSenha] = useState<String>("");

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  const id = useSelector<UserState, UserState["id"]>((state) => state.id);

  const [user, setUser] = useState<User>({
    id: +id,
    nomeUsuario: "",
    usuario: "",
    senha: "",
    tipoUsuario: "",
    foto: "",
  });

  useEffect(() => {
    if (token == "") {
      toast.error("Você precisa estar logado!!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
      navigate("/login");
    }
  }, [token]);

  useEffect(() => {
    if (id !== undefined) {
      findById(id);
    }
  }, [id]);

  async function findById(id: string) {
    await buscaId(`/usuarios/${id}`, setUser, {
      headers: {
        Authorization: token,
      },
    });
  }

  function confirmarSenhaHandle(e: ChangeEvent<HTMLInputElement>) {
    setConfirmarSenha(e.target.value);
  }

  function updatedPerfil(e: ChangeEvent<HTMLInputElement>) {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  }

  async function onSubmit(e: ChangeEvent<HTMLFormElement>) {
    e.preventDefault();

    try {
      await put(`/usuarios/atualizar`, user, setUser, {
        headers: {
          Authorization: token,
        },
      });
      toast.success("Perfil atualizado com sucesso!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    } catch (error) {
      console.log(`Erro: ${error}`);
      toast.error("Ops... Algo deu Errado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: "colored",
        progress: undefined,
      });
    }
    back();
  }

  function back() {
    navigate("/perfil");
  }

  const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  const validarEmail = emailRegex.test(user.usuario);

  const nomeOk = user.nomeUsuario.length > 0 && user.nomeUsuario.length < 3;
  const usuarioOk = !validarEmail && user.usuario.length > 0;
  const vazio =
    user.nomeUsuario.length === 0 ||
    user.usuario.length === 0 ||
    confirmarSenha.length === 0;

  return (
    <Grid container direction="row" justifyContent="center" alignItems="center">
      <Grid item xs={6} alignItems="center">
        <Box paddingX={10}>
          <form onSubmit={onSubmit}>
            <Typography
              variant="h3"
              gutterBottom
              component="h3"
              align="center"
              className="textos2"
            >
              Atualizar
            </Typography>
            <TextField
              error={nomeOk}
              value={user.nomeUsuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPerfil(e)}
              id="nome"
              label="nome"
              variant="outlined"
              name="nome"
              margin="normal"
              fullWidth
              helperText={nomeOk ? "Digite um nome válido!" : ""}
            />
            <TextField
              error={usuarioOk}
              value={user.usuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPerfil(e)}
              id="usuario"
              label="usuario"
              variant="outlined"
              name="usuario"
              margin="normal"
              disabled
              fullWidth
              helperText={usuarioOk ? "Digite um e-mail válido!" : ""}
            />
            <TextField
              value={user.foto}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPerfil(e)}
              id="foto"
              label="foto"
              variant="outlined"
              name="foto"
              margin="normal"
              fullWidth
            />
            <TextField
              value={user.tipoUsuario}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPerfil(e)}
              id="tipo"
              label="Tipo Usuário"
              variant="outlined"
              name="tipo"
              margin="normal"
              fullWidth
            />
            <TextField
              error={
                user.senha !== undefined
                  ? user.senha.length > 0 && user.senha.length < 8
                  : false
              }
              value={user.senha}
              onChange={(e: ChangeEvent<HTMLInputElement>) => updatedPerfil(e)}
              id="senha"
              label="senha"
              variant="outlined"
              name="senha"
              margin="normal"
              type="password"
              fullWidth
              helperText={"A senha precisa ter no mínimo 8 caracteres"}
            />
            <TextField
              error={
                user.senha !== undefined && confirmarSenha !== user.senha
                  ? true
                  : false
              }
              value={confirmarSenha}
              onChange={(e: ChangeEvent<HTMLInputElement>) =>
                confirmarSenhaHandle(e)
              }
              id="confirmarSenha"
              label="confirmarSenha"
              variant="outlined"
              name="confirmarSenha"
              margin="normal"
              type="password"
              fullWidth
              helperText={"As senhas não conferem!"}
            />
            <Box marginTop={2} textAlign="center">
              <Link to="/perfil">
                <Button variant="contained" className="botaoCancelar">
                  Cancelar
                </Button>
              </Link>
              <Button
                type="submit"
                variant="contained"
                disabled={
                  nomeOk || usuarioOk || confirmarSenha !== user.senha || vazio
                    ? true
                    : false
                }
              >
                Atualizar
              </Button>
            </Box>
          </form>
        </Box>
      </Grid>
    </Grid>
  );
}

export default AtualizarPerfil;
