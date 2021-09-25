import React from 'react';
import './foodCart.css';
const FoodCart = (props) => {
    const {cart} =  props;
    return (
        <div className ="my-5 cart ps-4">
            <h2>Your Foods</h2>
            <p>Item : {cart.length}</p>
            <ul>
                {
                    cart.map((name,index) => <li key={index}>{name}</li>)
                }
            </ul>
        </div>
    );
};

export default FoodCart;