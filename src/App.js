import logo from './logo.svg';
import './App.css';
import Title from './components/Title/Title.js'
import InputBar from './components/InputBar/InputBar.js'
import EncounterOutput from './components/EncounterOutput/EncounterOutput';

// export const EncounterGeneratorContext = React.createContext();

function App() {

  // const [encounters, setEncounters] = useState([]);

  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Title />
      <InputBar />
      <EncounterOutput />
    </div>
  );
}

export default App;
