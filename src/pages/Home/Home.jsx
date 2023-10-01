import { gamingBackground } from "../../styles/Styles/Styles"
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer"

const Home = () => {
  return (
    <>
      <h2>Inicio</h2>
      <div className="d-flex flex-row justify-content-center text-white" style={gamingBackground}>
        <ItemListContainer />
      </div>
    </>
  )
}

export default Home