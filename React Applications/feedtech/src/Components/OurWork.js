import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

import SheetCutting from "../Images/SheetCutting.jpg"
import SheetRolling from "../Images/SheetRolling.jpg"
import SheetBending from "../Images/SheetBending.jpg"

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 480,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function OurWork() {
  const classes = useStyles();
  let bendingDetails = "This is details";
  let rollingDetails = "This is details";
  return (
    <div className = "container">
    <div className="row">
    <div className = "col-sm-6 p-4">
    <div className="card container h-100 w-100" >
    <img src={SheetCutting} className="card-img-top"></img>
    <div className="card-body">
      <h5 className="card-title">Sheet Cutting</h5>
    </div>
    </div>
    </div>
    <div className = "col-sm-6 p-4">
    <div className="card container h-100 w-100" >
    <img src={SheetRolling} className="card-img-top"></img>
    <div className="card-body">
      <h5 className="card-title">Sheet Rolling</h5>
    </div>
    </div>
    </div>
    </div>
    <div className="row">
    <div className = "col-sm-6 p-4">
    <div className="card container h-100 w-100" >
    <img src={SheetBending} className="card-img-top"></img>
    <div className="card-body">
      <h5 className="card-title">Sheet Bending</h5>
    </div>
    </div>
    </div>
    
    </div>
</div>

  );
}