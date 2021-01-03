import React, { Component } from 'react';

import Aux from '../../hoc/Auxilliary' ;
import Burger from '../../components/Burger/Burger'
import Buildcontrols from '../../components/Burger/BuildControls/BuildControls'
import Modal from '../../components/UI/Modal/Modal'
import OrderSummary from '../../components/Burger/OrderSummary/OrderSummary'

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
        totalPrice : BASE_PRICE,
        purchasing : false
    }

    purchaseHandler = ()=> {
        this.setState({purchasing : true})
    }

    purchaseCancelHandler = ()=> {
        this.setState({purchasing : false})
    }

    purchaseContinueHandler = () => {
        alert("You Continued");
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
        const purchasable = this.state.totalPrice > BASE_PRICE;
        const disableInfo = {...this.state.ingredients};
        for (let key in disableInfo){
            disableInfo[key] = disableInfo[key] < 1
        }
        let summary = null;
        if(this.state.purchasing){
            summary = <Modal closeModal = {this.purchaseCancelHandler} show = {this.state.purchasing}>
                        <OrderSummary price = {this.state.totalPrice} purchaseContinued = {this.purchaseContinueHandler} purchaseCanceled = {this.purchaseCancelHandler} ingredients = {this.state.ingredients}/>
                      </Modal>
        }

        return (
            <Aux>
                {summary}
                <Burger ingredients = {this.state.ingredients} purchasable={purchasable}/>
                <Buildcontrols ordered = {this.purchaseHandler} purchasable={purchasable} disable = {disableInfo} totalPrice = {this.state.totalPrice} controls = {this.state.ingredients} add = {this.addIngredientHandler} remove = {this.removeIngredientHandler}/>
            </Aux>
        )
    }
}

export default BurgerBuilder ;
