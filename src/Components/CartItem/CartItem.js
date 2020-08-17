import React from 'react';

const CartItem = ({item}) => {

    return (
        <div className='item-container'>

            <img src={item.img} alt={item.title}/>



            <div className="item-title">
                <h1>{item.title}</h1>
                <h4>{item.seller}</h4>
                <h2>{item.cartquantity} x ${item.price}</h2>
            </div>


        </div>
    )
}

export default CartItem;
