const encounterLoadingText = [
    "This request has a casting time of 2 rounds.",
    "Try to see how high you can count before this encounter loads! The current record is: 1,876.",
    "I hope you have a good day!",
    "Any bugs can be reported to robert.gugliel@gmail.com. This information shouldn't be in a loading tip.",
    "Follow @mycatpants on Instagram",
    "One of my dnd characters is a lizard with a flail for a leg. AI art is not good enough to generate that for me.",
    "I wrote this text at 5:12PM on 11/13/2013.",
    "God, I hope this works.",   
    "My social security number is {process.env.socialSecurityNumber}"
];

export function getLoadingText() {
    return encounterLoadingText[Math.floor(Math.random() * encounterLoadingText.length)]
}
