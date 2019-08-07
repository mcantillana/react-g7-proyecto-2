import React from 'react'
import './style.scss';

export const Spinner = props => {
    return (
        <div className="text-center">
        <div className="lds-ellipsis" >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
        </div>
    );
}
