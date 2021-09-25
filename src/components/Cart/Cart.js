import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const { cart } = props
    console.log(cart)
    let costAmount = 0;
    for (const cost of cart) {
        costAmount = costAmount + parseInt(cost.salary)
    }
    return (
        <div className='cart-container'>
            <h2>Total Member: <small>{cart.length}</small></h2>
            <h4>Total Amount of Cost : <small>{costAmount}</small></h4>
            <p>{cart.map(pd => <li>{pd.name}</li>)}</p>
        </div>
    );
};

export default Cart;