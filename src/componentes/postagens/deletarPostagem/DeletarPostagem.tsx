import { Button, Card, CardActions, CardContent, Typography } from "@material-ui/core";
import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from "react-toastify";
import Postagem from '../../../models/Postagem';
import { buscaId, deleteId } from '../../../service/Service';
import { addToken } from "../../../store/token/Action";
import { UserState } from '../../../store/token/Reducer';
import './DeletarPostagem.css';

function DeletarPostagem() {

  let navigate = useNavigate();

  const { id } = useParams<{ id: string }>();

  const dispatch = useDispatch()

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  )

  const [post, setPosts] = useState<Postagem>()

  useEffect(() => {
    if (token === "") {
      toast.error('Usuário não autenticado!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
      navigate("/login")

    }
  }, [token])

  useEffect(() => {
    if (id !== undefined) {
      findById(id)
    }
  }, [id])

  async function findById(id: string) {
    try {
      await buscaId(`/postagens/${id}`, setPosts, {
        headers: {
          'Authorization': token
        }
      })
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      }
    }
  }

  async function sim() {
    navigate('/postagens')
    try {
      await deleteId(`/postagens/${id}`, {
        headers: {
          'Authorization': token
        }
      });
      toast.success('Postagem deletada com sucesso!', {
        position: 'top-right',
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: false,
        draggable: false,
        theme: 'colored',
        progress: undefined,
      });
    } catch (error: any) {
      if (error.response?.status === 403) {
        dispatch(addToken(''))
      } else {
        toast.error("Não foi possível deletar Postagem", {
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
  }

  function nao() {
    navigate('/postagens')
  }
  return (
    <>
      <Box m={2} className='box box-del' >
        <Card variant="outlined" >
          <CardContent className="box-deletar">
            <Box justifyContent="center">
              <Typography className='deseja-deletar' gutterBottom>
                Deseja deletar a Postagem?
              </Typography>
              <Typography className='texto-postagem' >
                {post?.titulo}
              </Typography>
            </Box>

          </CardContent>
          <CardActions className="box-deletar">
            <Box display="flex" justifyContent="center" ml={1.0} mb={2} >
              <Box mx={2}>
                <Button onClick={sim} variant="contained" className="marginLeft bntSim" size='large'>
                  Sim
                </Button>
              </Box>
              <Box>
                <Button onClick={nao} variant="contained" className='bntNao' size='large'>
                  Não
                </Button>
              </Box>
            </Box>
          </CardActions>
        </Card>
      </Box>
    </>
  );
}
export default DeletarPostagem;