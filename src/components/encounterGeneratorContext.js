import {createContext, useContext, useReducer} from "react";

const EncounterGeneratorContext = createContext(undefined);

export const EncounterGeneratorProvider = ({ children }) => {

  const encounterReducer = (state, action) => {
    //validateData(action.data);
    if (action.type === "add"){
        state.push(action.data);
        return state;
    }

    return state;
  }

  const initialState = [{
    title: "hello2",
    encounter: "2 dragons",
    image: "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351",
    datetime: "10/11/2023",
    }];
  const [encounterList, dispatchEncounter] = useReducer(encounterReducer, initialState);

  return (
    <EncounterGeneratorContext.Provider
      value={{
        encounters: encounterList,
        addEncounterState: (encounter) => dispatchEncounter({type: "add", data: encounter}),
      }}
    >
      {children}
    </EncounterGeneratorContext.Provider>
  );
};

export const useEncounterGeneratorContext = () => useContext(EncounterGeneratorContext);
