import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import NavBarApp from "../component/navbar";
import Feedback from "../component/feedback";
import Form from "../component/Form/openform";
import Expert from "../image/expertadvice.jpg";
import Footer from "../component/footer";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      width: "100%",
      height: theme.spacing(16),
    },
    flexGrow: 1,
    width: "auto",
    height: "auto",
  },
  paper: {
    height: "auto",
    padding: theme.spacing(2),
    margin: 25,
    width: "auto",
  },

  feedback: {
    height: "auto",
    padding: theme.spacing(2),
    margin: 25,
    width: "auto",
    background: "linear-gradient(170deg, #fff3e0 30%, #26c6da 90%)",
  },
  formPaper: {
    height: "auto",
    padding: theme.spacing(2),
    margin: 25,
    width: "auto",
    backgroundImage: "url(" + Expert + ")",
    backgroundSize: "cover",
  },
  image: {
    height: "auto",
    padding: theme.spacing(5),
    width: "auto",
    margin: 25,
    // backgroundImage: "url(" + Expert + ")",
    // backgroundSize: "cover",
    justifyContent: "center",
    textAlign: "center",
  },
  card: {
    height: "auto",
    justifyContent: "center",
    alignItems: "center",
  },
  media: {
    // height: 0,
    // paddingTop: '56.25%', // 16:9,
    // marginTop:'30'
  },
}));

export default function Pages(props) {
  const img1 = props.image1;
  const img2 = props.image2;
  const classes = useStyles();
  //const API_KEY = 'AIzaSyAw8IaQy2dgR_EgvAPAlM7K1V1iSmJJ_3A';

  return (
    <div className={classes.root}>
      <NavBarApp />
      <Paper elevation={5} className={classes.image}>
        <CardContent>
          <Typography gutterBottom variant="h5" component="h3">
            {props.Title}
          </Typography>
          
        </CardContent>
      </Paper>

      <Paper elevation={5} className={classes.image}>
        <Card>
          <CardActionArea >
            <CardMedia
              component="img"
              
              height="640"
              image={img1}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.pT2}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.p2}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>

      <Paper elevation={5} className={classes.image}>
        <Card>
          <CardActionArea>
            <CardMedia
              component="img"
              
              height="640"
              image={img2}
              
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {props.pT3}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {props.p3}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      </Paper>

      <Paper elevation={5} className={classes.feedback}>
        <Feedback />
      </Paper>
      <Paper elevation={5} className={classes.formPaper}>
        <Form />
      </Paper>
      <Footer />
    </div>
  );
}
