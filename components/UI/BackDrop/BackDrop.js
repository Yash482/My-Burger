import React from 'react';

import classes from './BackDrop.css';

const backdrop = (props) => {
   return (
       <div>
            {props.show ? <div className = {classes.Backdrop} onClick = {props.closeModal}></div> : null}
       </div>
   ) 
}

export default backdrop;