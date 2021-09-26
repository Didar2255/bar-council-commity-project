import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    let costAmount = 0;
    for (const cost of cart) {
        costAmount = costAmount + parseInt(cost.salary)
    }
    return (
        <div className='cart-container shadow'>
            <h3>Monthly fund cost :</h3>
            <p>Total Member : <small>{cart.length}</small></p>
            <p>Total cost amount: $ <small>{costAmount}</small></p>
            <h5>Add member name :</h5>
            <p>{cart.map(pd => <li>{pd.name}</li>)}</p>
        </div>
    );
};

export default Cart;