import React from 'react'

import classes from './Modal.css'
import Aux from '../../../hoc/Auxilliary';
import Backdrop from '../BackDrop/BackDrop';

const modal = (props) => {
    return (
        <Aux>
        <Backdrop show = {props.show} closeModal = {props.closeModal}/>
        <div className = {classes.Modal}
            style = {{
                transform : props.show ? 'translateY(0)' : 'translateY(-100vh)'
            }}>
            {props.children}
        </div>
        </Aux>
    )
}

export default modal;