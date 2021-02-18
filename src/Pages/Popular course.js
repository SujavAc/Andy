import React, {useEffect, useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Image from 'react-image-file';
import Footer from "../component/footer";
import Axios from 'axios';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Page from './pages';
import Banner from '../component/topBanner';
import Course from '../image/study-in-australia.jpg';

const useStyles = makeStyles((theme)=>({
root: {
    maxWidth: 'auto',
    
  },
  media: {
    height: 400,
    width:450,
    
    
  },
  contentData:{
    width:'100%',
    height:'100%',
    marginTop:theme.spacing(15),
    
    
  },
  data:{
   width:'430px',
    height:'350px',
    padding:'30px',
    display:'inline-block',
    [theme.breakpoints.up('sm')]: {
      width:'375px',
    height:'200px',
    },
  },
  paper: {
    height: "auto",
    padding: theme.spacing(2),
    margin: 25,
    width: "auto",
    backgroundColor: theme.palette.background.paper,
  },
  banner: {
    height: "100vh",
    width: "auto",
    backgroundImage: "url(" + Course + ")",
    backgroundSize: "cover",
    // position: "absolute",
    // left: "50%",
    // top: "50%",
    // transform: "translate(-50%, -50%)",
  },
}));



export default function PCourse(){
    const classes = useStyles();
    const[courseList,setCourseList]= useState({course:[]});

useEffect(()=>{
  
        Axios.post('http://localhost:81/Webandy/webandy/src/database/getCourses.php')
        .then((response)=>{
          
            setCourseList({course:response.data});
          console.log(response);  
          }).catch(err=>console.log(err))
        },[])
        //console.log(courseList);
       
return(
    <div className={classes.contentData}>
      <div className={classes.banner}>
      <Banner Title={'Popular courses in australia'} />
        </div>
        {courseList.course.map((value,index)=>{
        const image = (value.Image);
        return(
          <div className={classes.data}>
            <Card className={classes.root} key={index.ID}>
            <Image src={{uri:`data:image/jpeg;base64,${value.Image}`}} />
              <CardActionArea key={index.ID}>
                <CardMedia key={index.ID}
                className={classes.media}
                  title='Sujav'
                  image={`data:image/jpeg;base64,${image}`}
                  
                />
                {/* <img src={`data:image/jpeg;base64,${image}`}/> */}
                
                <CardContent>
                  <Typography gutterBottom variant="h5" component="h2">
                    {value.Title}
                    
                  </Typography>
                  <Typography variant="body2" color="textSecondary" component="p">
                    {value.Description}<br></br>
                  </Typography>
                  <Typography variant="h6" color="textSecondary" component="p">
                    {value.FeeStructure}<br></br>
                  </Typography>
                  <Typography variant="h24" color="primary" component="p">
                    {value.CarrerPathway}<br></br>
                  </Typography>
                </CardContent>
              </CardActionArea>
              <CardActions>
                
                <Button size="small" color="primary">
                  Learn More
                </Button>
              </CardActions>
              
            </Card>
            
           
          </div>   
         
        )
        
        
      })}
   
        <Page  p2={'We’ll get you where you want to go Living and studying overseas can be confusing and complex. But at AECC Global, we are on a mission to make International Education accessible. Many of our team members have been international students themselves and we have the empathy and experience to get you started on your exciting journey. We’ve done the hard work for you, and have formed trusted partnerships with leading universities, colleges and institutions so that we can always provide the best advice for all our students. With that comes intimate knowledge about courses, teaching methodology and cultural nuances that all go into our advice to you.'}/>
        
    </div>
)
}