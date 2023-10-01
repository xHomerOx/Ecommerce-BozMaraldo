import React from 'react';
import { gamingBackground } from "../../styles/Styles/Styles";

const Item = ({ game }) => {
    return (
        <>
            <h2>{game.title}</h2>
            <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>   
            </div>
        </>
    )
}

export default Item;