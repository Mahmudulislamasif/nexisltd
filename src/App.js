import logo from './logo.svg';
import './App.css';
import Registration from './Components/Registration';
import { Route, Routes } from 'react-router-dom';
import Login from './Components/Login';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
       <Routes>
           <Route path='/' element={<Registration/>}></Route>
           <Route path='signup' element={<Registration/>}></Route>
           <Route path='home' element={<Home/>}></Route>
           <Route path='login' element={<Login/>}></Route>
       </Routes>
    </div>
  );
}

export default App;
