// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home';
import Contact from './Components/Contact';
import Service from './Components/Service';
import { useSelector, useDispatch } from 'react-redux';
import { toggleDarkMode } from './Redux/darkModeSlice';

function App() {
  const {mode} = useSelector((state)=>state.darkMode);
  const dispatch= useDispatch();
  return (
    <div>
      <p onChange={()=>dispatch(toggleDarkMode())}>{mode? "I have changed theme to Dark" :"I have changed theme to Light"}</p>
      <div style={{background: mode ? 'black': 'white', color:mode ? '#7FEF96':'black', height:"40vh", margin:"0 auto"}}>
        <p>Geekster</p>
        <BrowserRouter>
          <Header />
          <button style={{cursor:"pointer"}} onClick={()=>dispatch(toggleDarkMode())}>{mode? "Toggle theme to light" :"Toggle theme to dark"}</button>
          <Routes>
          <Route path='/' element={<Home />}/>
            <Route path='/contact' element={<Contact />}/>
            <Route path='/service' element={<Service />}/>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
