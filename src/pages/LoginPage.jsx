import React, { Fragment, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import { loginAction, logoutAction } from '../store/auth/action';
import { connect } from 'react-redux';
import { Alert } from 'react-bootstrap';

import '../assets/scss/login.scss';
import logo from '../assets/images/Rick_and_Morty.svg';

const LoginPage = props => {

    const [ redirect, setRedirect ] = useState(false);

    const [ form, setForm ] = useState({      
        username: '',
        password: '',
        submitted: false
    });

    const handlerOnChange = ({target}) => {
        const { name, value } = target;
        setForm({
          ...form,
          [name]: value
        })
    }

    const handlerOnSubmit = event => {

      event.preventDefault();
      setForm({...form, submitted: true })
      const { username, password } = form;
      if (username && password) {
        props.login(username, password);
      }

      // setRedirect(true);
    }

    if (redirect) {
      return <Redirect to="/dashboard" />
    }

    return(
        <Fragment>
            <form className="form-signin " onSubmit={handlerOnSubmit} >
              <div className="text-center mb-4">

                <img className="mb-4" src={logo} alt=""  height="80" />           
                
                {/*<h1 className="h3 mb-3 font-weight-normal">Login Form</h1>                */}
              </div>

              {
                props.error &&  
                <Alert variant="danger">
                  {props.error_message}
                </Alert>
              }
              <div className={'form-label-group ' + (form.submitted && !form.username ? ' is-invalid' : '')}>
                <input type="text" id="username" name="username" value={form.name} onChange={handlerOnChange} className="form-control" placeholder="Username"  />
                <label htmlFor="username">Username</label>
                {form.submitted && !form.username &&
                    <div className="invalid-feedback">Username is required</div>
                }
              </div>

              <div className={'form-label-group' + (form.submitted && !form.password ? ' is-invalid' : '')}>
                <input type="password" id="password" name="password" value={form.password} onChange={handlerOnChange} className="form-control" placeholder="Password"  />
                <label htmlFor="password">Password</label>
                {form.submitted && !form.password &&
                    <div className="invalid-feedback">Password is required</div>
                }
              </div>

              <div className="checkbox mb-3">

              </div>
              <button className="btn btn-lg btn-primary btn-block" type="submit">Entrar</button>
              <span>¿Todavía no tienes tu cuenta? <Link to="/sign_in">crear cuenta</Link></span>
              <p className="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
            </form>
           
        </Fragment>
    );
}


const mapStateToProps = (state) => {
  console.log(state.auth)
  return state.auth
}
const mapDispatchToProps = dispatch => ({
    login: payload => dispatch(loginAction(payload)),
    logout: () => dispatch(logoutAction())
})

const connectedLoginPage = connect(mapStateToProps, mapDispatchToProps)(LoginPage);
export { connectedLoginPage as LoginPage };