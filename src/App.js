import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';
import Alert from './components/Alert';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';


function App() {

  const [mode, setMode] = useState('light');  // Whether dark mode is enable or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({ msg: message, type });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  }


  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      showAlert('Dark mode has been enabled', 'success');
      document.body.style.backgroundColor = '#042743';
      document.title = 'TextUtils - Dark Mode';
    } else {
      setMode('light');
      showAlert('Light mode has been enabled', 'success');
      document.body.style.backgroundColor = 'white';
      document.title = 'TextUtils - Light Mode';
    }
  }

  return (
    <>
      {/* <Router> */}

      {/* <Navbar title='Navbar' aboutText='About' mode={mode} toggleMode={toggleMode}></Navbar> */}
      <Navbar title='Navbar' aboutText='About' mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3">
        {/* <Routes> */}
        {/* <Route exact path='/about' element={<About />} /> */}
        {/* <Route exact path='/' element={<Textform showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />} /> */}
        {/* </Routes> */}
        <Textform showAlert={showAlert} heading='Enter the text to analyze below' mode={mode} />
      </div>

      {/* </Router> */}
    </>
  );
}

export default App;
