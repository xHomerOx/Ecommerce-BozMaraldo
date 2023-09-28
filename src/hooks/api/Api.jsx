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
    if (genre) {
      const genre = games.filter((game) => game.genre === genre);
      setCategory(category);
    } else {
      setCategory(games);
    }
  }, [genre, games]);

  return (
    <div>
      {games.length > 0 && (
        <ul>
          {category.map(game => (
            <a href={game.game_url} key={game.id}>
              <img src={game.thumbnail} className="p-2" />        
            </a>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GamesData;