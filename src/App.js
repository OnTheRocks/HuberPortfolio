import './App.css';
import About from './components/About/About';
import Home from './components/Home/Home';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="App">
     <NavBar />
     <Home />
     <About />
    </div>
  );
}

export default App;