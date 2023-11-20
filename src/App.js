import './App.css';
import { Button, Tabs, TabList, Tab, TabPanel, TabPanels, Switch, Textarea } from '@chakra-ui/react'
import Title from './components/Title/Title.js'
import Info from './components/Info/Info.js';
import { EncounterGeneratorProvider } from './components/encounterGeneratorContext'
import EncounterOutput from './components/EncounterOutput/EncounterOutput';
import EncounterPromptHelper from './components/EncounterPromptHelper/EncounterPromptHelper'
import { useEffect } from 'react';
import { ttrpgSystems } from './ttrpgSystems.js'
import { encounterLocations } from './encounterLocations.js'

import {
  useState
} from "react"; 

/*
TODO LIST:

 - make encounter skeleton work
 - inputbar window scaling 
 - accounts/hookup to database
 - X encounter template
 - better info page
   - how to use 
 -
 - last modified time
 - 
*/

function App() {

  const [showEncounterPromptHelper, setShowEncounterPromptHelper] = useState(false);


  
  const [ttrpgSystem, setTtrpgSystem] = useState(ttrpgSystems[0]);
  const [level, setLevel] = useState(3);
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);
  const [encounterLocation, setEncounterLocation] = useState(encounterLocations[0]);

  const encounterPromptHelperPackage = {
    ttrpgSystem,
    setTtrpgSystem,
    level,
    setLevel,
    numberOfPlayers,
    setNumberOfPlayers,
    encounterLocation,
    setEncounterLocation,
  }

  const inputBarPackage = {
    ttrpgSystem,
    level,
    numberOfPlayers,
    encounterLocation,
    showEncounterPromptHelper,
  }

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
                <Switch onChange={() => setShowEncounterPromptHelper(!showEncounterPromptHelper)}>Show Prompt Helper</Switch> 
                { showEncounterPromptHelper ? <EncounterPromptHelper {...encounterPromptHelperPackage}/> : null }
                <EncounterOutput {...inputBarPackage} />
              </TabPanel>
              <TabPanel>
                <Textarea />
                <Info />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </EncounterGeneratorProvider>
  );
}

export default App;
