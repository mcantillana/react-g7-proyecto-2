import React, { Fragment, useState, useEffect } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { loginAction, logoutAction } from '../store/auth/action';
import { connect } from 'react-redux';
import { Spinner } from '../components/Spinner';
import {Form, Button,Alert } from 'react-bootstrap';
import '../assets/scss/login.scss';
import logo from '../assets/images/Rick_and_Morty.svg';

const LoginPage = props => {


    const [ validated, setValidated ] = useState(false);
    
    const [ form, setForm ] = useState({      
        username: '',
        password: '',
    });

    useEffect(() => {
      // reset login status
      props.logout()

    }, [])
    const handlerOnChange = ({target}) => {
        const { name, value } = target;
        setForm({
          ...form,
          [name]: value
        })
    }


    const handleOnSubmit = event => {
        event.preventDefault();

        const { currentTarget } = event;
        const { username, password } = form;
          
        
        
        if (currentTarget.checkValidity()) {
            console.log('success', password, username)

            if (username && password) {
                props.login(username, password);
                // setValidated(false);
            }

        }
        setValidated(true);

    }

    if (props.loggedIn) {
      return <Redirect to="/dashboard" />
    }

    // console.log(props)
    return(
        <Fragment>
           
           <Form noValidate validated={validated} onSubmit={handleOnSubmit} className="form-signin" method="POST">
               <div className="text-center mb-4">
                 <img className="mb-4" src={logo} alt=""  height="80" />                           
               </div>
                
                {
                  props.error &&  
                  <Alert variant="danger">
                    {props.error_message}
                  </Alert>
                }
                <Form.Group>
                   <Form.Label>Username</Form.Label>
                   <Form.Control type="text" placeholder="Enter Username" required id="username" name="username" onChange={handlerOnChange}/>
                 </Form.Group>

                 <Form.Group>
                    <Form.Label >Password</Form.Label>
                    <Form.Control type="password" placeholder="Enter Password" required id="password" name="password" onChange={handlerOnChange}/>
                  </Form.Group>

                  <Button variant="primary" block size="lg" type="submit">
                    {props.loading ? <Spinner size="xs" bg="white" /> : "Entrar"}
                  </Button>                
                  <p className="mt-1">¿Todavía no tienes tu cuenta? <Link to="/sign_in">crear cuenta</Link></p>
                  <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
               </Form>
        </Fragment>
    );
}


const mapStateToProps = (state) => {
  console.log(state.auth)
  return state.auth
}
const mapDispatchToProps = dispatch => ({
    login: (username, password) => dispatch(loginAction(username, password)),
    logout: () => dispatch(logoutAction())
})

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage };