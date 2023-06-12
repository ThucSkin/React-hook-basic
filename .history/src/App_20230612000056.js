
import './App.scss';
import Nav from './views/Nav';
import Todo from './views/Todo';
import TableApi from './views/TableApi/TableApi';
import { CountDown } from './views/CountDown/countdown';
import { Routes, Route } from 'react-router-dom'
import { Blog } from './views/Blog';
import DetailBlog from './views/BlogDetail';
import { Container } from 'react-bootstrap';
import AddNewUser from './views/AddNewUser';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Container className='container'>
          <Routes>
            <Route path='/' element={<TableApi />} />
            <Route path='/countdown' element={<CountDown />} />
            <Route path='/todo' element={<Todo />} />
            <Route path='/blog' element={<Blog />} />
            <Route path='/blog/:id' element={<DetailBlog />} />
            <Route path='/add/user' element={<AddNewUser />} />
          </Routes>
        </Container>
      </header>
    </div>
  );
}

export default App;
