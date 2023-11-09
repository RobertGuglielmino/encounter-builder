import './EncounterOutput.css';

import {
    useEffect
} from "react"; 
import InputBar from "../InputBar/InputBar"
import { Card, Heading, Text, Image, CardHeader, VStack, CardBody, CardFooter, Box, Center } from '@chakra-ui/react'
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';
import { Divider } from '@chakra-ui/react';

function EncounterOutput() {

    const { encounters } = useEncounterGeneratorContext();

    var items = encounters
        .sort((a,b) => {
            return new Date(a.datetime).getDate() - new Date(b.datetime).getDate()
        })
        .map(n => {
            return (
                <Card
                    //key={n.title}
                    className="encounter-item"
                    colorScheme='orange'
                    size="lg"
                >
                    <CardHeader>
                        <Heading fontSize='2xl'>{n.title}</Heading>
                    </CardHeader>
                        <Text fontSize='lg' marginBottom="30px">{n.description}</Text>
                        <Divider color="lightGray"/>
                    <CardFooter>
                        <Image
                            src={n.image}
                        />
                    </CardFooter>
                </Card>
            )
        });

    return (
        <Center>
            <Box boxSize="2xl">
                <VStack
                    className="encounter-output"
                    spacing="40px">
                        
                    <InputBar />
                    {items}
                </VStack>
            </Box>
        </Center>
    );
}

export default EncounterOutput;