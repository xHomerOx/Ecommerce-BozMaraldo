import { gamingBackground } from "../../styles/Styles/Styles"
import GamesData from "../../hooks/api/Api"

const Categories = () => {
    return (
        <>
        <h2>Categorías</h2>
        <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>
            <GamesData />
        </div>
        </>
    )
  }
  
  export default Categories