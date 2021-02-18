import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import GridList from "@material-ui/core/GridList";
import GridListTile from "@material-ui/core/GridListTile";
import GridListTileBar from "@material-ui/core/GridListTileBar";
import IconButton from "@material-ui/core/IconButton";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import Axios from "axios";
import Rating from "@material-ui/lab/Rating";
import Avatar from "@material-ui/core/Avatar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    height: "auto",
    flexWrap: "wrap",
    justifyContent: "space-around",
    overflow: "hidden",
    
  },
  gridList: {
    flexWrap: "nowrap",
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: "translateZ(7)",
    cellHeight:'auto',
    padding:theme.spacing(4),
  },
  title: {
    color: theme.palette.secondary.light,
  },
  titleBar: {
    background:
      "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)",
  },
  subtitle: {
    width: "auto",
    height: "auto",
  },

  avatar: {
    display: "flex",
    flexDirection: "rows",
    justifyContent: 'center',
    "& > *": {
      margin: theme.spacing(1),
    },
    padding:7,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
  rating: {
    height: "auto",
    display: "flex",
    flexDirection: "row",
    justifyContent: 'space-between',
    "& > * + *": {
      marginTop: theme.spacing(1),
    },
  },
}));

export default function SingleLineGridList() {
  const classes = useStyles();
  const [feedback, setFeedback] = useState({ Feedback: [] });

  useEffect(() => {
    Axios.post(
      "http://localhost:81/Webandy/webandy/src/database/getFeedback.php"
    )
      .then((response) => {
        setFeedback({ Feedback: response.data });
        console.log(response);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={2.5} justify="space-around">
        {feedback.Feedback.map((value) => (
          <GridListTile key={value.ID}>
            
            <div className={classes.avatar}>
              
              <Avatar
                alt="Remy Sharp"
                src={`data:image/jpeg;base64,${value.Image}`}
                className={classes.large}
              />
              {value.Message}
              </div>
              {/* <img src={`data:image/jpeg;base64,${value.Image}`}/> */}
              <div className={classes.rating}>
                <Rating
                  name="read-only"
                  defaultValue={value.Rating}
                  size="large"
                  readOnly
                />
                {value.Date}
              </div>
            
            <GridListTileBar
              titlePosition="bottom"
              title={value.Email}
              classes={{
                root: classes.titleBar,
                title: classes.title,
              }}
              
              actionIcon={
                <IconButton
                  actionPosition="right"
                  aria-label={`star ${value.FullName}`}
                  
                >
                    {value.FullName}
                </IconButton>
              }
            />
          </GridListTile>
        ))}
      </GridList>
    </div>
  );
}
