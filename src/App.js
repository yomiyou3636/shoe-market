import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Nike from './nike';
import Jordan from './jordan';
import Adidas from './adidas';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nike />} />
        <Route path="/jordan" element={<Jordan />} />
        <Route path="/adidas" element={<Adidas />} />
        </Routes>
        </BrowserRouter>
       
  );
}

export default App;
