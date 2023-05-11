import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { icon } from '@fortawesome/fontawesome-svg-core/import.macro'

class CartItem extends React.Component{
    constructor(){
        super();
        this.state = {
            price:999,
            title: 'Phone',
            qty: 1,
            img: ''
        }
    }

    increaseQuantity = () => {
        console.log(this)
    }

    render (){
        const { price, title, qty} = this.state;
        return (
            <div className="cart-item">
                <div className="left-block">
                    <img style={styles.image}/>
                </div>
                <div className="right-block">
                    <div style={ { fontSize: 25} }>{title}</div>
                    <div style={ { color:'#777'} }>Rs {price}</div>
                    <div style={ { color:'#777'} }>Qty: {qty}</div>
                    <div className="cart-item-actions">
                        {/* Buttons*/}
                        <FontAwesomeIcon onClick={this.increaseQuantity} icon={icon({name: 'circle-plus'})} />
                        <FontAwesomeIcon icon={icon({name: 'circle-minus'})} />
                        <FontAwesomeIcon icon={icon({name: 'trash'})} />
                    </div>
                </div>
            </div>
        )
    }
}

const styles = {
    image: {
        height: 110,
        width: 110,
        borderRadius: 4,
        background: '#ccc'
    }
}
export default CartItem;