import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Modal from "react-bootstrap/Modal";
import ModalHeader from "react-bootstrap/ModalHeader";
import { Redirect } from "react-router-dom";
import { observer } from "mobx-react";
import ModalTitle from "react-bootstrap/ModalTitle";
import authStore from "../stores/authStore";
import ModalFooter from "react-bootstrap/ModalFooter";

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: "#ab4e52",
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#7F8778",
  },
}));

const Signin = () => {
  const classes = useStyles();
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const handleChange = (event) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    await authStore.signin(user);
    console.log(user);
    console.log(handleSubmit);

    if (!authStore.user) {
      handleShow();
    } else {
    }
  };

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <Container component="main" maxWidth="xs">
      {authStore.user ? <Redirect to="/" /> : ""}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>{/* <LockOutlinedIcon /> */}</Avatar>

        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            id="username"
            label="Username"
            name="username"
            autoComplete="username"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handleChange}
          />
          {/* <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          /> */}
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#f1f1f1"
            className={classes.submit}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
              <Modal.Title>??????????</Modal.Title>
            </Modal.Header>
            <Modal.Body>???????????? ???????????? ???? ???????? ???????? </Modal.Body>
            <Modal.Footer></Modal.Footer>
          </Modal>

          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default observer(Signin);
