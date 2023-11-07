import {createContext, useContext, useState} from "react";

const EncounterGeneratorContext = createContext(undefined);

export const EncounterGeneratorProvider = ({ children }) => {

  const initialState = [];

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
