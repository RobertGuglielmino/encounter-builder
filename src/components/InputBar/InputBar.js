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

    return (
        <div>
            <form>
                <HStack>
                <FormControl isError={isEncounterInputEmpty}>
                    <FormLabel></FormLabel>
                    <Textarea 
                        variant="filled"
                        marginLeft='auto'
                        placeholder="A professionally drawn dnd battlemap of the nine hells"
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
                // 'OPENAI_API_KEY': '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'
            },
            body: JSON.stringify({ "test": textInput })
        };

        const teee = {
            title: "hello1",
            encounter: "dragon",
            image: "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351"
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

export default InputBar;