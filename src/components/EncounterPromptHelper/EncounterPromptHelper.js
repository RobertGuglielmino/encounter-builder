import {
    useState
} from "react"; 
import InputBar from "../InputBar/InputBar"
import EncounterSkeleton from '../EncounterSkeleton'
import { Radio, InputLeftAddon, Input, VStack, Box, Stack, HStack, RadioGroup, InputGroup, Center } from '@chakra-ui/react'
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';
import { Divider } from '@chakra-ui/react';
import { ttrpgSystems } from "../../ttrpgSystems";
import { encounterLocations } from "../../encounterLocations";

function EncounterPromptHelper(props) {


    return (
        <Center>
            <Box>
                <HStack>
                    <RadioGroup onChange={props.setTtrpgSystem()} value={prompt.ttrpgSystem}>
                        <Stack>
                        {
                            ttrpgSystems
                            .map( (system) => {
                                return (
                                    <Radio value={system}>{system}</Radio>
                                )
                            })
                        }
                        </Stack>
                    </RadioGroup>
                    <Box w={250}>
                        <VStack spacing="20px">
                            <InputGroup>
                                <InputLeftAddon children='Level' />
                                <Input placeholder='3'
                                    value={props.level}
                                    onChange={e => props.setLevel(e.target.value)}
                                />
                            </InputGroup>
                            <InputGroup>
                                <InputLeftAddon children='# of Players' />          
                                <Input placeholder='4'
                                    value={props.numberOfPlayers}
                                    onChange={e => props.setNumberOfPlayers(e.target.value)}
                                />
                            </InputGroup>
                        </VStack>
                    </Box>
                    <RadioGroup onChange={props.setEncounterLocation()} value={prompt.encounterLocation}>
                        <Stack direction='column'>
                            {
                                encounterLocations
                                .map( (system) => {
                                    return (
                                        <Radio value={system}>{system}</Radio>
                                    )
                                })
                            }
                            {/* <Radio><Input></Input></Radio> */}
                        </Stack>
                    </RadioGroup>
                </HStack>
            </Box>
        </Center>
    );
}

export default EncounterPromptHelper;