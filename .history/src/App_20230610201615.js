import logo from './logo.svg';
import './App.css';

const App = () => {
  let name = 'Khánh Quỳnh';
  let obj = { id: '2', name: 'Huyen' };
  return (
    <div className="App">
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
