const addButton = document.querySelector('#addButton');
const textBox = document.querySelector('#toDoText');
const toDoList = document.querySelector('#toDoWrapper');



//add new to-do item, functionality, and append 
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
        newElement.addEventListener("click", () => strikeThrough(newElement));
        textBox.value = null;
        toDoList.appendChild(newElement);
    }
}

//strike through and remove to-do item function
function strikeThrough(element) {
    if (element.classList == "toDoItems") {
        element.classList.replace("toDoItems", "toDoItemsDone");
        setTimeout(() => element.remove(), 900);
    } else {
        element.classList = "toDoItems";
    }
}



addButton.addEventListener("click", () => addItem(textBox.value));

