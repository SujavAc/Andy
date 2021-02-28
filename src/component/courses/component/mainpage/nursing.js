import React from 'react';
import BachelorPage from './bachelorpage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    
  },
}));
export default function Nursing(){
  const classes = useStyles();
    

return(
    <div className={classes.root}>
        
            <BachelorPage 
            Title={'Nursing'}
            
            Image={'https://thumbs.dreamstime.com/b/notepad-stationery-white-background-planner-business-study-fans-143353974.jpg'}
              />
       
        
    </div>
)
}