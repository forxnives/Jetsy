import React from 'react';
import { Link } from 'react-router-dom';



const Signin = () => {

    return (

        <div className="nav-buttons-signin">
            <Link to='/signin'  className="nav-buttons-signin__btn">
                <span className="nav-buttons-signin__btn-txt">
                    Sign In
                </span>
            </Link>
        </div>
    )
}

export default Signin;