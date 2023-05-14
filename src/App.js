import { BrowserRouter, Routes,Route } from 'react-router-dom';
import './App.css';
import MovieCard from './compnent/MovieCard';
import ShowMoreZone from './compnent/ShowMoreZone';
import { useState } from 'react';
import Navsmz from './compnent/Navsmz';
function App() {
  const [td,setTd]=useState(0)
  return (
    <div className="App">
      <BrowserRouter>
      <Navsmz/>
      <Routes>
        <Route exact path='/' element={<MovieCard setTd={setTd}/>}/>
        <Route exact path='/smz' element={<ShowMoreZone td={td}/>} />
      </Routes>    
      </BrowserRouter> 
    </div>
  );
}

export default App;
