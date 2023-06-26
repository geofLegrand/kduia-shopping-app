import React, { useContext } from 'react';
import { AppContext } from '../context/AppContext';
import { FaTimesCircle } from 'react-icons/fa';

const ExpenseItem = ({id,name,quantity,unitprice}) => {

    const {dispatch,Location} = useContext(AppContext)


    const handleDeleteItem = () =>{

        const item = {
            name
        }

        dispatch({
            type:"DELETE_ITEM",
            payload:item
        })
    }
    return (
        <tr>
              <th scope="row">{name}</th>
              <td>{quantity}</td>
              <td>{Location}{parseInt(unitprice)}</td>
              <td>{Location}{parseInt(quantity)*parseInt(unitprice)}</td>
              <td><FaTimesCircle onClick={handleDeleteItem} size='2.2rem' color='red'/></td>
        </tr>
    )
};

export default ExpenseItem;
