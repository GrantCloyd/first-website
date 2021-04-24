const addButton = document.querySelector('#addButton');
const textBox = document.querySelector('#toDoText');
const toDoList = document.querySelector('#toDoWrapper');


const addItem = (text) => {
    if (text === "") {
        textBox.style.backgroundColor = "#F22B29";
        setTimeout(() => alert(`Please enter a task!`), 50);
    } else {
        textBox.style.backgroundColor = "white";
        const newElement = document.createElement('h4')
        Object.assign(newElement, {
            innerText: [text],
            classList: "toDoItems",
        });
        newElement.addEventListener("click", () => newElement.toggleAttribute(classList));
        textBox.value = null;
        toDoList.appendChild(newElement);
    }
}

addButton.addEventListener("click", () => addItem(textBox.value));

