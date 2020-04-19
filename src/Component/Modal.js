import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
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
    marginTop: theme.spacing(7),
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  heading: {
    fontFamily: 'Papyrus',
    color: 'Green',
    fontWeight: 'Bold'
  }
}));
const body = (


  <div style={{ backgroundColor: 'Black' }} className={classes.paper}>
    <h3 id="transition-modal-title" className={classes.heading}><center>{props.winner}</center></h3>
    <div className={classes.button}>  <Button btnName={'End Game'} gridFalse={props.gridFalse} />
      <Button btnName={'Continue'} />
    </div>
  </div>
);

return (
  <div>
    {props.win &&
      <Modal
        open={open}
        className={classes.modal}
        onClick={() => setOpen(false)}
      >
        {body}
      </Modal>
    }
  </div>
);
}
