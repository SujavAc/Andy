import React,{useState} from 'react';
import PropTypes from 'prop-types';
import { makeStyles, createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import TextField from '@material-ui/core/TextField';
import Axios from 'axios';


  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '35ch',
      },
      close: {
        padding: theme.spacing(0.5),
      },
      justifyContent: "center",
    alignItems: "center",
    height: "auto",
    display: "flex",
    flexDirection: "column",
    },
    message:{
      margin: theme.spacing(5),
      justifyContent:'center',
      alignItems:'center',
      
    },
    error:{
      color:'#ff0000',
    },
    success:{
      color:'#00ff00',
    }
  
    
    
    
  }));
  // const theme = createMuiTheme({
  //   overrides: {
  //     // Style sheet name ⚛️
  //     MuiButton: {
  //       // Name of the rule
        
  //       text: {
  //         // Some CSS
  //         background: 'linear-gradient(45deg, #304ffe 30%, #26c6da 90%)',
  //         borderRadius: 3,
  //         border: 0,
  //         color: '#fafafa',
  //         height: 48,
  //         padding: '0 30px',
  //       },
  //     },
  //   },
  // });

function SimpleDialog(props) {
  const { onClose, selectedValue, open } = props;
  const classes = useStyles();
  const[data,setData]= useState({Name:'',Email:'',Message:''});
  const [msg,setMsg]=useState({errMessage:'',successMsg:''});
  
  var pattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);
  
  
  const handleClose = () => {
    onClose(selectedValue);
  };

  
  const handleClick = () => {
    if(!data.Name || !data.Email || !data.Message){
      setMsg({
        errMessage:'Fill all the details'
    });
    
    }else if(!pattern.test(data.Email)){
      setMsg({
        errMessage:'Use valid Email'
    });
    }
    
    else{
      const formData = new FormData();
      formData.append('name',data.Name);
      formData.append('email',data.Email);
      formData.append('message',data.Message);

      
      Axios.post('http://localhost:81/Webandy/webandy/src/database/enquiry.php',formData)
      .then((res)=>{
          console.log(res);
          setMsg({
            successMsg:res.data
          });
      }).catch(err=>{
        setMsg({
          errMessage:err.message
        });
      });
     
      

  
};
    }
    
        

  


 

  return (
    <Dialog onClose={handleClose} aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">Send Enquiry</DialogTitle>
      
      <form className={classes.root} noValidate autoComplete="off">
            <TextField id="outlined-basic" label="Full Name" variant="outlined"
            onChange={event=>{
                const name = event.target.value;
                setData(prevSetData=>({
                    Name:name,
                    Email:prevSetData.Email,
                    Message:prevSetData.Message
                }))}}
            />
            <br></br>
            <TextField id="outlined-basic" label="Email" variant="outlined" 
            onChange={event=>{
                const email = event.target.value;
                setData(prevSetData=>({
                    Name:prevSetData.Name,
                    Email:email,
                    Message:prevSetData.Message
                }))}}
            />
            <br></br>
            <TextField id="outlined-basic" label="Message" variant="outlined" 
            onChange={event=>{
                const message = event.target.value;
                setData(prevSetData=>({
                    Name:prevSetData.Name,
                    Email:prevSetData.Email,
                    Message:message
                }))}}
            />
            <br></br>
             
        <Button color="primary" onClick={handleClick} >
        Submit
      </Button>
      
      
      <div className={classes.message}>
      {msg.errMessage ?(
        <div className={classes.error}>{msg.errMessage}</div>
      ):(
        <div className={classes.success}>{msg.successMsg}</div>
      )}
      </div>
      </form>
    </Dialog>
  );
}

SimpleDialog.propTypes = {
  onClose: PropTypes.func.isRequired,
  open: PropTypes.bool.isRequired,
  selectedValue: PropTypes.string.isRequired,
};

export default function SimpleDialogDemo() {
    
 
  const [open, setOpen] = React.useState(false);
  const [selectedValue, setSelectedValue] = React.useState();
 

  


  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = (value) => {
    setOpen(false);
    setSelectedValue(value);
  };
  

  return (
    <div>
      
      <Button color="primary" onClick={handleClickOpen}>
        Send Enquiry
      </Button>
      
      <SimpleDialog selectedValue={selectedValue} open={open} onClose={handleClose} />
      
    </div>
  );
}