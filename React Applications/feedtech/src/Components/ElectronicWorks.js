import React from 'react';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ElectronicWorks() {
  const classes = useStyles();

  return (
      <div className = "container">
      <ul>
      <text className="h1 m-4 p-3 d-block border rounded  text-left text-dark"> - Magnetic Conductor</text>
      <text className="h1 m-4 p-3 d-block border rounded  text-left text-dark"> - MCCB</text>
      <text className="h1 m-4 p-3 d-block border rounded  text-left text-dark"> - Power Factor Capacitor</text>
      <text className="h1 m-4 p-3 d-block border rounded  text-left text-dark"> - Control Panel</text>
      </ul>
      </div>
  );
}