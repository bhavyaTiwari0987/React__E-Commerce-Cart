import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'
import CartItem from './CartItem';

class Cart extends React.Component{
    render(){
        return (
            <div className='cart'>
                <CartItem/>
                <CartItem/>
                <CartItem/>
            </div>
        )
    }
}


export default Cart;