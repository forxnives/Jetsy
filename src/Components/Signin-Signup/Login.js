import React from 'react';
import FormInput from '../SubComponents/FormInput/FormInput';
import MainButton from '../SubComponents/MainButton/MainButton';



class Login extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            email: '',
            password:''
        }
    }

    handleSubmit = (event) => {
        event.preventDefault();
        this.setState( {

            email: '',
            password: ''

        } );

    }

    handleChange = (event) => {

        const { name, value } = event.target;
        
        this.setState({
            [name]: value
        })
    }


    render() {

        return(

            <div className="signin-container">
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
                        <MainButton>
                            Submit Form
                        </MainButton>
                    </form>
                </div>
            </div>

        )
    }
}

export default Login;

