import './InputBar.css';

import {
    useState
} from "react"; 

import { FaSearch } from 'react-icons/fa';
import { getLoadingText } from '../../loadingText';
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';
import { FormControl, FormLabel, Textarea, FormErrorMessage, IconButton, HStack, Spinner, Box, FormHelperText } from '@chakra-ui/react';
import { pushEncountersToDB } from '../../dbClient';

function InputBar(props) {
    const [encounterInput, setEncounterInput] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const {encounters, addEncounter} = useEncounterGeneratorContext();

    const isEncounterInputEmpty = encounterInput === '';

    //"A professionally drawn dnd battlemap of the nine hells"

    return (
        <Box>
            <form>
                <HStack>
                <FormControl isInvalid={isEncounterInputEmpty && isSubmitted}>
                    <FormLabel></FormLabel>
                    <Textarea 
                        className="serif-font"
                        variant="filled"
                        marginLeft='auto'
                        placeholder="Try something like 'A hard dnd 5e encounter for four 5th level plays in a mountain pass'" 
                        padding="5px"
                        value={encounterInput}
                        onChange={e => setEncounterInput(e.target.value)}
                        />
                    { props.loading && <FormHelperText className="sans-font">{ getLoadingText() }</FormHelperText> }
                    <FormErrorMessage className="sans-font">Don't leave me hangin' here! Type up something first!</FormErrorMessage>
                </FormControl>
                <IconButton
                    className="button"
                    // colorScheme={!props.loading ? "green" : "grey"}
                    isDisabled={props.loading}
                    value="test"
                    icon={!props.loading ? <FaSearch /> : <Spinner/>}
                    onClick={buttonClick} />
                </HStack>
            </form>
        </Box>
    )

    function buttonClick(e) {
        setIsSubmitted(true);
        setCookies();
        if (!isEncounterInputEmpty) generateEncounter();
    }
    
    async function generateEncounter() {

        const textInput = generateAIPrompt();
        const requestOptions = {
            method: 'POST',
            headers: { 
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ "encounterDescription": textInput })
        };

        try {
            props.setLoading(true);
            const encounter = await fetch('https://vo5s8h7dpb.execute-api.us-east-2.amazonaws.com/dev', requestOptions)
            .then(response => response.json());

            console.log(encounter);

            addEncounter(encounter);

            return pushEncountersToDB(props.cookies.uuid, encounters);
        } catch (e) {
            
            console.log(e);
        } finally {
            props.setLoading(false);
        }
    }
    
    function generateAIPrompt() {
        if (props.showEncounterPromptHelper) {
            return "An encounter using the " + props.ttrpgSystem
            + " system for " + props.numberOfPlayers + " level " + props.level
            + " players, taking place in a " + props.encounterLocation
            + " with the following additional details: " + encounterInput
        } else return encounterInput;
    }

    function setCookies() {
        props.setCookie('ttrpgSystem', props.ttrpgSystem, { path: "/", maxAge: 3600 });
        props.setCookie('level', props.level, { path: "/", maxAge: 3600 });
        props.setCookie('numberOfPlayers', props.numberOfPlayers, { path: "/", maxAge: 3600 });
        props.setCookie('encounterLocation', props.encounterLocation, { path: "/", maxAge: 3600 });
    }
}

export default InputBar;