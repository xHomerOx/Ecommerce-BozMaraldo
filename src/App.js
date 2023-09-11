import './App.css';
import NavBar from './components/NavBar/NavBar';
import gamingImg from './assets/gaming-background.jpg';

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
          <h1>
            Welcome to GamingFarm.
          </h1>
        </header>
      </div>
    </>
  );
}

export default App;
