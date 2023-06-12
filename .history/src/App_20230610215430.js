import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';


const App = () => {
  let name = 'Khánh Quỳnh';

  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thuc Skin {name}
        </p>
        <button type='button'>Click Me!</button>

      </header>
    </div>
  );
}

export default App;
