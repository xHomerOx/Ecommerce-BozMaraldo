import { gamingBackground } from "../../styles/Styles/Styles";
import { useParams } from 'react-router-dom';
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";

const Categories = () => {

    const genres = {
        'shooters': 'Shooters',
        'sports': 'Sports',
        'adventure': 'Adventure',
    };

    const { genre, game } = useParams();

    return (
        <>
        <h2>{genres[genre]}</h2>
        <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>
            <ItemListContainer genre={genre} />
            <ItemDetailContainer game={game} />
        </div>
        </>
    )
  }
  
  export default Categories