import './App.css';
import { Tabs, TabList, Tab, TabPanel, TabPanels, Switch } from '@chakra-ui/react'
import Title from './components/Title/Title.js'
import Info from './components/Info/Info.js';
import EncounterOutput from './components/EncounterOutput/EncounterOutput';
import EncounterPromptHelper from './components/EncounterPromptHelper/EncounterPromptHelper'
import { useEffect } from 'react';
import { useCookies } from "react-cookie";
import { getPreviousEncountersDB } from './dbClient.js';

import {
  useState
} from "react"; 

/*
TODO LIST:

 - X make encounter skeleton work
 - X inputbar window scaling 
 - accounts/hookup to database
    - X check cookies
    - X check get and update encounters
    - check permissions
    - X set deletes in faq?
 - container, not amplify?
 - logging
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
    cookies,
    setCookie,
  }

  useEffect(() => {
    document.title="RPG Encounter Generator";
    loadCookies();
  }, []);

  return (
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
                <Info cookies />
              </TabPanel>
            </TabPanels>
          </Tabs>
        </div>
  );

  function loadCookies() {
    !!cookies.ttrpgSystem && setTtrpgSystem(cookies.ttrpgSystem);
    !!cookies.level && setLevel(cookies.level);
    !!cookies.numberOfPlayers && setNumberOfPlayers(cookies.numberOfPlayers);
    !!cookies.encounterLocation && setEncounterLocation(cookies.encounterLocation);
    !!cookies.uuid ? getPreviousEncountersDB(cookies.uuid) : setCookie('uuid', setUUID(), { path: "/", maxAge: 2592000 * 12 }); 
  }

  function setUUID() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, c =>
      (((c ^ crypto.getRandomValues(new Uint8Array(1))[0]) & 15) >> c / 4).toString(16)
    );
  }
}

export default App;
