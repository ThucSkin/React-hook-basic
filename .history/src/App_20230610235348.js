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
    { id: '2', name: 'CC' },
    { id: '2', name: 'game' }
  ])

  const handleClickMe = () => {
    let newTodo = { id: 'abc', name: age };
    setTodos([...newTodo])

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
          {todos.map(item => {
            return (
              <li key={item.id} className='todos-child'>{item.id} - {item.name}</li>
            )
          })}

        </div>
        <input type='text' value={age} onChange={(e) => handleAge(e)} />
        <button onClick={() => handleClickMe()} type='button'>Click me!</button>

      </header>
    </div>
  );
}

export default App;
