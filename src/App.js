import './App.css';
import { ChakraProvider } from '@chakra-ui/react'
import Title from './components/Title/Title.js'
import InputBar from './components/InputBar/InputBar.js'
import { EncounterGeneratorProvider } from './components/encounterGeneratorContext'
import EncounterOutput from './components/EncounterOutput/EncounterOutput';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title="RPG Encounter Generator"
  }, [])

  return (
    <ChakraProvider>
      <EncounterGeneratorProvider>
        <div className="App">
          <Title />
          <InputBar />
          <EncounterOutput />
        </div>
      </EncounterGeneratorProvider>
    </ChakraProvider>
  );
}

export default App;
