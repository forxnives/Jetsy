import React from 'react';
import { linkPathFromCatArray } from '../../generalutils';
import { Link } from 'react-router-dom';
 
const CartItem = ({item}) => {



    return (
        <div >
            <Link className='item-container' to={linkPathFromCatArray(item.categories) + item.title}>

                <img src={item.img} alt={item.title}/>



                <div className="item-title">
                    <h1>{item.title}</h1>
                    <h4>{item.seller}</h4>
                    <h2>{item.cartquantity} x ${item.price}</h2>
                </div>

            </Link>


        </div>
    )
}

export default CartItem;
