
import './App.css';
import Nav from './views/Nav';
import { useState, useEffect } from 'react';
import Todo from './views/Todo';
import TableApi from './views/TableApi/TableApi';
import { Container } from 'react-bootstrap';
import { CountDown } from './views/CountDown/countdown';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  //re-render
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes>
          <Route path='/' element={<TableApi />}></Route>
          <Route path='/countdown' element={<CountDown />}></Route>
          <Route path='/todo'>
            {/* <Todo
              //props:value
              todos={todos}
              deleteDataTodo={deleteDataTodo}
            />
            <input type='text' value={age} onChange={(e) => handleAge(e)} />
            <button onClick={() => handleClickMe()} type='button'>Click me!</button> */}
          </Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
