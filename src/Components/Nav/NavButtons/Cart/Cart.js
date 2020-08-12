import React from 'react';

import { connect } from 'react-redux';
import dot from '../../../../img/bullet (2).svg';
import CartDropdown from '../../../CartDropdown/CartDropdown';
import { toggleCartHidden } from '../../../../redux/cart/cart.actions';

const Cart = ({currentUser, hidden}) => {


    const handleClick = () => {
        toggleCartHidden();

    }

    console.log(hidden)
    return (

        <div className="nav-buttons-cart">
            <a className="nav-buttons-cart__btn" onClick={handleClick}>

                <span className="nav-buttons-cart__btn-icon" >

                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><circle cx="9" cy="20" r="2"></circle><circle cx="16" cy="20" r="2"></circle><path d="M21,5H5.665L4.978,1.79A1,1,0,0,0,4,1H1A1,1,0,0,0,1,3H3.191L6.022,16.21a0.962,0.962,0,0,0,.064.159,1.015,1.015,0,0,0,.063.155,0.978,0.978,0,0,0,.133.153,1.006,1.006,0,0,0,.088.1,1,1,0,0,0,.185.105,0.975,0.975,0,0,0,.107.06A0.994,0.994,0,0,0,7,17H18a1,1,0,0,0,.958-0.713l3-10A1,1,0,0,0,21,5Zm-2.244,5H16V7h3.656ZM7.819,15l-0.6-3H9v3H7.819ZM11,12h3v3H11V12Zm0-2V7h3v3H11ZM9,7v3H6.82L6.22,7H9Zm8.256,8H16V12h2.156Z"></path></svg>
                    
                    {
                        currentUser ? (<img src={dot} alt=""/>) : (null)
                    }
                    
                </span>

                {
                    currentUser ? (<span className='nav-buttons-cart__btn-items'>3</span>) : (null)
                }

            </a>
            {/* <span>number</span> */}
            {!hidden ? (<CartDropdown />):null}

        </div>
        
    )
}


const mapStateToProps = ( {user:{currentUser}, cart:{hidden}  }) => ({
    currentUser: currentUser,
    hidden: hidden
})

const mapDispatchToProps = dispatch => ({
    toggleCartHidden: dispatch(toggleCartHidden())
})
    


export default connect(mapStateToProps, mapDispatchToProps)(Cart);