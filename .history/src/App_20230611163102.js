import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import TableApi from './views/TableApi/TableApi';
import { Container } from 'react-bootstrap';
import { CountDown } from './views/CountDown/countdown';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  //state hook
  let [name, setName] = useState('Thuc');
  const [age, setAge] = useState('');
  const [todos, setTodos] = useState([
    { id: '1', name: 'Lan' },
    { id: '2', name: 'CC' },
    { id: '2', name: 'game' }
  ])
  // didmount
  useEffect(() => {

  }, [age])

  const handleClickMe = () => {
    if (!age) {
      alert('Please enter a valid age');
      return
    }
    let newTodo = { id: Math.floor(Math.random() * 100) + 1, name: age };
    setTodos([...todos, newTodo])
    setAge('');
  }
  const handleAge = (e) => {
    setAge(e.target.value);
  }
  const deleteDataTodo = (id) => {
    let curentTodo = todos;
    curentTodo = curentTodo.filter(item => item.id !== id);
    setTodos(curentTodo);
  }
  //re-render
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path='/' element={<TableApi />}></Route>
          <Route path='/countdown' element={<CountDown />}></Route>
          <Route path='/todo'>
            <Todo
              //props:value
              todos={todos}
              deleteDataTodo={deleteDataTodo}
            />
            <input type='text' value={age} onChange={(e) => handleAge(e)} />
            <button onClick={() => handleClickMe()} type='button'>Click me!</button>
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
