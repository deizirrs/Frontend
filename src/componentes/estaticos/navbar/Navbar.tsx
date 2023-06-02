import React, { useState } from "react";
import {AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText} from "@material-ui/core";
import { Link, useNavigate } from "react-router-dom";
import MenuIcon from "@material-ui/icons/Menu";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { UserState } from "../../../store/token/Reducer";
import { addToken } from "../../../store/token/Action";

function Navbar() {
  const dispatch = useDispatch();

  const token = useSelector<UserState, UserState["tokens"]>(
    (state) => state.tokens
  );

  let navigate = useNavigate();

  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = (open: any) => (event: any) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setIsDrawerOpen(open);
  };

  function goLogout() {
    dispatch(addToken(""));

    toast.info("Usuário deslogado!", {
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

  var navbarComponent;

  if (token !== ""){
navbarComponent = (
 
      <AppBar position="static" style={{ backgroundColor: "#996fcf" }}>
        <Toolbar variant="dense">
          
          <Link to="/home" className="text-decorator-none">
            <img
              src="src/assets/images/logo_ufa_sem_fundo.png"
              alt="Logo ufa"
              width="100px"
              height="100px"
            />
          </Link>
          <Box marginLeft="auto">
            <IconButton
              edge="end"
              style={{ color: "#ff0054" }}
              aria-label="menu"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer
              anchor="right"
              open={isDrawerOpen}
              onClose={toggleDrawer(false)}
            >
              <List style={{ backgroundColor: "#ffb3c6" }}>
                <Link to="/home" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText primary="Home" style={{ color: "#ff0054" }} />
                  </ListItem>
                </Link>
                <Link to="/formularioPostagem" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText
                      primary="Criar Postagem"
                      style={{ color: "#ff0054" }}
                    />
                  </ListItem>
                </Link>
                <Link to="/sobre" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText
                      primary="Sobre"
                      style={{ color: "#ff0054" }}
                    />
                  </ListItem>
                </Link>
                <Link to="/postagens" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText
                      primary="Postagens"
                      style={{ color: "#ff0054" }}
                    />
                  </ListItem>
                </Link>
                <Link to="/temas" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText
                      primary="Temas"
                      style={{ color: "#ff0054" }}
                    />
                  </ListItem>
                </Link>
                <Link to="/formularioTema" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText
                      primary="Cadastrar Temas"
                      style={{ color: "#ff0054" }}
                    />
                  </ListItem>
                </Link>
                <Link to="/contatos" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText
                      primary="Contatos"
                      style={{ color: "#ff0054" }}
                    />
                  </ListItem>
                </Link>
                <Link to="/perfil" className="text-decorator-none">
                  <ListItem button>
                    <ListItemText
                      primary="Perfil"
                      style={{ color: "#ff0054" }}
                    />
                  </ListItem>
                </Link>
                {/* <Link to="/login" className="text-decorator-none"> */}
                <ListItem button onClick={goLogout}>
                  <ListItemText primary="Logout" style={{ color: "#ff0054" }} />
                </ListItem>
                {/* </Link> */}
              </List>
            </Drawer>
          </Box>
        </Toolbar>
      </AppBar>
);
}
return <>{navbarComponent}</>;
}

export default Navbar;

