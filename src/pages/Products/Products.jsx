import { gamingBackground } from "../../styles/Styles/Styles"
import GamesData from "../../hooks/api/Api"

const Products = () => {
    return (
        <>
            <h2>Productos</h2>
            <div className="d-flex flex-row justify-content-center" style={gamingBackground}>
                <GamesData />
            </div>
        </>
    )
  }
  
  export default Products