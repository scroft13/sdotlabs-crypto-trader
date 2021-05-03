import React from "react";
import { makeStyles } from "@material-ui/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
//import IconButton from "@material-ui/core/IconButton";
//import MenuIcon from "@material-ui/icons/Menu";
import { useAuth } from "../Contexts/AuthContext";
import { Link } from "react-router-dom";
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles((theme) => ({
  brand: {
    display: "flex",
    alignItems: "center",
    "& a": {
      textDecoration: "none",
    },
  },
  brandName: {
    marginLeft: "10px",
    fontSize: "20px",
    color: "white",
    fontWeight: 500,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  headerLink: {
    paddingLeft: "10px",
    color: "white",
    textDecoration: "none",
    fontSize: "20px",
  },
}));
export default function Navbar() {
  const classes = useStyles();
  const brandComponent = (
    <div className={classes.brand}>
      <Link to="/">
        <img src={`logo192-white.png`} alt="the logo" width={32} height={32} />
      </Link>
      <Link to="/">
        <Typography className={classes.brandName} component="p">
          CryptoTrader
        </Typography>
      </Link>
    </div>
  );
  const { currentUser } = useAuth();

  return (
    <AppBar position="fixed">
      <Toolbar>
        {brandComponent}
        {currentUser ? (
          <Link to="/profile">
          <Avatar />
          </Link>
        ) : (
          <div className={classes.menuLinks}>
            <Link to="/login" className={classes.headerLink}>
              Login
            </Link>
            <Link to="/singup" className={classes.headerLink}>
              Sign Up
            </Link>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}
