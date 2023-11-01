import './EncounterOutput.css';

import {
    useEffect
} from "react"; 

import TextInput from './TextInput/TextInput';
import Encounter from './Encounter/Encounter';
import GeneratedImage from './GeneratedImage/GeneratedImage';
import { useEncounterGeneratorContext } from '../encounterGeneratorContext';

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

    var items = [];

    useEffect(() => {
        items = num
        .sort((a,b) => {
            return new Date(b.datetime).getDate() - new Date(a.datetime).getDate()
        })
        .map(n => {
            return (
                <li
                    key={n.title}
                    className="encounter-item"
                >
                    <TextInput title={n.title}/>
                    <Encounter encounter={n.encounter}/>
                    <GeneratedImage image={n.image}/>
                </li>)
        });
    }, [encounters])

    return (
        <div>
            <ul className="encounter-output">
                {items}
            </ul>
        </div>
    );
}

export default EncounterOutput;