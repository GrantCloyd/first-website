console.log("Hello! I doubt many devs will take a look at this page given it's purpose - but thank you for stopping by!");

const calcLocation = document.querySelector("#interactiveText p");
const hr = document.createElement("hr");
calcLocation.appendChild(hr);
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



const calcMaker = () => {
    let i = 0;
    while (i < mathSymbols.length) {
        const newButton = document.createElement("button");
        newButton.classList = "button mathButton";
        newButton.innerHTML = mathSymbols[i];

        if (typeof (mathSymbols[i]) === "number") {
            newButton.value = mathSymbols[i];
            newButton.addEventListener("click", () => {
                calcScreen.value += (`${newButton.value}`);
            });
        } else if (mathSymbols[i] === "Cl") {
            newButton.addEventListener("click", () => {
                alert(`Cleared!`)
                calcScreen.value = null;
                calcScreen.storedValue1 = null;
                calcScreen.storedValue2 = null;
                calcScreen.mathMethod = null;
            });
        }
        else if (mathSymbols[i] === "=") {
            newButton.addEventListener("click", () => {
                calcScreen.storedValue2 = calcScreen.value;
                calcScreen.value = Number(calcScreen.storedValue1) + Number(calcScreen.storedValue2);
                //only works for + currently - need to build "+", "-", "*", "/" functionality onto button
            })
        }
        else {
            newButton.value = mathSymbols[i];
            newButton.addEventListener("click", function () {
                calcScreen.storedValue1 = calcScreen.value;
                console.log(calcScreen.storedValue1);
                calcScreen.value = null;
                switch (mathSymbols[i]) {
                    case "-":
                        calcScreen.mathMethod = "subtract";
                        break;
                    case "+":
                        calcScreen.mathMethod = "add";
                        console.log(calcScreen.mathMethod);
                        break;
                }
            });
        }
        calcLocation.appendChild(newButton);
        i++;
    }
}



calcMaker();

