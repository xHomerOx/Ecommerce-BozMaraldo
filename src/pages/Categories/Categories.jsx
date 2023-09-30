import { gamingBackground } from "../../styles/Styles/Styles"
import GamesData from "../../hooks/api/Api"
import { useParams } from 'react-router-dom';

const Categories = () => {

    const { genre } = useParams();

    return (
        <>
        <h2>Categorías</h2>
        <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>
            <GamesData genre={genre} />
        </div>
        </>
    )
  }
  
  export default Categories