import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import { useEffect } from "react";

import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles((theme) => ({
  formControl: {
    marginTop: theme.spacing(1),
    margin: theme.spacing(3),
    minWidth: 160,

  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  labelCss: {
   marginLeft: theme.spacing(4),
   marginTop:theme.spacing(9),
   marginRight: theme.spacing(4),
   fontFamily: 'papyrus',
   fontSize:30,
   fontWeight:'bold',
   right : 'auto',
   color:'white'
  },
  Add :{
    color:'orange',
},
clear :{
    color:'cyan',
},
circle :{
    color:'lightgreen',
    
},
inputColor:
{
color : 'white',

},
backColor:
{
     color:'white',
//  backgroundColor:'  rgb(73, 26, 66)'
}
}));

export default function SimpleSelect(props) {
  const classes = useStyles();
  const [symbol, setSymbol] = React.useState('');

  const handleChange = (event) => {
    setSymbol(event.target.value);
    props.getSymbol(event.target.value,props.playerNo)
  };

  useEffect(() => {
setSymbol("")
   
  }, [props.endGame])

  return (
    <div >
  <div>

  <label className = {classes.labelCss}>Player{props.playerNo}</label>
  </div >
       {!props.gridActive ?
      <FormControl className={classes.formControl}>
        <InputLabel id="demo-simple-select-label" className={classes.inputColor}>Symbol</InputLabel>
       
        <Select
       
          labelId="demo-simple-select-label"
          className={classes.backColor}
          id="demo-simple-select"
          value={symbol}
          onChange={handleChange}
        >
          <MenuItem value={'plus'}><AddIcon className={classes.Add}/></MenuItem>
          <MenuItem value={'cross'}><ClearIcon className={classes.clear}/></MenuItem>
          <MenuItem value={'circle'}><RadioButtonUncheckedIcon className={classes.circle}/></MenuItem>
        </Select>
        </FormControl> 
        :
        <FormControl className={classes.formControl}>
           {props.pSymbol==='circle' ? <RadioButtonUncheckedIcon style={{ fontSize: 50 }} className={classes.circle}/>   : props.pSymbol==='cross' ? <ClearIcon style={{ fontSize: 60 }} className={classes.clear}/> : <AddIcon style={{ fontSize: 60 }} className={classes.Add}/> }
       <h3 style={{color:'grey'}}>Score: {props.winScore}</h3>
          </FormControl> 
       }
    </div>
  );
}
