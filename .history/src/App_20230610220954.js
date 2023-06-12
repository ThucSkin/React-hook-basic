import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


const App = () => {
  //sate
  const [name, setName] = useState('Thuc')
  const handleClickMe = () => {
    alert('Thuc badao')
  }
  //re-render
  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello {name}
        </p>
        <input type='text' />
        <button onClick={() => handleClickMe()} type='button'>Click me!</button>

      </header>
    </div>
  );
}

export default App;
