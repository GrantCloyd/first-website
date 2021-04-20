console.log("Hello! I doubt many devs will take a look at this page given it's purpose - but thank you for stopping by!");

const calcLocation = document.querySelector("#interactiveText p");
const hr1 = document.createElement("hr");
const hr2 = document.createElement("hr");
calcLocation.appendChild(hr1);
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
const mathSymbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "-", "+", "*", "/", "=", "Cl"];



function calcMaker(arr) {
    let i = 0;
    while (i < arr.length) {
        const newButton = document.createElement("button");
        newButton.classList = "button mathButton";
        newButton.innerHTML = mathSymbols[i];
        newButton.value = mathSymbols[i];
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
                calcScreen.value = eval(`${Number(calcScreen.storedValue1)} ${calcScreen.mathMethod} ${Number(calcScreen.storedValue2)}`);
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