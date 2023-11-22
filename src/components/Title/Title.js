import { Heading, Text } from "@chakra-ui/react";
import { useEffect } from "react";

function Title() {

    useEffect(() => {
    }, []);

    return (
        <div className="sans-font">
            <Heading>
                RPG Encounter Builder
            </Heading>
            <Text>
                Type an encounter idea you have! This will generate an encounter and a battlemap for you.
            </Text>
        </div>
    );
}

export default Title;