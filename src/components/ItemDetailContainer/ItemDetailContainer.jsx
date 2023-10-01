import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Item from '../Item/Item';

const ItemDetailContainer = () => {
    
    const { id } = useParams();
    const [game, setGame] = useState({});

    useEffect(() => {
        fetch(process.env.REACT_APP_API_SINGLE_URL + `?id=${id}`, {
            method: "GET",
            headers: {
              "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
              "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
            },
          })
            .then((response) => response.json())
            .then((data) => {
                setGame(data);
            })
            .catch((error) => console.log(error));
    }, [id]);

    return (
        <>
            <Item game={game} />
        </>
    )
}

export default ItemDetailContainer;