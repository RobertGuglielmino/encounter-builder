import { Heading, Text } from "@chakra-ui/react";
import { useEffect, useState } from "react";

function Title() {

    useEffect(() => {
    }, []);

    return (
        <div className="Title sans-font">
            <Heading className="sans-font">
                RPG Encounter Builder
            </Heading>
            <Text>
                Type an encounter idea you have! This will generate an encounter and a battlemap for you.
            </Text>
        </div>
    );
}

export default Title;