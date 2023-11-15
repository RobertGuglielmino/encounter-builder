import './App.css';
import { Button, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import Title from './components/Title/Title.js'
import Info from './components/Info/Info.js';
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
            <TabPanels>
              <TabPanel>
                <Title /> 
                <EncounterOutput />
              </TabPanel>
              <TabPanel>
                <Info />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </EncounterGeneratorProvider>
  );
}

export default App;
