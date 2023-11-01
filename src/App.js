
import './App.css';
import Title from './components/Title/Title.js'
import InputBar from './components/InputBar/InputBar.js'
import { EncounterGeneratorProvider } from './components/encounterGeneratorContext'
import EncounterOutput from './components/EncounterOutput/EncounterOutput';

function App() {

  return (
    <EncounterGeneratorProvider>
      <div className="App">
        <Title />
        <InputBar />
        <EncounterOutput />
      </div>
    </EncounterGeneratorProvider>
  );
}

export default App;
