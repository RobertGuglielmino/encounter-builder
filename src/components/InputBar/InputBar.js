import './InputBar.css';

import {
    useState
} from "react"; 

import { FaSearch } from 'react-icons/fa';
import { getLoadingText } from '../../loadingText';
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';
import { FormControl, FormLabel, Textarea, FormErrorMessage, IconButton, Button, HStack, Spinner, Box, FormHelperText } from '@chakra-ui/react';

function InputBar(props) {
    const [encounterInput, setEncounterInput] = useState("");
    const [isSubmitted, setIsSubmitted] = useState(false);
    
    const {addEncounter} = useEncounterGeneratorContext();

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
                        resize="horizontal"
                        w={700}
                        onChange={e => setEncounterInput(e.target.value)}
                        />
                    {props.loading ? 
                        <FormHelperText className="sans-font">{ getLoadingText() }</FormHelperText> :
                        null }
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
        if (!isEncounterInputEmpty) generateImage(encounterInput);
    }

    
    async function generateImage(textInput) {

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

            return addEncounter(encounter);
        } catch {
    
            return "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg";
        } finally {
            props.setLoading(false);
        }
    }
}

function removeLastChar(input) {
    return input.slice(0,-1);
}

export default InputBar;