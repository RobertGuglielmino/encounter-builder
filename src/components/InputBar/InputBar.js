import './InputBar.css';

import {
    useState
} from "react"; 

import { FaSearch } from 'react-icons/fa';
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';
import { FormControl, FormLabel, Textarea, FormErrorMessage, IconButton, HStack, Spinner } from '@chakra-ui/react';

function InputBar() {
    const [encounterInput, setEncounterInput] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const {addEncounter} = useEncounterGeneratorContext();

    const isEncounterInputEmpty = encounterInput === '';

    //"A professionally drawn dnd battlemap of the nine hells"

    return (
        <div>
            <form>
                <HStack>
                <FormControl isError={isEncounterInputEmpty}>
                    <FormLabel></FormLabel>
                    <Textarea 
                        class="serif-font"
                        variant="filled"
                        marginLeft='auto'
                        placeholder="Try something like 'A hard dnd 5e encounter for four 5th level plays in a mountain pass'" 
                        value={encounterInput}
                        resize="horizontal"
                        onChange={e => setEncounterInput(e.target.value)}
                        />
                    <FormErrorMessage>Don't leave me hangin' here! Type up something first!</FormErrorMessage>
                </FormControl>
                <IconButton
                    className="button"
                    colorScheme={!loading ? "green" : "grey"}
                    isDisabled={loading}
                    value="test"
                    icon={!loading ? <FaSearch /> : <Spinner/>}
                    onClick={buttonClick} />
                </HStack>
            </form>
        </div>
    )

    function buttonClick(e) {
        generateImage(encounterInput);
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
            setLoading(true);
            const encounter = await fetch('https://vo5s8h7dpb.execute-api.us-east-2.amazonaws.com/dev', requestOptions)
            .then(response => response.json());

            return addEncounter(encounter);
        } catch {
    
            return "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg";
        } finally {
            setLoading(false);
        }
    }
}

function removeLastChar(input) {
    return input.slice(0,-1);
}

export default InputBar;