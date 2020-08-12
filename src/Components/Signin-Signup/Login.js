import React from 'react';
import FormInput from '../SubComponents/FormInput/FormInput';
import MainButton from '../SubComponents/MainButton/MainButton';

import { auth, signInWithGoogle } from '../../Firebase/firebase.utils';
import {withRouter} from 'react-router-dom';





class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }

        this.history = props.history;



    }

    propTest = (props) => {
        console.log(props)
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);


            this.setState( {

                email: '',
                password: ''
    
            });

            // this.history.push('/')

        } catch (error){
            alert(error)
        }



    }

    handleChange = (event) => {

        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        })
    }

    handleGoogleSignIn = async () => {

        await signInWithGoogle();
        this.history.push('/')

    }


    render() {



        return(

            <div className="signup-signin-container">
                <div className="login">
                    <h1>Already Have an Account?</h1>
                    <form onSubmit={this.handleSubmit} className="login-form">
                        <div className="login-form-email">
                            <span>email</span>
                            <FormInput name='email' label={'label'} value={this.state.email} type='email' handleChange={this.handleChange} required />
                        </div>
                        <div className="login-form-password">
                            <span>password</span>
                            <FormInput name='password' value={this.state.password} type='password' handleChange={this.handleChange} required />
                        </div>
                        <MainButton type='submit'>
                            Sign In
                        </MainButton>

                        <MainButton onClick={this.handleGoogleSignIn} >
                            Sign in with Google
                        </MainButton>
                    </form>
                </div>
            </div>

        )
    }
}

export default withRouter(Login);

