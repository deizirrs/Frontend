import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
    Box,
    Card,
    CardActions,
    CardContent,
    Button,
    Typography,
} from "@material-ui/core";

import Tema from "../../../models/Tema";
import { busca } from "../../../service/Service";
import { useSelector } from "react-redux";
import { UserState } from "../../../store/token/Reducer";
import { toast } from "react-toastify";

function ListaTema() {
    const [temas, setTemas] = useState<Tema[]>([])
    const token = useSelector<UserState, UserState["tokens"]>(
        (state) => state.tokens
    );
    let history = useNavigate();

    useEffect(() => {
        if (token === "") {
            toast.error("Você precisa estar logado!", {
                position: "top-right",
                autoClose: 2000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: false,
                draggable: false,
                theme: "colored",
                progress: undefined,
            });
            history("/login");
        }
    }, [token]);

    async function getTema() {
        await busca("/temas", setTemas, {
            headers: {
                Authorization: token,
            },
        });
    }

    useEffect(() => {
        getTema();
    }, [temas?.length]);
    return (
        <>
            {temas?.map((tema) => (
                <Box m={2} className='box'>
                    <Card variant="outlined">
                        <CardContent className='box-postagem'>
                            <Typography color="textSecondary" gutterBottom>
                                Tema
                            </Typography>
                            <Typography className='texto-tema' variant="h5">{tema.nome}</Typography>
                            <Typography>{tema.descricao}</Typography>
                        </CardContent>

                        <CardActions className='box-postagem'>
                            <Box display="flex" justifyContent="center" mb={1.5}>
                                <Link
                                    to={`/formularioTema/${tema.id}`}
                                    className="text-decorator-none"
                                >
                                    <Box mx={1}>
                                        <Button
                                            variant="contained"
                                            className="marginLeft button-atualizar"
                                            size="small"
                                            color="primary"
                                        >
                                            Atualizar
                                        </Button>
                                    </Box>
                                </Link>
                                <Link
                                    to={`/deletaTemas/${tema.id}`}
                                    className="text-decorator-nome"
                                >
                                    <Box mx={1}>
                                        <Button className="button-d" variant="contained" size="small" color="secondary">
                                            deletar
                                        </Button>
                                    </Box>
                                </Link>
                            </Box>
                        </CardActions>
                    </Card>
                </Box>
            ))}
        </>
    );
}
export default ListaTema;