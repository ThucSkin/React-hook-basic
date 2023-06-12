import logo from './logo.svg';
import './App.css';

const App = () => {
  let name = 'Khánh Quỳnh';
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Thuc Skin {name}
        </p>

      </header>
    </div>
  );
}

export default App;
