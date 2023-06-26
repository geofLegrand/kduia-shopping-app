import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';

const CartValue = () => {
    const {Location,expenses} = useContext(AppContext)

    const totalExpenses = expenses.reduce((acc,curr) => 
    (acc + (curr.quantity * curr.unitprice)) ,0)

    return(
        <div className='alert alert-primary'>
            <span>Cart value:{Location}{totalExpenses}</span>
        </div>
    )
};

export default CartValue;
