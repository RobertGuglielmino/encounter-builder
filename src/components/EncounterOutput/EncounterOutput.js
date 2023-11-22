import './EncounterOutput.css';

import {
    useState
} from "react"; 
import InputBar from "../InputBar/InputBar"
import EncounterSkeleton from '../EncounterSkeleton'
import { Card, Heading, Text, Image, CardHeader, VStack, CardFooter, Box, Center } from '@chakra-ui/react'
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';
import { Divider } from '@chakra-ui/react';

function EncounterOutput(props) {

    const [loading, setLoading] = useState(false);

    const { encounters } = useEncounterGeneratorContext();

    var items = encounters
        .sort((a,b) => {
            //sorts by date first, then by time  new Date(a.date).getDate() - new Date(b.date).getDate() ||
            return  new Date(b.time).getTime() - new Date(a.time).getTime()
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
                        <Text fontSize='lg' marginBottom="30px">{n.enemies}</Text>
                        <Divider color="lightGray"/>
                    <CardFooter>
                        <Image src={n.image}/>
                    </CardFooter>
                </Card>
            )
        });

    return (
        <Center>
            <Box boxSize="2xl">
                <InputBar 
                    {...props}
                    loading={loading}
                    setLoading={setLoading}
                />
                <VStack
                    className="encounter-output"
                    spacing="40px"
                    margin="40px">
                        
                    {loading && <EncounterSkeleton/>}
                    {items}
                </VStack>
            </Box>
        </Center>
    );
}

export default EncounterOutput;