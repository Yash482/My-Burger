import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const buildControls = (props) => {
    const controls = Object.keys(props.controls)
        .map( cntrl =>{
            return <BuildControl key = {cntrl} label = {cntrl} add = {() => props.add(cntrl)} remove = {() => props.remove(cntrl)}/>
        })

    return (
        <div className = {classes.BuildControls}>
            <p><strong>Total Price : </strong> {props.totalPrice}</p>
            {controls}
        </div>
    )
}

export default buildControls;