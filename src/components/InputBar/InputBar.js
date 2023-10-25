import './InputBar.css';

import {
    useState,
    useRef
} from "react"; 
import axios from 'axios';

function InputBar() {
    const [inputClassName, setInputClassName] = useState("text-input");
    const [encounterInput, setEncounterInput] = useState(null);
    const [loading, setLoading] = useState(false);
    
    //const { setEncounters } = React.useContext(EncounterGeneratorContext);

    const url = "https://static.wikia.nocookie.net/dino/images/4/45/JW_pteranodon.png/revision/latest/scale-to-width-down/1000?cb=20150407205351";


    return (
        <div>
            <input
                className={inputClassName}
                placeholder="input me, worm"
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