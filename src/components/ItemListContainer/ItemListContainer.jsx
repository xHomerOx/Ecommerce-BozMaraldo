import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../services/FirebaseConfig/FirebaseConfig';

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
    
            querySnapshot.forEach((game) => {
              gamesData.push({
                id: game.id,
                data: game.data(),
              });
            });
    
            console.log(gamesData);
            
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
        console.log(genre);
        if (genre) {
            const filteredGames = games.filter((game) => game.data.genre.toLowerCase() === genre.toLowerCase());
            setFilteredGames(filteredGames);
        } else {
            setFilteredGames(games);
        }
    }, [genre, games]);

    const genres = {
        Shooters: "Shooter",
        Sports: "Sports",
        Adventure: "Adventure",
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
                                    <Col key={game.data.id}>
                                        <Card className='bg-dark'>
                                            <Card.Img variant="top" src={game.data.thumbnail} alt={game.data.title} />
                                            <Card.Body>
                                                <Card.Title className='text-white'>Title: {game.data.title}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className='bg-dark text-white'>Genre: {game.data.genre}</ListGroup.Item>
                                            </ListGroup>
                                            <Card.Body>
                                                <Link to={`/game/${game.data.id}`} className="btn btn-primary">View details</Link>
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