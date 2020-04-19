import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Modal from './Modal'

import AddIcon from '@material-ui/icons/Add';
import ClearIcon from '@material-ui/icons/Clear';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { Drawer } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingTop: theme.spacing(7),
    margin: theme.spacing(5)
  },
  paper: {
    height: 80,
    minHeight: 30,
    padding: theme.spacing(2),
    margin: theme.spacing(3),
    marginTop: theme.spacing(3),
    textAlign: 'center',
    justify: "center",
    alignItems: "center",
    backgroundColor: 'rgb(27, 0, 26)',
  },
  grd: {
    borderLeft: '5px solid red',  
  },
  g:
  {
    borderLeft: '5px solid grey',  
  },
  horizonBorder:
  {
    borderBottom: '5px solid red', 
  },
  hB:
  {
    borderBottom: '5px solid grey',
  },
  Add: {
    color: 'orange',
    fontSize: 50
  },
  clear: {
    color: 'cyan',
    fontSize: 50
  },
  circle: {
    color: 'lightgreen',
    fontSize: 50
  },
  main: {
    height: 400,
    minHeight: 200,
    width: 400,
    minWidth: 200,
  },
}));


export default function CenteredGrid(props) {
  const classes = useStyles();
  const [count, setCount] = useState(0);
  const [gridArr, setgridArr] = useState([]);
  const [win, setWin] = useState(false);
  const [winner, SetWinner] = useState('');

  function apiCall(pSymbol) {
    if (pSymbol === 'plus') {
      return (<AddIcon className={classes.Add} />)
    }
    if (pSymbol === 'cross') {
      return (<ClearIcon className={classes.clear} />)
    }
    if (pSymbol === 'circle') {
      return (<RadioButtonUncheckedIcon className={classes.circle} />)
    }
  }

  function addToGrid(id) {
      let grid = gridArr
    setWin(false);
    var wins;
    if (grid[id] === undefined) {
      if (count % 2 === 0) {
        grid[id] = props.p1Symbol
        setgridArr(grid)
        wins = checkDim('Player 1 Wins', props.p1Symbol, gridArr)
      }
      else {
        grid[id] = props.p2Symbol
        setgridArr(grid)
        wins = checkDim('Player 2 Wins', props.p2Symbol, gridArr)
      
      }
      setCount(count + 1)
      setTimeout(() => {
       if (count === 8 && wins === false) {
          setWin(win + true)
          SetWinner('Games Draw..')
          setCount(0);
          setgridArr([]);
          props.incCount('Draw');
        }
      }, 800);
    }

  }
  function checkDim(pNo, playerNo, Arr) {

    if ((Arr[0] === playerNo && Arr[1] === playerNo && Arr[2] === playerNo) || (Arr[3] === playerNo && Arr[4] === playerNo && Arr[5] === playerNo)
      || (Arr[6] === playerNo && Arr[7] === playerNo && Arr[8] === playerNo) || (Arr[0] === playerNo && Arr[3] === playerNo && Arr[6] === playerNo)
      || (Arr[1] === playerNo && Arr[4] === playerNo && Arr[7] === playerNo) || (Arr[2] === playerNo && Arr[5] === playerNo && Arr[8] === playerNo)
      || (Arr[0] === playerNo && Arr[4] === playerNo && Arr[8] === playerNo) || (Arr[2] === playerNo && Arr[4] === playerNo && Arr[6] === playerNo)) {
        SetWinner(pNo)
        setTimeout(() => {
          setWin(win + true)
        props.incCount(pNo);
        setCount(0);
        setgridArr([]);
      }, 700);
      return true;

    }
    else { return false; }

  }

  return (
    <div className={classes.root} >
      <Grid container
        justify="center"
        spacing={0} className={classes.main}>
        <Grid item spacing={0} className={props.gridActive ? classes.horizonBorder : classes.hB} xs={4} onClick={() => { props.gridActive && addToGrid(0) }}>
          <Paper className={classes.paper} >{apiCall(gridArr[0])}</Paper>
        </Grid>
        <Grid item className={props.gridActive ? `${classes.grd} ${classes.horizonBorder}` : `${classes.g} ${classes.hB}`} xs={4} onClick={() => { props.gridActive && addToGrid(1) }}>
          <Paper className={classes.paper}>{apiCall(gridArr[1])}</Paper>
        </Grid>
        <Grid item className={props.gridActive ? `${classes.grd} ${classes.horizonBorder}` : `${classes.g} ${classes.hB}`} xs={4} onClick={() => { props.gridActive && addToGrid(2) }}>
          <Paper className={classes.paper}>{apiCall(gridArr[2])}</Paper>
        </Grid>
        <Grid item className={props.gridActive ? classes.horizonBorder : classes.hB} item xs={4} onClick={() => { props.gridActive && addToGrid(3) }}>
          <Paper className={classes.paper} >{apiCall(gridArr[3])}</Paper>
        </Grid>
        <Grid item className={props.gridActive ? `${classes.grd} ${classes.horizonBorder}` : `${classes.g} ${classes.hB}`} item xs={4} onClick={() => { props.gridActive && addToGrid(4) }}>
          <Paper className={classes.paper}>{apiCall(gridArr[4])}</Paper>
        </Grid>
        <Grid item className={props.gridActive ? `${classes.grd} ${classes.horizonBorder}` : `${classes.g} ${classes.hB}`} xs={4} onClick={() => { props.gridActive && addToGrid(5) }}>
          <Paper className={classes.paper}>{apiCall(gridArr[5])}</Paper>
        </Grid>
        <Grid item xs={4} onClick={() => { props.gridActive && addToGrid(6) }}>
          <Paper className={classes.paper}>{apiCall(gridArr[6])}</Paper>
        </Grid>
        <Grid item className={props.gridActive ? classes.grd : classes.g} xs={4} onClick={() => { props.gridActive && addToGrid(7) }}>
          <Paper className={classes.paper}>{apiCall(gridArr[7])}</Paper>
        </Grid>
        <Grid item className={props.gridActive ? classes.grd : classes.g} xs={4} onClick={() => { props.gridActive && addToGrid(8) }}>
          <Paper className={classes.paper}>{apiCall(gridArr[8])}</Paper>
        </Grid>
      </Grid>
      {win && <Modal win={win} gridFalse={props.gridFalse} winner={winner} />}
    </div>
  );
}
