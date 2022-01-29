import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Login.css';

function Login(props) {

    const username = React.useRef();
    const password = React.useRef();
    
    const [message, setMessage] = React.useState(
        <div className="alert alert-light  mt-4" role="alert">
            Please fill out with your credentials to login.
        </div>
    );

    function showErrorMessage(){
        setMessage(
            <div className="alert alert-danger mt-4" role="alert">
                Invalid username/email or password.
            </div>
        )
    }

    function showSuccessMessage(){
        setMessage(
            <div className="alert alert-success mt-4" role="alert">
                Login with success.
            </div>
        )
    }

    function hideMessage(){
        setMessage(
            <div className="alert alert-light  mt-4" role="alert">
                Please fill out with your credentials to login.
            </div>
        )
    }

    function clearAllFields(){
        username.current.value = ''
        password.current.value = ''
    }


    function handleSubmit(event) {
        
        event.preventDefault()

        const body = {
            password: username.current.value,
            username: password.current.value
        };
        
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        };
        
        axios.post(
            'http://localhost:5000/api/v1/login',
            body,
            config
        )
        .then((response) => {
            console.log(response.data)
            showSuccessMessage()
            props.getData('hello_user')
        })
        .catch((error) => {
            console.log(error.response)
            showErrorMessage()
            clearAllFields()
        });

    };


    return (
    <div className="Login">
        <div className="container">
            <div className="row vh-100">
                <div className="col-lg-6 mx-auto d-table h-100">
                    <div className="d-table-cell align-middle">
                        <div className="card shadow">
                            <div className="card-body">
                                <div className="text-center mt-4">
                                    <h1 className="h3">Login Screen</h1>
                                    <p className="lead">This is a sample page.
                                    </p>
                                </div>
                                <div className="m-sm-4">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Email or Username:</label>
                                            <input ref={ username } className="form-control form-control-lg" type="email" name="email" placeholder="" />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label className="form-label">Password:</label>
                                            <input ref={ password } className="form-control form-control-lg" type="password" name="password" placeholder="" />
                                        </div>
                                        <div className="mb-3">
                                            <small>
                                                <Link to="/signup">Don't you have an account yet?</Link>
                                            </small>
                                        </div>
                                        <div className="text-center mt-3 d-grid">
                                            <a onClick={ handleSubmit } className="btn btn-lg btn-primary shadow">Login</a>
                                        </div>
                                        
                                    </form>
                                    { message }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Login;
