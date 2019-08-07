import React, { Fragment } from 'react';
import { Header } from './Header';
import { Footer } from './Footer';

import '../../assets/scss/style.scss';


export const Layout = props => {


    return(
        <Fragment>
            <Header />
            
            <section>
                <div className="container">
                    { props.children }                    
                </div>
            </section>
            <Footer />           
        </Fragment>
    );
}
