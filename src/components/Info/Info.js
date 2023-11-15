import { Divider, Heading, Text } from '@chakra-ui/react'

function Info() {

    return (
        <div clavssName="sans-font">
            <Heading>
                Info
            </Heading>
            <Heading size="md">
                About Me
            </Heading>
            <Text>
                This is a project made by me, Robert Guglielmino, to learn React and web development.
            </Text>
            <Text>
                I am currently looking for work, if you are interested, please email me at robert.guglielmino@gmail.com :)
            </Text>
            <Heading size="md">
                Tech Stuff
            </Heading>
            <Text>
                This uses AWS Amplify and AWS Lambda to host, and OpenAI to handle all the ai generation.
            </Text>
        </div>
    );
}

export default Info;