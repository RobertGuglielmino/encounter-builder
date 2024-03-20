import { Center, Heading, Link, Text, VStack, Button } from '@chakra-ui/react'
import { deleteFromDB } from '../../dbClient.js';
import './Info.css';

function Info(props) {

    return (
        <div className="sans-font">
            <Center>
                <VStack w={800}>
                    <Heading className='sans-font'>
                        Info
                    </Heading>
                    <Heading className='heading-subsection'>
                        How to Use
                    </Heading>
                    <Text className='text-subsection'>
                        Describe as much or as little of an RPG encounter as you would like!
                        If you you want help, the Prompt Helper will give some structure to your request and help the AI Generate something good for you.
                    </Text>
                    <Heading className='heading-subsection'>
                        About Me
                    </Heading>
                    <Text className='text-subsection'>
                        This is a project made by me, Robert Guglielmino, to learn React and web development.
                    </Text>
                    <Text>
                        I am currently looking for work, if you are interested, please email me at <Link color='teal.500' href="mailto: robert.guglielmino@gmail.com">robert.guglielmino@gmail.com</Link> :)
                    </Text>
                    <Heading className='heading-subsection'>
                        Tech Stuff
                    </Heading>
                    <Text className='text-subsection'>
                        This website uses cookies! If you regularly delete your cookies, some of the functionality of this website will be reduced.
                    </Text>
                    <Text className='text-subsection'>
                        This uses AWS Amplify, Lambda, and API Gateway to host, and OpenAI to handle the text and image generation.
                        The front end was build in React and Javascript, using the Chakra UI Library. 
                    </Text>
                    <Button
                        //className="button"
                        colorScheme="red"
                        value="test"
                        onClick={() => deleteFromDB(props.cookies.uuid)}>
                        Remove Previous Entries
                    </Button>
                </VStack>
            </Center>
        </div>
    );
}

export default Info;