import './App.css';
import NavBar from './components/NavBar/NavBar';
import gamingBackground from './styles/Styles';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Categories from './pages/Categories/Categories';
import Games from './pages/Games/Games';


function App() {

  return (
    <div className="App">
      <BrowserRouter basename="/">
        <NavBar />
        <header className="App-header" style={gamingBackground}> 
          <ItemListContainer greeting={'Welcome to GamingFarm.'} />
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/games" element={<Products />} />
          <Route path="/games/:catId" element={<Categories />} />
          <Route path="/games/:gameId" element={<Games />} />
        </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
