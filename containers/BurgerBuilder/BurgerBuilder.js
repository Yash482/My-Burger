import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary' ;
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls'

const INGREDIENTS_PRICES = {
    salad : 10,
    tikki : 20,
    cheese : 15,
    bacon : 12
}

const BASE_PRICE = 7

class BurgerBuilder extends Component {

    state = {
        ingredients : {
            salad : 0,
            cheese : 0,
            tikki : 0,
            bacon : 0
        },
        totalPrice : BASE_PRICE
    }

    addIngredientHandler = (type) => {
        let oldIngredients = {...this.state.ingredients}
        let oldPrice = this.state.totalPrice
        oldPrice += INGREDIENTS_PRICES[type]
        oldIngredients[type] += 1;
        this.setState({ingredients : oldIngredients, totalPrice : oldPrice})
    }

    removeIngredientHandler = (type) => {
        let oldIngredients = {...this.state.ingredients}
        if(oldIngredients[type]<1){
            return ;
        }
        let oldPrice = this.state.totalPrice
        oldPrice -= INGREDIENTS_PRICES[type]
        oldIngredients[type] -= 1;
        this.setState({ingredients : oldIngredients, totalPrice : oldPrice})
    }

    render() {
        return (
            <Aux>
                <Burger ingredients = {this.state.ingredients}/>
                <Buildcontrols totalPrice = {this.state.totalPrice} controls = {this.state.ingredients} add = {this.addIngredientHandler} remove = {this.removeIngredientHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder ;
