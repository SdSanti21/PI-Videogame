import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom' //switch?
import Formulario from './Components/Videogames/Formulario'
import Home from './Components/Home/Home'
import Error from './Components/404 Not Found'
import LandingPage from './Components/LandingPage/landingPage'
import Detalle from './Components/Detalle/Detalle'

function App() {
  return (
    <div className="App">
      
       <div>
      
          <Routes>
            <Route exact path="/" element={ <LandingPage /> }/>
            <Route exact path="/Home" element={ <Home /> }/>
            <Route exact path="/Formulario" element={ <Formulario /> } />
            <Route exact path="/videogames/:id" element={ <Detalle /> } />
            <Route exact path="*" element={ <Error /> } />
          </Routes>
        
        </div>
    </div>
  );
}

export default App;
