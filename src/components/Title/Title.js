import { useEffect, useState } from "react";




function Title() {

    async function generateImage(textInput) {
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ "test": textInput })
        };
    
        try {
            const pic = await fetch('https://vo5s8h7dpb.execute-api.us-east-2.amazonaws.com/dev', requestOptions)
            .then(response => response.json());
        
            console.log("wow");
            console.log(pic);
            console.log(pic.url);
        
            return setUrl(pic.url);
        } catch {
    
            return "https://upload.wikimedia.org/wikipedia/commons/5/5f/Red_X.svg";
        }
    }


    const [url, setUrl] = useState(null);

    useEffect(() => {
        generateImage("A professionally drawn dnd battlemap of the nine hells")
        console.log("ETETET ");
    }, []);

    return (
        <div className="Title">
            <h2>
                DND Encounter Builder
            </h2>
            <h3>
                Type in an encounter idea, and this will generate it for u
            </h3>
            <img url={url}></img>
        </div>
    );
}

export default Title;