console.log("Hello! I doubt many devs will take a look at this page given it's purpose - but thank you for stopping by!");

const calcLocation = document.querySelector("#interactiveText p");
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
                alert(`${newButton.innerHTML}`)
            });
        } else {
            newButton.addEventListener("click", function () {
                alert(`Math`);
            });
        }
        calcLocation.appendChild(newButton);
        i++;
    }
}

calcMaker();