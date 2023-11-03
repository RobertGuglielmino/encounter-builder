import {createContext, useContext, useState} from "react";

const EncounterGeneratorContext = createContext(undefined);

export const EncounterGeneratorProvider = ({ children }) => {

  const initialState = [{
    title: "hello2",
    encounter: "2 dragons",
    image: "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351",
    datetime: "10/11/2023",
    }];

  const [encounterList, setEncounterList] = useState(initialState);

  return (
    <EncounterGeneratorContext.Provider
      value={{
        encounters: encounterList,
        addEncounter: encounter => {
            setEncounterList([...encounterList, encounter])
        },
      }}
    >
      {children}
    </EncounterGeneratorContext.Provider>
  );
};

export const useEncounterGeneratorContext = () => useContext(EncounterGeneratorContext);
