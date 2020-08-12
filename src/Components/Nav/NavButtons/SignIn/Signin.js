import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

import { auth } from '../../../../Firebase/firebase.utils';



const Signin = ({currentUser}) => {

    // console.log(currentUser)



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


const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});


export default connect(mapStateToProps)(Signin);