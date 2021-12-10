import './App.css';
import Navbar from './Components/Navbar/navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Videogames from './Components/Videogames'
import Formulario from './Components/Videogames/Formulario'
import Generos from './Components/Genres/Genre'
import Inicio from './Components/Inicio/Inicio'
import Error from './Components/404 Not Found'


function App() {
  return (
    <div className="App">
        <Router>
        <Navbar />
          <Routes>
            <Route path="/videogames" element={ <Videogames /> } />
            <Route path="/Formulario" element={ <Formulario /> } />
            <Route path="/Genres" element={ <Generos /> } />
            <Route path="/Inicio" element={ <Inicio /> } />
            <Route path="*" element={ <Error /> } />
          </Routes>
        </Router>
      
    </div>
  );
}

export default App;
