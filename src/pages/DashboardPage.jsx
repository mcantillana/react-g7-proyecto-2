import React from 'react';
import { Layout } from '../components/common/Layout';
import Welcome from '../assets/images/welcome.png';

export const DashboardPage = props => {

    return(
        
        <Layout >
            <div className="text-center">
                <img src={Welcome} alt="Rick and Morty" className="img-fluid"/>
            </div>
        </Layout>
    
    );
}

// export default DashboardPage;