import React, { useEffect } from 'react';
import Login from '../Components/Signin-Signup/Login';
import SignUp from '../Components/Signin-Signup/SignUp';

import fernleft from '../img/tintin.png';
import fernright from '../img/torsty.png';


const SignIn = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="signup-signin">
            <div className="about-fern about-fernleft">
                <img src={fernleft} alt=""/>
            </div>

            <div className='form-wrapper'>

                <div className='borderdummy top-dummy'>
                </div>
                <div className='or-divider' >
                    <h2>
                        Or
                    </h2>
                </div>

                <div className='borderdummy bottom-dummy'>
                </div>
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