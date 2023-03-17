import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import classes from "../Modules/User.module.css";

export default function Variants() {
  return (
    <div  className={classes['user-card']}>
        <Skeleton variant="rectangular" width={"100%"} height={"200px"} animation='wave' />
    </div>
        
  );
}