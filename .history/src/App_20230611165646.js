
import './App.css';
import Nav from './views/Nav';
import Todo from './views/Todo';
import TableApi from './views/TableApi/TableApi';
import { CountDown } from './views/CountDown/countdown';
import { Routes, Route } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Routes className='mt-4'>
          <Route path='/' element={<TableApi />}></Route>
          <Route path='/countdown' element={<CountDown />}></Route>
          <Route path='/todo' element={<Todo />}></Route>
        </Routes>
      </header>
    </div>
  );
}

export default App;
