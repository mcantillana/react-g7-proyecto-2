import React, { useEffect, useState } from 'react';
import { Layout } from '../components/common/Layout';
import { Row, Col, Button} from 'react-bootstrap';
import { Spinner } from '../components/Spinner';
import { TitleSection } from '../components/common/TitleSection';
import { getAllAction, getByIdAction } from '../store/users/action';

import { connect } from 'react-redux';

const SimilarTastesPage = props => {

    const user = JSON.parse(localStorage.getItem('user'))
    const [ similarUser, setSimilarUser ] = useState([])


    // const isSimilar = userData => {

    //     if (user.favoriteEpisodes) {
    //         console.log(user.favoriteEpisodes)
    //         return true
    //     } else {
    //         return false
    //     }
        
    // }
    // mounted
    useEffect(() => {
        props.getAllUser()
        props.getById(user.id)
    }, [])


    // update
    useEffect(() => {
        console.log(props.users)
        console.log(props.user)

        // if (props.user && props.users) {

        //     const similar = props.users.filter(user => isSimilar(user))
        //     // console.log(props.user.favoriteEpisodes)
        //     // props.user.favoriteEpisodes.map(favorite => {

        //     // })
        //     // for(let i=0; i < props.user.favoriteEpisodes.length; i++) {
        //     //     console.log(props.user.favoriteEpisodes[i])
        //     // }
        // }
        

    }, [props.users, props.user])
    console.log(props)
    return (
        <Layout>            
             <TitleSection title="Similar Tastes" />
             {
                props.loading ? 
                    <Spinner /> 
                :
                    <p className="h3 text-center mt-4">No hay usuarios similares</p>
             }
        </Layout>
    );
}



const mapStateToProps = state => ({
  "user": state.users.user,
  "users": state.users.users,
  "loading": state.users.loading
})

const mapDispatchToProps = dispatch => ({
    getAllUser: () => dispatch(getAllAction()),
    getById: (payload) => dispatch(getByIdAction(payload)),
})

const connectedSimilarTastesPage = connect(mapStateToProps, mapDispatchToProps)(SimilarTastesPage);
export { connectedSimilarTastesPage as SimilarTastesPage };
