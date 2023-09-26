import './App.css';
import NavBar from './components/NavBar/NavBar';
import gamingImg from './assets/gaming-background.jpg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Categories from './pages/Categories/Categories';
import Games from './pages/Games/Games';


function App() {

  const gamingBackground = {
      backgroundImage: `url(${gamingImg})`,
      backgroundSize: 'cover',
      height: '100vh',
      backgroundRepeat: 'no-repeat'
  };

  return (
    <div className="App">
        <NavBar />
        <header className="App-header" style={gamingBackground}> 
          <ItemListContainer greeting={'Welcome to GamingFarm.'} />
        </header>
        <BrowserRouter basename="/">
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
