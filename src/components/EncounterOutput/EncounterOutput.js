import './EncounterOutput.css';

import {
    useEffect
} from "react"; 
import { Card, Heading, Text, Image, CardHeader, VStack, CardBody, CardFooter } from '@chakra-ui/react'
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';
import { Divider } from '@chakra-ui/react';

function EncounterOutput() {

    const num = [
        {
            title: "hello1",
            encounter: "dragon",
            image: "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351",
            datetime: "10/10/2023"
        },
        {
            title: "hello2",
            encounter: "2 dragons",
            image: "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351",
            datetime: "10/11/2023"
        }
    ];

    const { encounters } = useEncounterGeneratorContext();

    console.log("========");
    console.log("encounters in output " + JSON.stringify(encounters));
    console.log(encounters.length);

    var items = encounters
        .sort((a,b) => {
            return new Date(b.datetime).getDate() - new Date(a.datetime).getDate()
        })
        .map(n => {
            return (
                <Card
                    // key={n.title}
                    className="encounter-item"
                    colorScheme='orange'
                    size="lg"
                >
                    <CardHeader>
                        <Heading>{n.title}</Heading>
                    </CardHeader>
                        <Text>{n.encounter}</Text>
                        <Divider />
                    <CardFooter>
                        <Image
                            src="https://i.pinimg.com/564x/cc/62/f3/cc62f3380e77b62f50b080d9a8bd1e40.jpg"
                        />
                    </CardFooter>
                </Card>
            )
        });

    console.log("qwer " + items);

    return (
        <div>
            <VStack
                className="encounter-output"
                spacing="40px">
                {items}
            </VStack>
        </div>
    );
}

export default EncounterOutput;