import React from 'react';
import { gamingBackground } from "../../styles/Styles/Styles";
import { useParams } from 'react-router-dom';

const Item = () => {
    const { id, title, thumbnail, short_description, genre, platform, publisher, developer, release_date} = useParams();
    console.log(id)
    return (
        <>
            <h2>{title}</h2>
            <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>
            </div>
        </>
    )
}

export default Item;