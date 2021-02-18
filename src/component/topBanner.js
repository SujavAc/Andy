import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      textAlign: 'center',
         position: "absolute",
    left: "50%",
    top: "35%",
    transform: "translate(-50%, -50%)",
    color:'#fafafa',
    },
    paper: {
      padding: theme.spacing(6),
      textAlign: 'center',
      color: theme.palette.text.secondary,
      
    },
  }));

  export default function Title(props) {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Typography gutterBottom variant="h5" component="h2">
          {props.Title}
          
          </Typography>
         
          </Grid>
        </Grid>
      </div>
    );
  }