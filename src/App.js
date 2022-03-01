// import logo from './logo.svg';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div>
      <p>Blockchain Explorer</p>
      <div className="landing-search">
        <SearchBar />
      </div>
    </div>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <SearchBar />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Blockchain Explorer
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
