
//the insult arrays - taken from the Shakespeare Insult Kit
const insultSet1 = ["artless", "bawdy", "beslubbering", "bootless", "churlish", "cockered", "clouted", "craven",
    "currish", "dankish", "dissembling", "droning", "errant", "fawning", "fobbing"];
const insultSet2 = ["base-court", "bat-fowling", "beef-witted", "beetle-headed", "boil-brained", "clapper-clawed", "clay-brained",
    "common-kissing", "crook-pated", "dismal-dreaming", "dizzy-eyed", "doghearted", "dread-bolted", "earth-vexing", "elf-skinned"];
const insultSet3 = ["apple-john", "baggage", "barnacle", "bladder", "boar-pig", "bugbear", "bum-bailey", "canker-blossom", "clack-dish"
    , "clotpole", "coxcomb", "codpiece", "death-token", "dewberry", "flap-dragon"];


//generates 3 random numbers that cap based on the length of the first array and pushes the genearted numbers to a new array
// currently insults need to be added in threes - one to each array - but they can be added to the array without needing to tweak the function   
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
    return `Thou ${insult1} ${insult2} ${insult3}`
}

//building the location and objects to place the features
const insultLocation = document.querySelector('#insulter')
const insultDiv = document.createElement('div');
Object.assign(insultDiv, { id: "insultWrapper" });
insultLocation.appendChild(insultDiv);
const hr = document.createElement('hr');
insultDiv.appendChild(hr);
//text box works similar to calculator screen
const insultScreen = document.createElement('input');
Object.assign(insultScreen, {
    class: "button",
    disabled: true,
    id: "insultText",
    value: "Prepare for insults!"
});
insultDiv.appendChild(insultScreen);
//button to create the insults, event listener to see the insults, 
const insultButton = document.createElement("button");
Object.assign(insultButton, {
    innerHTML: "Turn thy phrase!",
    classList: "button",
    id: "insultButton",
})
insultButton.addEventListener("click", () => insultScreen.value = insulterizer(insultSet1, insultSet2, insultSet3));
insultDiv.appendChild(insultButton);


console.log(insulterizer(insultSet1, insultSet2, insultSet3))

