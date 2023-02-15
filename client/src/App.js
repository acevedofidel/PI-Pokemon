import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LandingPage from './componets/Landing/landingPage';
import Home from './componets/Home/Home';
import CreatePokemon from './componets/CreatePokemon/CreatePokemon'
import Detail from './componets/Detail/Detail'


function App() {
  return (
   
    <BrowserRouter>
    <div className="App">
      <Routes>
        <Route exact path= '/' element= {<LandingPage/>}/>
        <Route path= '/home' element= {<Home/>}/>
        <Route path= '/detail/:id' element= {<Detail/>}/>
        <Route path= '/create' element= {<CreatePokemon/>}/>
     </Routes>
      
    </div>
    </BrowserRouter>
  );
}

 export default App;
