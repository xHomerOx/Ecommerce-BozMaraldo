import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore";
import { db, storage } from '../../services/FirebaseConfig/FirebaseConfig';
import { ref, getDownloadURL } from '@firebase/storage';

const ItemListContainer = () => {
    const [games, setGames] = useState([]);
    const [filteredGames, setFilteredGames] = useState([]);
    const [loading, setLoading] = useState(true);

    const { genre } = useParams();

    useEffect(() => {
        const fetchData = async () => {
          try {
            const querySnapshot = await getDocs(collection(db, 'games'));
            const gamesData = [];
    
            const imagesLoad = querySnapshot.docs.map(async (game) => {
                const gameData = game.data();
                const storageRef = ref(storage);
                const imagesRef = ref(storageRef, 'images');
                const fileName = gameData.thumbnail;
                const spaceRef = ref(imagesRef, fileName);
                const thumbnail = await getDownloadURL(spaceRef);
                gameData.id = game.id;
                gameData.thumbnail = thumbnail;
                gamesData.push({
                    id: game.id,
                    data: gameData,
                });
            });

            await Promise.all(imagesLoad);
            
            setGames(gamesData);
            setLoading(false);

            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };
    
        fetchData();
    }, []); 


    useEffect(() => {
        if (genre) {
            const filteredGames = games.filter((game) => game.data.genre.toLowerCase() === genre.toLowerCase());
            setFilteredGames(filteredGames);
        } else {
            setFilteredGames(games);
        }
    }, [genre, games]);

    const genres = {
        shooter: "Shooter",
        sports: "Sports",
        adventure: "Adventure"
    };
    
    return (
            <>
                <h2>{genres[genre]}</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <Container>
                        <Row xs={1} md={3} className="g-4">
                            {filteredGames.length > 0 && (
                                filteredGames.map(game => (
                                    <Col key={game.id}>
                                        <Card className='bg-dark'>
                                            <Card.Img variant="top" src={game.data.thumbnail} alt={game.data.title} />
                                            <Card.Body>
                                                <Card.Title className='text-white'>Title: {game.data.title}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className='bg-dark text-white'>Genre: {game.data.genre}</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body>
                                                <Link to={`/game/${game.id}`} className="btn btn-primary">View details</Link>
                                            </Card.Body>
                                        </Card>
                                    </Col>
                                ))
                            )}   
                        </Row>
                    </Container> 
                )
            }
        </>
    );
};

export default ItemListContainer;