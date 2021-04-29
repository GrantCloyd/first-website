console.log("Thank you for stopping by!");
//setting a location for the calculator
const calcLocation = document.querySelector("#interactiveText p");
//for loop seemed excessive to create two hr elements
const hr1 = document.createElement("hr");
const hr2 = document.createElement("hr");
calcLocation.appendChild(hr1);
//screen creation and object parameters set; disabled input button which then uses the value key on the object allows a text to appear that can't be typed on/over
const calcScreen = document.createElement("input");
Object.assign(calcScreen,
    {
        type: "text",
        value: null,
        title: "screen",
        id: "mathScreen",
        disabled: "true",
        storedValue1: null,
        storedValue2: null,
        mathMethod: null,
    })

calcLocation.appendChild(calcScreen);
//array created/used to pass the neccessary button symbols to the arr parameter in calcMaker
const mathSymbols = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "-", "+", "*", "/", "=", "**", "%", "Cl"];

//functions to pass to switch case for the calculator
const add = (x, y) => Number(x) + Number(y);
const subtract = (x, y) => Number(x) - Number(y);
const multiply = (x, y) => Number(x) * Number(y);
const divide = (x, y) => Number(x) / Number(y);
const power = (x, y) => Number(x) ** Number(y);
const remainder = (x, y) => Number(x) % Number(y);

function calcMaker(arr) {
    let i = 0;
    while (i < arr.length) {
        //creates a generic button and sets text, values, etc
        const newButton = document.createElement("button");
        newButton.classList = "button mathButton";
        newButton.innerHTML = mathSymbols[i];
        newButton.value = mathSymbols[i];
        //if and else if flow to create EventListener variations based on a number, equal sign, clear, or operator. All buttons store values on the calcScreen object
        if (typeof (mathSymbols[i]) === "number" || mathSymbols[i] === ".") {
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
                if (calcScreen.storedValue1 === null) {
                    alert(`Please enter a number and select an operation`)
                }
                calcScreen.storedValue2 = calcScreen.value;
                //switch case used once I learned that eval() has major vulnerability issues
                switch (calcScreen.mathMethod) {
                    case '+':
                        calcScreen.value = add(calcScreen.storedValue1, calcScreen.storedValue2);
                        break;
                    case '-':
                        calcScreen.value = subtract(calcScreen.storedValue1, calcScreen.storedValue2);
                        break;
                    case '*':
                        calcScreen.value = multiply(calcScreen.storedValue1, calcScreen.storedValue2);
                        break;
                    case '/':
                        calcScreen.value = divide(calcScreen.storedValue1, calcScreen.storedValue2);
                        break;
                    case '**':
                        calcScreen.value = power(calcScreen.storedValue1, calcScreen.storedValue2);
                        break;
                    case '%':
                        calcScreen.value = remainder(calcScreen.storedValue1, calcScreen.storedValue2);
                        break;
                }
                // first solution -- much simpler, much more dangerous apparently
                // calcScreen.value = eval(`${calcScreen.storedValue1} ${calcScreen.mathMethod} ${calcScreen.storedValue2}`);

                calcScreen.storedValue1 = null;
                calcScreen.storedValue2 = null;
            })
        }
        else {
            newButton.value = mathSymbols[i];
            newButton.addEventListener("click", function () {
                if (calcScreen.value !== null) {
                    calcScreen.storedValue1 = calcScreen.value;
                    calcScreen.value = null
                    calcScreen.mathMethod = newButton.value;
                } else {
                    alert(`Please enter a number`);
                }

            });
        }
        calcLocation.appendChild(newButton);
        i++;
    }

}
calcMaker(mathSymbols);

calcLocation.appendChild(hr2);