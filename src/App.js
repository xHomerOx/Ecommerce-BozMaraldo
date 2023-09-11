import './App.css';
import NavBar from './components/NavBar/NavBar';
import gamingImg from './assets/gaming-background.jpg';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

function App() {

  const gamingBackground = {
      backgroundImage: `url(${gamingImg})`,
      backgroundSize: 'cover',
      height: '100vh',
      backgroundRepeat: 'no-repeat'
  };

  return (
    <>
    <NavBar />
     <div className="App">
        <header className="App-header" style={gamingBackground}> 
          <ItemListContainer greeting={'Welcome to GamingFarm.'} />
        </header>
      </div>
    </>
  );
}

export default App;
