import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import {Routes, Route, Link} from 'react-router-dom'

import Home from './Pages/Home'
import LogIn from './Pages/Auth/LogIn'
import SignUp from './Pages/Auth/SignUp';

function App() {
  return (
    <div className="App">
      <div>
        <nav className='Nav'>
          <Link to='/'>Home</Link>
          <Link to='/'>Sign Up</Link>
          <Link to='/'>Login</Link>
        </nav>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/Log In" element={<LogIn />} />
          <Route path="/Sign Up" element={<SignUp />} />
        </Routes>
      </div>
   
    </div>
  );
}

export default App;
