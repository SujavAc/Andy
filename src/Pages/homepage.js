import React from 'react';
import {
    //fade,
    //ThemeProvider,
    //withStyles,
    makeStyles,
    //createMuiTheme,
  } from '@material-ui/core/styles';
import Navbar from '../component/navbar';
import Content from '../component/content';
import Form from '../Pages/form';

//import NavigationIcon from '@material-ui/icons/Navigation';
//import Fab from '@material-ui/core/Fab';
//import { Rotate90DegreesCcw } from '@material-ui/icons';
import Footer from '../component/footer';
import SwipeableTextMobileStepper from '../component/carousel';

import Feedback from '../component/feedbackform/form';

const useStyles = makeStyles((theme) => ({
  
  }));

export default function Homepage(){
const classes = useStyles();
    return(
        <div >
            <div >
            <Navbar/>
            </div>
            <div >
            <SwipeableTextMobileStepper/>
            </div>
            <div >
            <Content/>
            </div>
            <div >
            <Form/>
            </div>
            <div className={classes.feedback}>
            <Feedback/>
            </div>
            <div >
            <Footer/>
            </div>
            
            
        </div>
        
    );
}