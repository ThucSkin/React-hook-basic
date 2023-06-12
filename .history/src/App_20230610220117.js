import logo from './logo.svg';
import './App.css';
import Nav from './views/Nav';


const App = () => {
  let name = 'Khánh Quỳnh';
  const handleClickMe = () => {
    alert('Thuc badao')
  }

  return (
    <div className="App">
      <Nav />

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thuc Skin {name}
        </p>
        <input type='text' value={'thuc'} />
        <button onClick={() => handleClickMe()} type='button'>Click me!</button>

      </header>
    </div>
  );
}

export default App;
