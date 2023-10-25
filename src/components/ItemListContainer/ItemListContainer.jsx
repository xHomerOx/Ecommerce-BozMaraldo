import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import ListGroup from 'react-bootstrap/ListGroup';
import { Link } from "react-router-dom";
import { useParams } from 'react-router-dom';
import { collection, getDocs } from "firebase/firestore"; 
import { db } from '../../services/FirebaseConfig/FirebaseConfig';

const ItemListContainer = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

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
    
            setGames(gamesData);
            setLoading(false);
            
            } catch (error) {
                console.error('Error:', error);
                setLoading(false);
            }
        };
    
        fetchData();
      }, []); 



    const genres = {
        'shooters': 'Shooters',
        'sports': 'Sports',
        'adventure': 'Adventure',
    };

    const { genre } = useParams();

    return (
            <>
                <h2>{genres[genre]}</h2>
                {loading ? (
                    <p>Loading...</p>
                ) : (
                    <Container>
                        <Row xs={1} md={3} className="g-4">
                            {games.length > 0 && (
                                games.map(game => (
                                    <Col key={game.id}>
                                        <Card className='bg-dark'>
                                            <Card.Img variant="top" src={game.thumbnail} alt={game.title} />
                                            <Card.Body>
                                                <Card.Title className='text-white'>Title: {game.title}</Card.Title>
                                            </Card.Body>
                                            <ListGroup className="list-group-flush">
                                                <ListGroup.Item className='bg-dark text-white'>Genre: {game.genre}</ListGroup.Item>
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