import './App.css';
import NavBar from './components/NavBar/NavBar';
import { gamingBackground, headerHeight } from './styles/Styles/Styles';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  //Routeo de elementos y enlaces
  return (
    <>
      <div className="App">
        <BrowserRouter basename="/">
          <NavBar />
          <header className="App-header" style={{...gamingBackground, ...headerHeight}}> 
            <h1>Welcome to GamingFarm!</h1>
          </header>
          <div style={gamingBackground}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/:genre" element={<ItemListContainer />} />
              <Route path="/game/:id" element={<ItemDetailContainer />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
