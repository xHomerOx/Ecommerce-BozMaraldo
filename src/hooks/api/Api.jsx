import React, { useEffect, useState } from "react"

const GamesData = () => {
  const [games, setGames] = useState([])

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
    fetchGamesData()
  }, [])

  return (
    <div>
      {games.length > 0 && (
        <ul>
          {games.map(game => (
            <li key={game.id}>{game.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default GamesData;