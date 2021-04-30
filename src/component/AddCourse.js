import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";

import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

import { observer } from "mobx-react";
import courseStore from "../stores/courseStore";
const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%",
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    backgroundColor: "#ab4e52",
  },
}));

const AddCourse = () => {
  const classes = useStyles();

  const [course, setCourse] = useState({
    startCourse: "",
    enddate: "",
    name: "",
  });

  const handleChange = (event) => {
    console.log(course);
    setCourse({ ...course, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    console.log(course);
    console.log(handleSubmit);

    event.preventDefault();

    courseStore.creatCourse(course);
    alert = "لقد تم اضافة الكورس بنجاح";
    window.location = "/courses";
  };

  return (
    <Container flexDirection="rtl" component="main" maxWidth="xs">
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <CssBaseline />
      <div className={classes.paper}>
        <Typography component="h1" variant="h5">
          اضافة فصل دراسي
        </Typography>
        <form className={classes.form} noValidate>
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            label="اسم الفصل الدراسي"
            name="name"
            value={course.name}
            type="text"
            onChange={handleChange}
          />
          <TextField
            variant="outlined"
            margin="normal"
            fullWidth
            autoFocus
            value={course.startCourse}
            name="startCourse"
            type="text"
            flexDirection="rtl"
            onChange={handleChange}
            label="تاريخ بداية الكورس"
          />
          <TextField
            variant="outlined"
            margin="normal"
            required
            fullWidth
            autoFocus
            label="تاريخ نهاية الكورس"
            value={course.enddate}
            name="enddate"
            type="text"
            flexDirection="rtl"
            onChange={handleChange}
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="#f1f1f1"
            className={classes.submit}
            onClick={handleSubmit}
          >
            اضافة
          </Button>
          <Grid container>
            <Grid item xs></Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};
export default observer(AddCourse);
