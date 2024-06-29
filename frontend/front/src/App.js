import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login';
import Signup from './Signup'
// import Forms from './Forms';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
          <Routes>
            <Route path='/' element={<Login />}/>
            <Route path='signup' element={<Signup />}/>
          </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
