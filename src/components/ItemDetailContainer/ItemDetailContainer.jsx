import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail';
import { doc, getDoc } from 'firebase/firestore';
import { db, storage } from '../../services/FirebaseConfig/FirebaseConfig';
import { ref, getDownloadURL } from '@firebase/storage';

const ItemDetailContainer = () => {
    const { id } = useParams();
    const [game, setGame] = useState({});
    const [loading, setLoading] = useState(true);
    const [thumbnail, setThumbnail] = useState('');
    const navigate = useNavigate(); 

    useEffect(() => {
        const fetchGameDetails = async () => {
            try {
                const gameRef = doc(db, 'games', id);
                const gameDoc = await getDoc(gameRef);

                if (!gameDoc.exists()) {
                    navigate('/404');
                } else {

                    const gameData = gameDoc.data();
                    const storageRef = ref(storage);
                    const imagesRef = ref(storageRef, 'images');
                    const fileName = gameData.thumbnail;
                    const spaceRef = ref(imagesRef, fileName);
                    const thumbnail = await getDownloadURL(spaceRef);

                    setThumbnail(thumbnail);

                    setGame(gameData);
                    setLoading(false);
                }
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };

        fetchGameDetails();
    }, [id, navigate]);

    return (
        <>
            {loading ? (
                <p>Loading...</p>
            ) : (
                <ItemDetail game={game} id={id} thumbnail={thumbnail} />
            )}
        </>
    );
};

export default ItemDetailContainer;
