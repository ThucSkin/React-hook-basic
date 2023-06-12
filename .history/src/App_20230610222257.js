import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


const App = () => {
  //sate
  let [name, setName] = useState('Thuc');
  const [age, setAge] = useState('21');
  const handleClickMe = () => {
    setName('KhanhQuynh');
  }
  const handleAge = (e) => {
    setAge(e.target.value);
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
        <input type='text' value={age} onChange={(e) => this.handleAge(e)} />
        <button onClick={() => handleClickMe()} type='button'>Click me!</button>

      </header>
    </div>
  );
}

export default App;
