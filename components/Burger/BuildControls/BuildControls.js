import React from 'react'

import BuildControl from './BuildControl/BuildControl'
import classes from './BuildControls.css'

const buildControls = (props) => {
    const controls = Object.keys(props.controls)
        .map( cntrl =>{
            return <BuildControl key = {cntrl} disable = {props.disable[cntrl]} label = {cntrl} add = {() => props.add(cntrl)} remove = {() => props.remove(cntrl)}/>
        })

    return (
        <div className = {classes.BuildControls}>
            <p><strong>Total Price : </strong> {props.totalPrice}</p>
            {controls}
            <button className = {classes.OrderButton} disabled = {!props.purchasable}>Order Now</button>
        </div>
    )
}

export default buildControls;