// import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Header from './Components/Header';
import Home from './Components/Home'
import Contact from './Components/Contact';
import Service from './Components/Service';
import Posts from './Components/Posts';
import { ThemeContext, themes } from './Context/ThemeContext';


function App() {
  const [theme, setTheme] = useState(themes.light);

  //btn
  function handleOnClick() {
    theme === themes.light ? setTheme(themes.dark) : setTheme(themes.light);
  }

  const body = document.body;
  useEffect(() => {
    switch (theme) {
      case themes.light:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
        break;
      case themes.dark:
        body.classList.remove("bg-light");
        body.classList.remove("text-dark");
        body.classList.add("bg-dark");
        body.classList.add("text-light");
        break;
      default:
        body.classList.remove("bg-dark");
        body.classList.remove("text-light");
        body.classList.add("bg-light");
        body.classList.add("text-dark");
    }
  }, [theme]);

  return (
    <div style={{height:"42vh"}}>
    <ThemeContext.Provider value={{ theme, handleOnClick }}>
      <h6>geekster</h6>
    <Router>
    <Header/>
    
    <Posts theme={theme} />
    <Routes>
    <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>}/>
      <Route path='/service' element={<Service/>}/>
    </Routes>

  </Router>
    </ThemeContext.Provider>
  </div>
  );
}

export default App;
