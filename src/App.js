import './App.css';
import { Button, Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import Title from './components/Title/Title.js'
import Info from './components/Info/Info.js';
import { EncounterGeneratorProvider } from './components/encounterGeneratorContext'
import EncounterOutput from './components/EncounterOutput/EncounterOutput';
import { useEffect } from 'react';


/*
TODO LIST:

 - make encounter skeleton work
 - inputbar window scaling 
 - accounts/hookup to database
 - encounter template
 - better info page
 - 
*/

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
