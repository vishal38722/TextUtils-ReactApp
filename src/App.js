import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import About from './components/About';
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light'); // Whether dark mode is enabled or not
  const [checkBoxText, setCheckBoxText] = useState("Enable Dark Mode")
  //   const [alert, setAlert] = useState(null);

  //   const showAlert = (message, type)=>{
  //       setAlert({
  //         msg: message,
  //         type: type
  //       })
  //       setTimeout(() => {
  //           setAlert(null);
  //       }, 1500);
  //   }

  const ChangeMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#042743';
      setCheckBoxText("Enable Light Mode");
      //   showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white';
      setCheckBoxText("Enable Dark Mode");
      //   showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    <div>
      <Router>
      <Navbar title="TextUtils" mode={mode} changeMode={ChangeMode} checkboxText={checkBoxText} />
        <Routes>
          <Route exact path="/" element={<TextForm mode={mode} />} />
          <Route exact path="/about" element={<About mode={mode} />} />
        </Routes>
      </Router>

      {/* <Navbar title="TextUtils" mode={mode} changeMode={ChangeMode} checkboxText={checkBoxText}/>
    <div className='container'><TextForm mode={mode}/></div>
    
    <About mode={mode} /> */}


    </div>
  );
}

export default App;