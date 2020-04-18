import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';
import Button from "./Button";

const useStyles = makeStyles((theme) => ({
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  button:
  {
    marginTop : theme.spacing(7),
     display:'flex',
     flexDirection :'row',
     justifyContent : 'space-between',
  },
  heading:{
    fontFamily:'Papyrus',
    color : 'Green',
    fontWeight:'Bold'
  }
}));
// function rand() {
//   return Math.round(Math.random() * 20) - 10;
// }

// function getModalStyle() {
//   const top = 50 + rand();
//   const left = 50 + rand();

//   return {
//     top: `${top}%`,
//     left: `${left}%`,
//     transform: `translate(-${top}%, -${left}%)`,
//   };
// }

// const useStyles = makeStyles((theme) => ({
//   modal: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },paper: {
//           //position: 'absolute',
//     //   margin: 'auto',
//     //  top: 0,
//     //  right: 0,
//     //   bottom: 0,
//     //  left: 0,
//     //  height: 200,
//     //  width: 400,
//     //  minWidth :50,
//     //  minHeight : 50,
//     // position: 'absolute',
//     // justifyContent:'center',
//     // width: 400,
//     backgroundColor: theme.palette.background.paper,
//     border: '2px solid purple',
//     boxShadow: theme.shadows[5],
//     padding: theme.spacing(2, 4, 3),
//   },
 
// }));

export default function SimpleModal(props) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  // const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(true);

//   const handleOpen = () => {
//     setOpen(true);
//   };

//   const handleClose = () => {
//     setOpen(false);
//   };

  const body = (
   
    
    <div  style={{backgroundColor:'Black'}}className={classes.paper}>
      <h3 id="transition-modal-title" className = {classes.heading}><center>{props.winner}</center></h3>
   <div className = {classes.button}>  <Button btnName = {'End Game'} gridFalse = {props.gridFalse}/>
   <Button btnName = {'Continue'}/>
 </div>
    </div>
  );

  return (
    <div>
      {props.win &&
      <Modal
      open={open}
      className={classes.modal}
    //   onClose={handleClose}
    // aria-labelledby="transition-modal-title"
    // aria-describedby="transition-modal-description"
      onClick={()=>setOpen(false)}
      >
        {body}
      </Modal>
}
    </div>
  );
}
