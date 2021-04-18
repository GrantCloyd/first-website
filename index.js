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
        disabled: "true"
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
            });
        }
        else {
            newButton.addEventListener("click", function () {
                alert(`Math`);
            });
        }
        calcLocation.appendChild(newButton);
        i++;
    }
}



calcMaker();

