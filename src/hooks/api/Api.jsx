import React, { useEffect, useState } from "react"

const GamesData = ({ genre }) => {

  const [games, setGames] = useState([])
  const [category, setCategory] = useState([]);
  
  const fetchGamesData = () => {
    fetch(process.env.REACT_APP_API_URL, {
        method: "GET",
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_API_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_API_HOST,
        },
    })
    .then(response => {
        return response.json()
    })
    .then(data => {
        setGames(data)
    })
    .catch((error) => console.log(error));
  }

  useEffect(() => {
    fetchGamesData();
  }, []);
  
  useEffect(() => {

    const genres = {
      'shooters': 'Shooter',
      'sports': 'Sports',
      'adventure': 'MMORPG',
    };
    
    if (genre) {
      const filteredGames = games.filter((game) => game.genre === genres[genre]);
      setCategory(filteredGames);
    } else {
      setCategory(games);
    }
  }, [genre, games]);

  return (
    <div>
    {category.length > 0 && (
      <div className="container">
        <div className="row">
          {category.map(game => (
            <div className="col-md-4 p-3" key={game.id}>
              <div className="card">
                <a href={game.game_url}>
                  <img src={game.thumbnail} className="card-img-top" alt={game.title} />
                </a>
                <div className="card-body">
                  <p className="card-title">Titulo: {game.title}</p>
                  <p className="card-text">Genero: {game.genre}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
  </div>
  );
}

export default GamesData;