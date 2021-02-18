import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Axios from "axios";
import Snackbar from "@material-ui/core/Snackbar";
import Slide from "@material-ui/core/Slide";
import Fade from "@material-ui/core/Fade";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
//import DeleteFunction from '../database/deleteData.php';

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
//import CardMedia from '@material-ui/core/CardMedia';
import Typography from "@material-ui/core/Typography";
import { Container, Grid, Grow } from "@material-ui/core";
import LinearProgress from "@material-ui/core/LinearProgress";
import Page from "./pages";
import Paper from "@material-ui/core/Paper";

function SlideTransition(props) {
  return <Slide {...props} direction="up" />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      height: theme.spacing(16),
    },
    close: {
      padding: theme.spacing(0.5),
    },
    flexGrow: 1,
    width: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  form: {
    marginLeft: "auto",
  },

  list: {
    height: "100%",
    width: "100%",
    textAlign: "center",
  },

  card: {
    maxWidth: "100%",
    height: 300,
    width: "100%",
  },
  golden: {
    color: "rgb(205, 112, 0)",
  },
  spinner: {
    display: "flex",
    justifyContent: "center",
  },

  paper: {
    height: "auto",
    padding: theme.spacing(2),
    margin: 25,
    width: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  paper1: {
    height: "auto",
    padding: theme.spacing(2),
    margin: 25,
    marginTop: 150,
    width: "auto",
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function Admin() {
  const [data, setData] = useState({ Title: "", Description: "" });
  const [enquiryData, setEnquiryData] = React.useState({ data: [] });
  const [image, setImage] = useState({ selectedFile: "" });
  const [msgError, setMsgError] = useState({ message: "", success: "" });
  const classes = useStyles();
  const [loading, setLoading] = React.useState(true);
  const [state, setState] = React.useState({
    open: false,
    Transition: Fade,
  });

  React.useEffect(() => {
    Axios.post(
      "http://localhost:81/Webandy/webandy/src/database/getenquiryform.php"
    )
      .then((response) => {
        console.log(response.data);
        setEnquiryData({ data: response.data });
        setLoading(false);
      })
      .catch((err) => console.log(err));
  }, []);

  const onChangeFile = (event) => {
    const picture = event.target.files[0];
    setData((prevSetData) => ({
      Title: prevSetData.Title,
      Description: prevSetData.Description,
    }));
    setImage({
      selectedFile: picture,
      //URL.createObjectURL(picture)
    });
    console.log(event.target.files[0]);
  };
  const handleClick = (Transition) => () => {
    setState({
      open: true,
      Transition,
    });
    if (!image.selectedFile || !data.Title || !data.Description) {
      setMsgError({
        message: "fill all the details",
      });
    } else {
      const contentData = new FormData();
      contentData.append("Title", data.Title);
      contentData.append("Description", data.Description);
      contentData.append(
        "Picture",
        image.selectedFile,
        image.selectedFile.name
      );

      Axios.post(
        "http://localhost:81/Webandy/webandy/src/database/post.php",
        contentData
      )
        .then((res) => {
          console.log(res);
          console.log(res);
          setMsgError({
            message: res.data,
          });
        })
        .catch((err) => {
          console.log(err.message);
        });
    }
  };

  const deleteEnquiry = (id) => {
    console.log(id);
  };

  const handleClose = () => {
    setState({
      ...state,
      open: false,
    });
  };
  return (
    <div className={classes.root}>
      <Paper elevation={5} className={classes.paper1}>
        <form className={classes.form} Validate autoComplete="off">
          <TextField
            id="outlined-basic"
            label="Title"
            variant="outlined"
            onChange={(event) => {
              const title = event.target.value;
              setData((prevSetData) => ({
                Title: title,
                Picture: prevSetData.Picture,
                Description: prevSetData.Description,
              }));
            }}
          />
          <br></br>
          <br></br>
          <TextField
            id="outlined-basic"
            label="Description"
            variant="outlined"
            onChange={(event) => {
              const description = event.target.value;
              setData((prevSetData) => ({
                Title: prevSetData.Title,
                Description: description,
                Picture: prevSetData.Picture,
              }));
            }}
          />
          <p className="title">Select Image:</p>
          <div style={{ marginBottom: 10 }}>
            <input type="file" onChange={onChangeFile} />
          </div>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClick(SlideTransition)}
          >
            Create Banner
          </Button>
        </form>
      </Paper>

      <Snackbar
        open={state.open}
        onClose={handleClose}
        TransitionComponent={state.Transition}
        message={msgError.message}
        key={state.Transition.name}
        action={
          <IconButton
            aria-label="close"
            color="inherit"
            className={classes.close}
            onClick={handleClose}
          >
            <CloseIcon />
          </IconButton>
        }
      />
      <div>
        <h1 style={{ textAlign: "center" }}>
          Our <span className={classes.golden}>Enquiry List </span>
        </h1>
        {loading ? (
          <LinearProgress />
        ) : enquiryData.data.length === 0 ? (
          <div>Error: There are no products in DB"</div>
        ) : (
          <div>
            <Container>
              <Grow in>
                <Grid container spacing={5} padding={10}>
                  {enquiryData.data.map((value, index) => (
                    <Paper elevation={5} className={classes.paper}>
                      <Card key={index.ID}>
                        <CardActionArea key={index.ID}>
                          <CardContent key={index.ID}>
                            <Typography
                              gutterBottom
                              variant="h6"
                              component="h2"
                            >
                              <p>
                                {" "}
                                <b>Full Name:</b> {value.FullName}
                              </p>
                            </Typography>
                            <Typography variant="h6" component="h5">
                              <p>
                                {" "}
                                <b>Email:</b> {value.Email}
                              </p>
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="p"
                            >
                              <p>
                                {" "}
                                <b>Message:</b> {value.Message}{" "}
                              </p>
                            </Typography>
                            <Typography
                              variant="body2"
                              color="textSecondary"
                              component="h5"
                            >
                              <p>
                                {" "}
                                <b>Date:</b> {value.Date}{" "}
                              </p>
                              <br></br>
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                        <CardActions key={index.ID}>
                          <Button
                            variant="outlined"
                            size="small"
                            color="primary"
                          >
                            Delete
                          </Button>
                        </CardActions>
                      </Card>
                    </Paper>
                  ))}
                </Grid>
              </Grow>
            </Container>
            <div>
              <Page p1={"This is Admin P1"} p2={"This is Admin P2"} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
