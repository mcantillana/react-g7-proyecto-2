import React from 'react';
import { Layout } from '../components/common/Layout';
import Welcome from '../assets/images/welcome.png';

export const DashboardPage = props => {

    return(
        
        <Layout >
            <div className="text-center">
                {/*<h1 className="h1 mt-5">Bienvenido</h1>*/}
                <img src={Welcome} alt="Rick and Morty" className="img-fluid"/>
            </div>
        </Layout>
    
    );
}
