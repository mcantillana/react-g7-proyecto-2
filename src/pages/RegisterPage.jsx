import React, { Fragment, useState } from 'react';
import { Redirect, Link } from 'react-router-dom';
import '../assets/scss/login.scss';


export const RegisterPage = props => {

    const [ redirect, setRedirect ] = useState(false);

    const handlerOnSubmit = event => {

      event.preventDefault();

      setRedirect(true);
    }

    if (redirect) {
      return <Redirect to="/dashboard" />
    }

    return(
        <Fragment>
            <form class="form-signin" onSubmit={handlerOnSubmit}>
              <div class="text-center mb-4">

                <img class="mb-4" src="https://desafiolatam.com/assets/home/logo-academia-bla-790873cdf66b0e681dfbe640ace8a602f5330bec301c409744c358330e823ae3.png" alt=""  height="40" />
                
                <h1 class="h3 mb-3 font-weight-normal">Register Form</h1>                
              </div>
                
                <div class="form-label-group">
                  <input type="username" id="username" class="form-control" placeholder="name" required autofocus />
                  <label for="name">Name</label>
                </div>

              <div class="form-label-group">
                <input type="username" id="username" class="form-control" placeholder="Username" required  />
                <label for="username">Username</label>
              </div>

              <div class="form-label-group">
                <input type="password" id="password" class="form-control" placeholder="Password" required />
                <label for="password">Password</label>
              </div>

              <div class="checkbox mb-3">
    
              </div>
              <button class="btn btn-lg btn-primary btn-block" type="submit">Create Account</button>
              <span>¿Ya posees una cuenta? <Link to="/">Imgresa acá</Link></span>

              <p class="mt-5 mb-3 text-muted text-center">&copy; 2019</p>
            </form>
           
        </Fragment>
    );
}

// export default RegisterPage;