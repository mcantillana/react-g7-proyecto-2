import React, { Fragment, useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { 
    setFavoriteEpisodeAction, 
    removeFavoriteEpisodeAction, 
    getByIdAction 
} from '../../store/users/action';

import { SpinnerFav } from '../SpinnerFav'; 
import { connect } from 'react-redux';
import './style.scss';


const Wishlist = props => {

    const { episode_id, setFavoriteEpisode, removeFavoriteEpisode } = props;
    const [ like, setLike ] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        props.getById(user.id)

    }, [])

    // update
    useEffect(() => {
        if (Object.entries(props.user).length !== 0) {
            
            props.user.favoriteEpisodes && 
                setLike(props.user.favoriteEpisodes.includes(episode_id))
        } 
    }, [props.user])




    const handleOnClick = event => {
        event.preventDefault();

        const payload = {
            "user_id": user.id,
            "episode_id": episode_id
        }

        if (like) {
            removeFavoriteEpisode(payload);
        }  else {
            setFavoriteEpisode(payload);
        }
        props.getById(user.id)

    }

    return (
        <Fragment>

                {
                    props.loading_favorite?  
                        <SpinnerFav  />
                    :
                        <a href="/#" className="wishlist" onClick={handleOnClick}>
                            {
                                like ? <FaHeart /> : <FaRegHeart />
                            }                
                        </a>
                }    
        </Fragment>
    );
}

const mapStateToProps = state => ({
  "user": state.users.user,
  "loading_favorite": state.users.loading_set_favorite
})

const mapDispatchToProps = dispatch => ({
    setFavoriteEpisode: payload => dispatch(setFavoriteEpisodeAction(payload)),
    removeFavoriteEpisode: payload => dispatch(removeFavoriteEpisodeAction(payload)),
    getById: payload => dispatch(getByIdAction(payload)),
})

const connectedWishlist = connect(mapStateToProps, mapDispatchToProps)(Wishlist);
export { connectedWishlist as Wishlist };