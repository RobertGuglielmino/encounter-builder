import './App.css';
import { Tabs, TabList, Tab, TabPanel, TabPanels, Switch } from '@chakra-ui/react'
import Title from './components/Title/Title.js'
import Info from './components/Info/Info.js';
import { EncounterGeneratorProvider } from './components/encounterGeneratorContext'
import EncounterOutput from './components/EncounterOutput/EncounterOutput';
import EncounterPromptHelper from './components/EncounterPromptHelper/EncounterPromptHelper'
import { useEffect } from 'react';
import { useCookies } from "react-cookie";


import {
  useState
} from "react"; 

/*
TODO LIST:

 - X make encounter skeleton work
 - X inputbar window scaling 
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
  const [ttrpgSystem, setTtrpgSystem] = useState("");
  const [level, setLevel] = useState(3);
  const [numberOfPlayers, setNumberOfPlayers] = useState(4);
  const [encounterLocation, setEncounterLocation] = useState("");

  const [cookies, setCookie] = useCookies();

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
    setCookie,
  }

  useEffect(() => {
    document.title="RPG Encounter Generator";
    loadCookies();
  });

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
                { showEncounterPromptHelper && <EncounterPromptHelper {...encounterPromptHelperPackage}/> }
                <EncounterOutput {...inputBarPackage} />
              </TabPanel>
              <TabPanel>
                <Info />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
      </EncounterGeneratorProvider>
  );

  function loadCookies() {
    !!cookies.ttrpgSystem && setTtrpgSystem(cookies.ttrpgSystem);
    !!cookies.level && setLevel(cookies.level);
    !!cookies.numberOfPlayers && setNumberOfPlayers(cookies.numberOfPlayers);
    !!cookies.encounterLocation && setEncounterLocation(cookies.encounterLocation);
  }
}

export default App;
