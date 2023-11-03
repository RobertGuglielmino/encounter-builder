import { useEffect, useState } from "react";

function Title() {

    useEffect(() => {
    }, []);

    return (
        <div className="Title">
            <h1>
                DND Encounter Builder
            </h1>
            <h3>
                Type in an encounter idea, and this will generate it for u
            </h3>
        </div>
    );
}

export default Title;