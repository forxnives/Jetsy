import React from 'react';
import Login from '../Components/Signin-Signup/Login';
import SignUp from '../Components/Signin-Signup/SignUp';

import fernleft from '../img/tintin.png';
import fernright from '../img/torsty.png';


const SignIn = () => {

    return (
        <div className="signup-signin">
            <div className="about-fern about-fernleft">
                <img src={fernleft} alt=""/>
            </div>

            <div className='form-wrapper'>
                <Login />
                <SignUp />

            </div>



            <div className="about-fern about-fernright">
                    <img src={fernright} alt=""/>
            </div>



        </div>




    )
}

export default SignIn;