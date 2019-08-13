import React, { Fragment, useState, useEffect } from 'react';
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { 
    setFavoriteCharacterAction, 
    removeFavoriteCharacterAction, 
    getByIdAction 
} from '../../store/users/action';

import { SpinnerFav } from '../SpinnerFav'; 
import { connect } from 'react-redux';
import './style.scss';


const Wishlist = props => {

    const { character_id, setFavoriteCharacter, removeFavoriteCharacter } = props;
    const [ like, setLike ] = useState(false);
    const user = JSON.parse(localStorage.getItem('user'))


    useEffect(() => {
        props.getById(user.id)

    }, [])

    // update
    useEffect(() => {
        if (Object.entries(props.user).length !== 0) {
            
            props.user.favoriteCharacters && 
                setLike(props.user.favoriteCharacters.includes(character_id))
        } 
    }, [props.user])




    const handleOnClick = event => {
        event.preventDefault();

        const payload = {
            "user_id": user.id,
            "character_id": character_id
        }

        if (like) {
            removeFavoriteCharacter(payload);
        }  else {
            setFavoriteCharacter(payload);
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
    setFavoriteCharacter: payload => dispatch(setFavoriteCharacterAction(payload)),
    removeFavoriteCharacter: payload => dispatch(removeFavoriteCharacterAction(payload)),
    getById: payload => dispatch(getByIdAction(payload)),
})

const connectedWishlist = connect(mapStateToProps, mapDispatchToProps)(Wishlist);
export { connectedWishlist as Wishlist };