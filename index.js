console.log("Hello! I doubt many devs will take a look at this page given it's purpose - but thank you for stopping by!");
//setting a location for the calculator
const calcLocation = document.querySelector("#interactiveText p");
//for loop seemed excessive to create two hr elements
const hr1 = document.createElement("hr");
const hr2 = document.createElement("hr");
calcLocation.appendChild(hr1);
//screen creation and object parameters set; disabled input button with the value feature allows a text to appear that can't be typed on/over
const calcScreen = document.createElement("input");
Object.assign(calcScreen,
    {
        type: "text",
        value: null,
        title: "screen",
        id: "screen",
        disabled: "true",
        storedValue1: null,
        storedValue2: null,
        mathMethod: null,
    })

calcLocation.appendChild(calcScreen);
//array created/used to pass the neccessary button symbols to the arr parameter in calcMaker
const mathSymbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+", "*", "/", "=", "**", "%", "Cl"];
//once the function is built, what's nice is that I can pass other javascript operators to the array and it adds it immediately 
// for example, in the original incarnation I did not have the exponent option or the modulo - but after construction, just by adding them to the array as a string, they populate, append, and function immediately

function calcMaker(arr) {
    let i = 0;
    while (i < arr.length) {
        //creates a generic button and sets text, values, etc
        const newButton = document.createElement("button");
        newButton.classList = "button mathButton";
        newButton.innerHTML = mathSymbols[i];
        newButton.value = mathSymbols[i];
        //if and else if flow to create variations based on a number, equal sign, clear, or operator. All buttons store values on the calcScreen object
        if (typeof (mathSymbols[i]) === "number") {
            newButton.addEventListener("click", () => {
                calcScreen.value += `${newButton.value}`;
            });
        } else if (mathSymbols[i] === "Cl") {
            newButton.addEventListener("click", () => {
                calcScreen.value = null;
                calcScreen.storedValue1 = null;
                calcScreen.storedValue2 = null;
                calcScreen.mathMethod = null;
            });
        }

        else if (mathSymbols[i] === "=") {
            newButton.id = "equalSign";
            newButton.addEventListener("click", () => {
                calcScreen.storedValue2 = calcScreen.value;
                //not sure if this is the best approach, in building this I built myself into a corner and googled and found eval to solve the problem as it evaluates a string and returns the number
                calcScreen.value = eval(`${calcScreen.storedValue1} ${calcScreen.mathMethod} ${calcScreen.storedValue2}`);
                calcScreen.storedValue1 = null;
                calcScreen.storedValue2 = null;
            })
        }
        else {
            newButton.value = mathSymbols[i];
            newButton.addEventListener("click", function () {
                calcScreen.storedValue1 = calcScreen.value;
                calcScreen.value = null
                calcScreen.mathMethod = newButton.value;

            });
        }
        calcLocation.appendChild(newButton);
        i++;
    }

}
calcMaker(mathSymbols);

calcLocation.appendChild(hr2);