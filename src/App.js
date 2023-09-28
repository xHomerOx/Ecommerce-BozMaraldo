import './App.css';
import NavBar from './components/NavBar/NavBar';
import { gamingBackground, headerHeight } from './styles/Styles/Styles';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Products from './pages/Products/Products';
import Categories from './pages/Categories/Categories';

function App() {

  return (
    <>
      <div className="App">
        <BrowserRouter basename="/">
          <NavBar />
          <header className="App-header" style={{...gamingBackground, ...headerHeight}}> 
            <ItemListContainer greeting={'Welcome to GamingFarm.'} />
          </header>
          <div style={gamingBackground}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/games/" element={<Products />} />
              <Route path="/games/:genre" element={<Categories />} />
            </Routes>
          </div>
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
