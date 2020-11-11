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
    
    return (
        <div className ={classes.Burger}>

            <BurgerIngredient type = 'bread-top'/>
            {ingredientsArray}
            <BurgerIngredient type = 'bread-bottom'/>
        </div>
    )
}

export default Burger;