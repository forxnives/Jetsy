import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../../../Firebase/firebase.utils';
import { createStructuredSelector } from 'reselect';
import { selectCurrentUser } from '../../../../redux/user/user.selectors';




const Signin = ({currentUser}) => {





    return (

        <div className="nav-buttons-signin">

        
        {
            currentUser ? 
                (
                    <Link to='/' onClick={() => auth.signOut() } className="nav-buttons-signin__btn">
                        <span className="nav-buttons-signin__btn-txt">
                            Sign Out
                        </span>
                    </Link>
                )
           :
                (
                    <Link to='/signin'  className="nav-buttons-signin__btn">
                        <span className="nav-buttons-signin__btn-txt">
                            Sign In
                        </span>
                    </Link>
                )
        }

        </div>
    )
}


const mapStateToProps = createStructuredSelector({
    currentUser: selectCurrentUser
});


export default connect(mapStateToProps)(Signin);