import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState } from 'react';


const App = () => {
  //sate hook
  let [name, setName] = useState('Thuc');
  const [age, setAge] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', name: 'Lan' },
    { id: '2', name: 'CC' }
  ])

  const handleClickMe = () => {
    setName(age);
    setAge('');
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
        <div className='todos-container'>
          <div className='todos-child'>Home 1</div>
          <div className='todos-child'>Home 2</div>
        </div>
        <input type='text' value={age} onChange={(e) => handleAge(e)} />
        <button onClick={() => handleClickMe()} type='button'>Click me!</button>

      </header>
    </div>
  );
}

export default App;
