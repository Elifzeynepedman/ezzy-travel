import './App.css';
import Home from './pages/Home/Home';
import {BrowserRouter, Routes,Route} from 'react-router-dom'
import Flights from './pages/Flights/Flights.jsx'
import AirportTaxis from './pages/AirportTaxis/AirportTaxis.jsx'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/flights" element={<Flights/>}/>
        <Route path="/taxis" element={<AirportTaxis/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
