
//the insult arrays - taken from the Shakespeare Insult Kit
const insultSet1 = [
    "artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven",
    "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing", "froward", "frothy", "gleeking", "goatish",
    "gorbellied", "impertinent", "infectious", "jarring", "loggerheaded", "lumpish", "mammering", "mangled", "mewling",
    "paunchy", "pribbling", "puking", "puny", "qualling", "rank", "reeky", "roguish", "ruttish", "saucy", "spleeny", "spongy", "surly",
    "tottering", "unmuzzled", "vain", "venomed", "villainous", "warped", "wayward", "weedy", "yeasty"
];
const insultSet2 = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained",
    "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned",
    "fat-kidneyed", "fen-sucked", "flap-mouthed", "fly-bitten", "folly-fallen", "fool-born", "full-gorged", "guts-griping", "half-faced",
    "hasty-witted", "hedge-born", "hell-hated", "idle-headed", "ill-breeding", "ill-nurtured", "knotty-pated", "milk-livered",
    "motley-minded", "onion-eyed", "plume-plucked", "pottle-deep", "pox-marked", "reeling-ripe", "rough-hewn", "rude-growing", "rump-fed",
    "shard-borne", "sheep-biting", "spur-galled", "swag-bellied", "tardy-gaited", "tickle-brained", "toad-spotted", "unchin-snouted", "weather-bitten"
];
const insultSet3 = [
    "apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish"
    , "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon", "flax-wench", "flirt-gill", "foot-licker", "fustilarian", "giglet",
    "gudgeon", "haggard", "harpy", "hedge-pig", "horn-beast", "hugger-mugger", "joithead", "lewdster", "lout", "maggot-pie", "malt-worm",
    "mammet", "measle", "minnow", "miscreant", "moldwarp", "mumble-news", "nut-hook", "pigeon-egg", "pignut", "puttock", "pumpion",
    "ratsbane", "whey-face", "wagtail", "scut", "skainsmate", "strumpet", "varlot", "vassal"
];

//generates 3 random numbers that is measured by the length of the first array and pushes the genearted numbers to a new array
// currently insults need to be added in threes - one to each array at a time to prevent an undefined being possible 
//- but they can be added to the arrays without needing to tweak the function   
function randomizer(n) {
    let randomNumbers = [];
    for (let i = 0; i < 3; i++) {
        randomNumbers.push(Math.floor(Math.random() * (n)));
    }
    return randomNumbers;
}

function insulterizer(adj1Array, adj2Array, nounArray) {
    const index = randomizer(adj1Array.length);
    let insult1 = adj1Array[index[0]];
    insult2 = adj2Array[index[1]];
    insult3 = nounArray[index[2]];
    return `Thou ${insult1} ${insult2} ${insult3}!`;
}

//building the location and objects to place the features
const insultLocation = document.querySelector('#insulter')
const insultDiv = document.createElement('div');
Object.assign(insultDiv, {
    id: "insultWrapper",
    display: "flex",
});
insultLocation.appendChild(insultDiv);
const hr = document.createElement('hr');
insultDiv.appendChild(hr);

//text box works similar to calculator screen
const insultScreen = document.createElement('input');
Object.assign(insultScreen, {
    class: "button",
    disabled: true,
    id: "insultText",
    value: '"By the pricking of my thumbs, something insulting this way comes"'
});
insultDiv.appendChild(insultScreen);

//button to create the insults, event listener to see the insults, 
const insultButton = document.createElement("button");
Object.assign(insultButton, {
    innerHTML: "Turn thy phrase, thou knave!",
    classList: "button",
    id: "insultButton",
})
insultButton.addEventListener("click", () => insultScreen.value = insulterizer(insultSet1, insultSet2, insultSet3));
insultDiv.appendChild(insultButton);


console.log(insulterizer(insultSet1, insultSet2, insultSet3))


//hide functionality for the learning log

const hidden = document.querySelector("#hide");
const dropDown = document.querySelector('#dropDown');

const hide = () => {
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
    } else {
        hidden.style.display = "none";
    }
}

dropDown.addEventListener("click", () => hide());