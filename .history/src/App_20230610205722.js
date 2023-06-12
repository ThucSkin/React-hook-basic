import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';
import './Nav.scss'

const App = () => {
  let name = 'Khánh Quỳnh';
  let obj = { id: '2', name: 'Huyen' };
  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thuc Skin {name} {obj.name} {obj.id}
        </p>

      </header>
    </div>
  );
}

export default App;
