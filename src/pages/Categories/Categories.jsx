import { gamingBackground } from "../../styles/Styles/Styles"
import { useParams } from 'react-router-dom';
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";

const Categories = () => {

    const { genre } = useParams();

    return (
        <>
        <h2>Categorías</h2>
        <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>
            <ItemListContainer genre={genre} />
        </div>
        </>
    )
  }
  
  export default Categories