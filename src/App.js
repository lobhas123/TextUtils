
import { useState } from 'react';
import React from "react";
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {
  const [mode, setMode] = useState('light');//whether dark mode is enabled or not 
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type)=>{
      setAlert({
        msg: message,
        type: type
      })
      setTimeout(() => {
        setAlert(null);
      }, 1500);
  }
  const toggleMode = ()=>{
    if(mode==='light'){
      setMode('dark');
      document.body.style.backgroundColor = 'black';
      showAlert("Dark mode has been enabled", "success")
  }
  else{
    setMode('light');
    document.body.style.backgroundColor = 'white';
    showAlert("Dark mode has been disabled", "success") 
  }
}
  return (
   
    <>
      <Router>
      <Navbar title="TextUtils" mode={mode} toggleMode = {toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
      <Routes>
      `   <Route exact path="/about" element={<About />}/>
          <Route exact path="/" element={<TextForm showAlert ={showAlert} heading = "Enter the text to analyze" mode={mode}/>}/>
      </Routes>
      </div>
      </Router>
      
      
    </>
    
  );
}

export default App;
