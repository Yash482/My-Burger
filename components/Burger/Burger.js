import React from 'react'

import BurgerIngredient from './BurgerIngredient/BurgerIngredient'
import classes from './Burger.css'

const Burger = (props) => {
    const ingredientsArray = Object.keys(props.ingredients)
        .map(ingredient => {
            return [...Array(props.ingredients[ingredient])].map((_, i) => {
                return <BurgerIngredient key = {i} type = {ingredient} />
            });

        });

    let dummy  = null;
    if(!props.purchasable){
        dummy = <p><strong>Add ingredients to your Burger</strong></p>
    }
    
    return (
        <div className ={classes.Burger}>

            <BurgerIngredient type = 'bread-top'/>
            {dummy}
            {ingredientsArray}
            <BurgerIngredient type = 'bread-bottom'/>
        </div>
    )
}

export default Burger;