import logo from './logo.svg';
import './App.css';
import './dist/output.css'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './Pages/Home';
import Contato from './Pages/Contato';
import Sobre from './Pages/Sobre'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/Contato' element={<Contato/>}/>
        <Route path='/Sobre' element={<Sobre/>}/>
      </Routes>
    </Router>
  );
}

export default App;
