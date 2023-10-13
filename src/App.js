import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textform from './components/Textform';
// import About from './components/About';

function App() {

  const [mode, setMode] = useState('light');  // Whether dark mode is enable or not

  const toggleMode = () => {
    if (mode === 'light')
      setMode('dark');
    else
      setMode('light');
  }

  return (
    <>
      <Navbar title='Navbar' aboutText='About TextUtils' mode={mode} toggleMode={toggleMode}></Navbar>
      <div className="container my-3">
        <Textform heading='Enter the text to analyze below' />
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;
