import React, { Fragment, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import {Form, Button, Alert } from 'react-bootstrap';
import { registerAction } from '../store/registration/action';
import { connect } from 'react-redux';
import { Spinner } from '../components/Spinner';

import '../assets/scss/login.scss';
import logo from '../assets/images/Rick_and_Morty.svg';

const RegisterPage = props => {

    const [ validated, setValidated ] = useState(false);

    const [ form, setForm ] = useState({
      name: '',
      username: '',
      email: '',
      password: '',
      favoriteEpisodes: [],
      favoriteCharacters: []
    })

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
        // const { username, password } = form;
          
        
        
        if (currentTarget.checkValidity()) {
            // console.log('valid register success')
            // console.log('register', form);
            props.register(form);
        }
        setValidated(true);
    }

    if (props.valid_register) {
      return <Redirect to="/" />
    }

    // console.log(props)
    return(
        <Fragment>
           
           <Form noValidate validated={validated} onSubmit={handleOnSubmit} className="form-signin">
               <div className="text-center mb-4">                 
                 <img className="mb-4" src={logo} alt=""  height="80" />           
                 <h1 className="h3 mb-3 font-weight-normal">Register Form</h1>                
               </div>
                {
                  props.error &&  
                  <Alert variant="danger">
                    {props.error_message}
                  </Alert>
                }
               <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter Name" value={form.name} onChange={handlerOnChange} required id="name" name="name"/>
                </Form.Group>

                <Form.Group>
                  <Form.Label>Username</Form.Label>
                  <Form.Control type="text" placeholder="Enter Username" value={form.username} onChange={handlerOnChange} required id="username" name="username"/>
                </Form.Group>
                
                <Form.Group>
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Enter E-mail" value={form.email} onChange={handlerOnChange} required id="email" name="email" />
                </Form.Group>

                <Form.Group>
                  <Form.Label >Password</Form.Label>
                  <Form.Control type="password" placeholder="Enter Password" value={form.password} onChange={handlerOnChange} required id="password" name="password"/>
                </Form.Group>


                <Button variant="primary" block size="lg" type="submit">
                  {
                    props.loading ? 
                    <Spinner size="xs" bg="white" /> : 
                    "Create Account"
                  }
                </Button>
                <p className="mt-1">¿Ya posees una cuenta? <Link to="/">Imgresa acá</Link></p>

                <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>

               </Form>
        </Fragment>
    );
}


const mapStateToProps = (state) => {
  return state.registration
}
const mapDispatchToProps = dispatch => ({
    register: payload => dispatch(registerAction(payload)),
})

const connectedRegisterPage = connect(mapStateToProps, mapDispatchToProps)(RegisterPage);
export { connectedRegisterPage as RegisterPage };