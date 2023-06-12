import logo from './logo.svg';
import './App.css';

const App = () => {
  let name = 'Khánh Quỳnh';
  let num = 2023
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thuc Skin {name} {num}
        </p>

      </header>
    </div>
  );
}

export default App;
