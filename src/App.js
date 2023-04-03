import logo from './logo.svg';
import './App.css';
import QuoteBox from './Components/QuoteBox';
import { useState } from 'react';


function App() {
  const [colorChange, setColor] = useState('green');

  const clickHandler = (colorChange) => {
    setColor(colorChange);
  }
  return (
    <div>
      <QuoteBox/>
    </div>
  );
}

export default App;
