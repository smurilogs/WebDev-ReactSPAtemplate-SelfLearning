import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

import './Signup.css';

function Signup(props) {
    
    const username = React.useRef();
    const email = React.useRef();
    const password = React.useRef();
    const passwordConf = React.useRef();

    const [message, setMessage] = React.useState(
        <div className="alert alert-light  mt-4" role="alert">
            Please fill out with the definitions of new credentials.
        </div>
    );

    function showErrorMessage(){
        setMessage(
            <div className="alert alert-danger mt-4" role="alert">
                Invalid or lacking definitions.
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
                Please fill out with the definitions of new credentials.
            </div>
        )
    }

    function clearAllFields(){
        username.current.value = ''
        email.current.value = ''
        password.current.value = ''
        passwordConf.current.value = ''
    }

    function handleSubmit(event) {
        
        event.preventDefault()

        const body = {
            username: username.current.value,
            email: email.current.value,
            password: password.current.value,
            passwordConf: passwordConf.current.value
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
            props.getData('signup_confirmation')
        })
        .catch((error) => {
            console.log(error.response)
            showErrorMessage()
            clearAllFields()
        });
    };

    return (
    <div className="Signup">
		<div className="container">
			<div className="row vh-100">
				<div className="col-lg-5 mx-auto d-table h-100">
					<div className="d-table-cell align-middle">
						<div className="card shadow ">
							<div className="card-body">
                                <div className="text-center mt-4">
							        <h1 className="h3">Signup Screen</h1>
						        	<p className="lead">
                                        This is a sample page.
		    	    				</p>
        						</div>

								<div className="m-sm-4">
									<form>
										<div className="mb-3">
											<label className="form-label">Username:</label>
											<input  ref={ username }  className="form-control form-control-lg" type="text" name="username" placeholder="" />
										</div>
										<div className="mb-3">
											<label className="form-label">Email:</label>
											<input ref={ email }  className="form-control form-control-lg" type="email" name="email" placeholder="" />
										</div>
										<div className="mb-3">
											<label className="form-label">Password:</label>
											<input ref={ password }  className="form-control form-control-lg" type="password" name="password" placeholder="" />
										</div>
										<div className="mb-3">
											<label className="form-label">Password confirmation:</label>
											<input ref={ passwordConf }  className="form-control form-control-lg" type="password" name="password" placeholder="" />
										</div>
                                        <div className="mb-3">
                                            <small>
                                                <Link to="/login">Do you already have an account?</Link>
                                            </small>
                                        </div>
                                        <div className="text-center mt-3 d-grid">
											<a onClick={ handleSubmit } className="shadow btn btn-lg btn-primary">Sign up</a>
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

export default Signup;
