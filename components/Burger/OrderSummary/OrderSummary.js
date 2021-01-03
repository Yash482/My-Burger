import React from 'react';

import Button from '../../UI/Button/Button';

const orderSummary = (props) => {

    const order = Object.keys(props.ingredients)
        .map(igkey => {
        return <li key = {igkey}><span style = {{textTransform : 'capitalize'}}>{igkey}</span> : {props.ingredients[igkey]}</li>
        })

    return (
        <div>
            <span style = {{textAlign : 'center'}}>Order Summary</span>
            <p>Here is the ingredients of your delicious Burger</p>
            <ul>
                {order}
            </ul>
            <p><strong>Total Price : {props.price}</strong></p>
            <p>Continue to Checkout</p>
            <Button clicked = {props.purchaseCanceled} btnType = "Danger">CANCEL</Button>
            <Button clicked = {props.purchaseContinued} btnType = "Success">CONTINUE</Button>

        </div>
    )
}

export default orderSummary ;