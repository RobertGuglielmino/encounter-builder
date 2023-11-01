import './InputBar.css';

import {
    useState
} from "react"; 

import { useEncounterGeneratorContext } from '../encounterGeneratorContext';

function InputBar() {
    const [inputClassName, setInputClassName] = useState("text-input");
    const [encounterInput, setEncounterInput] = useState(null);
    const [loading, setLoading] = useState(false);
    
    const {addEncounterState} = useEncounterGeneratorContext();

    const url = "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351";


    return (
        <div>
            <input
                className={inputClassName}
                placeholder="A professionally drawn dnd battlemap of the nine hells"
                value={encounterInput}
                onChange={e => setEncounterInput(e.target.value)}
                onKeyDown={setInputSize}
            />
            <button 
                className="button"
                value="test"
                onClick={buttonClick}
            >
            yes
            {/* <img src="https://i.pinimg.com/564x/cc/62/f3/cc62f3380e77b62f50b080d9a8bd1e40.jpg"></img> */}
            </button>
            {loading && <div>THIS BITCH LOADING</div>}
        </div>
    )

    function setInputSize(e) {
        setInputClassName("text-yes");
    }

    function buttonClick(e) {
        setInputClassName("text-input");
        //generateEncounter(encounterInput);
        generateImage(encounterInput);
    }

    
    async function generateImage(textInput) {

        console.log(textInput);

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "test": textInput })
        };

        const teee = {
            title: "hello1",
            encounter: "dragon",
            image: "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351",
            datetime: "10/10/2023"
        };
    
        try {
            const pic = await fetch('https://vo5s8h7dpb.execute-api.us-east-2.amazonaws.com/dev', requestOptions)
            .then(response => response.json());
        
            console.log("wow");
            console.log(pic);

            console.log("test data " + JSON.stringify(teee))

            return addEncounterState(teee);
        } catch {
    
            return "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg";
        }
    }

    // function generateEncounter(encounterText) {
    //     useEffect(async () => {
    //         try {
    //             setLoading(true);

    //             axios.post(url, {
    //                 input: encounterText
    //             })
    //             .then(response => {
    //                 setEncounters(response.data)
    //             })

    //             setLoading(false);

    //         } catch {
    //             setLoading(false);
    //             console.error(error);
    //             //TODO ERROR HANDLING
    //         }
    //     }, [])
    // }
}

export default InputBar;