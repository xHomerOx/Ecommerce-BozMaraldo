import './App.css';
import NavBar from './components/NavBar/NavBar';
import { gamingBackground, headerHeight } from './styles/Styles/Styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Categories from './pages/Categories/Categories';
import Item from './components/ItemDetailContainer/ItemDetailContainer';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter basename="/">
          <NavBar />
          <header className="App-header" style={{...gamingBackground, ...headerHeight}}> 
            <h1>Welcome to GamingFarm.</h1>
          </header>
          <div style={gamingBackground}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/:genre" element={<Categories />} />
              <Route path="/game/:id" element={<Item />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
