import React, { useState } from 'react';
import FormInput from '../SubComponents/FormInput/FormInput';
import MainButton from '../SubComponents/MainButton/MainButton';

import { auth, createUserProfileDocument } from '../../Firebase/firebase.utils';






const SignUp = () => {

    const [displayName, setDisplayName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPass, setConfirmPass] = useState('');



    const handleDisplayName = ({target}) => {
        setDisplayName(target.value)

    }

    const handleEmail = ({target}) => {
        setEmail(target.value)

    }

    const handlePassword = ({target}) => {
        setPassword(target.value)
    }

    const handleConfirmPass = ({target}) => {
        setConfirmPass(target.value)
    }

    
    const handleSubmit = async (event) => {

        event.preventDefault()
        

        if (password !== confirmPass) {
            alert('Passwords do not match!');
            return;
        } else if (password.length<6) {
            alert('Password should be more than 6 characters')
            return;
        }

        try {

            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            await createUserProfileDocument(user, {displayName})


        } catch(error) {

            console.error(error)


        }
        

        setDisplayName('');
        setEmail('');
        setPassword('');
        setConfirmPass('');

        

    }


    return (

        <div className="signup-signin-container">
            <div className="signup">

                <h1>Create an Account</h1>
                <form onSubmit={handleSubmit} className="signup-form">
                    <div className="signup-form-displayName">
                        <span>Display Name</span>
                        <FormInput name='displayName' label={'label'} value={displayName} type='text' handleChange={handleDisplayName} required />
                    </div>
                    <div className="signup-form-email">
                        <span>Email</span>
                        <FormInput name='email' label={'label'} value={email} type='email' handleChange={handleEmail} required />
                    </div>
                    <div className="signup-form-password">
                        <span>Password</span>
                        <FormInput name='password' value={password} type='password' handleChange={handlePassword} required />
                    </div>
                    <div className="signup-form-confirm-password">
                        <span>Confirm Password</span>
                        <FormInput name='password' value={confirmPass} type='password' handleChange={handleConfirmPass} required />
                    </div>
                    <MainButton type='submit'>
                        Sign Up
                    </MainButton>

                
                </form>
            </div>
        </div>
        
    )


}

export default SignUp;