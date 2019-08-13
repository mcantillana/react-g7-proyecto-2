import React from 'react'
import './style.scss';


export const Spinner = props => {

    const { size, bg } = props;
    
    let ldsDivStyle = {}
    let EllipsisStyle = {}

    if (size === "xs") {
        EllipsisStyle = {
            height: "15px"
        }
        
        ldsDivStyle = {
            top: "4px",
            background: bg 
        }
    }

 

    return (
        <div className="text-center">
        <div className="lds-ellipsis" style={EllipsisStyle}>
            <div style={ldsDivStyle}></div>
            <div style={ldsDivStyle}></div>
            <div style={ldsDivStyle}></div>
            <div style={ldsDivStyle}></div>
        </div>
        </div>
    );
}
