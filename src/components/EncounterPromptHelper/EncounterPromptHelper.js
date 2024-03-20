
import { Radio, InputLeftAddon, Input, VStack, Box, Stack, HStack, RadioGroup, InputGroup, Center } from '@chakra-ui/react'
import { ttrpgSystems } from "../../ttrpgSystems";
import { encounterLocations } from "../../encounterLocations";

function EncounterPromptHelper(props) {

    const ttrpgSystemRadioOptions = ttrpgSystems
    .map( (system) => {
        return (
            <Radio key={system} value={system}>{system}</Radio>
        )
    })

    const encounterLocationRadioOptions = 
    encounterLocations
    .map( (system) => {
        return (
            <Radio key={system} value={system}>{system}</Radio>
        )
    })

    return (
        <Center>
            <Box>
                <HStack>
                    <RadioGroup onChange={props.setTtrpgSystem} value={props.ttrpgSystem}>
                        <Stack>
                            { ttrpgSystemRadioOptions }
                        </Stack>
                    </RadioGroup>
                    <Box w={250}>
                        <VStack spacing="20px">
                            <InputGroup>
                                <InputLeftAddon children='# of Players' />          
                                <Input placeholder='4'
                                    value={props.numberOfPlayers}
                                    onChange={e => props.setNumberOfPlayers(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon children='Level' />
                                <Input placeholder='3'
                                    value={props.level}
                                    onChange={e => props.setLevel(e.target.value)}
                                />
                            </InputGroup>
                        </VStack>
                    </Box>
                    <RadioGroup onChange={props.setEncounterLocation} value={props.encounterLocation}>
                        <Stack>
                            { encounterLocationRadioOptions }
                        </Stack>
                    </RadioGroup>
                </HStack>
            </Box>
        </Center>
    );
}

export default EncounterPromptHelper;