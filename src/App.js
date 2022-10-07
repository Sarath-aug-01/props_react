import logo from './logo.svg';
import './App.css';
import Example from'./example.js'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Exercise 4 -static data using props.</h1>
        <Example/>
      </header>
    </div>
  );
}

export default App;
