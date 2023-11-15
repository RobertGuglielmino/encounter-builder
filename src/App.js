import './App.css';
import { Button, Tabs, TabList, Tab,  } from '@chakra-ui/react'
import Title from './components/Title/Title.js'
import { EncounterGeneratorProvider } from './components/encounterGeneratorContext'
import EncounterOutput from './components/EncounterOutput/EncounterOutput';
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    document.title="RPG Encounter Generator";
  }, [])

  return (
      <EncounterGeneratorProvider>
        <div className="App">
          <Tabs>
            <TabList>
              <Tab>Encounter Generator</Tab>
              <Tab>Info</Tab>
            </TabList>
          </Tabs>
          <Button >theme</Button>
          <Title />
          <EncounterOutput />
        </div>
      </EncounterGeneratorProvider>
  );
}

export default App;
