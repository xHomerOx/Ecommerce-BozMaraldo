import React from 'react';
import GamesData from '../../hooks/api/Api';

const ItemListContainer = ({ genre }) => {

    const { category } = GamesData({ genre });

    return (
        <>
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
        </>
    );
};

export default ItemListContainer;