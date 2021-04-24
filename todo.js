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
            id: [text]
        });

        newElement.addEventListener("click", () => {
            if (newElement.classList == "toDoItems") {
                newElement.classList.replace("toDoItems", "toDoItemsDone");
                remover(newElement);

            } else {
                newElement.classList = "toDoItems";
            }

        });
        textBox.value = null;
        toDoList.appendChild(newElement);
    }
}


// //function doneToggele() {
// if (this.classList === "toDoItems") {
//     this.toggleAttribute(this.classList = "toDoItemsDone");
// }
// if (this.classList === "toDoItemsDone") {
//     this.toggleAttribute(this.classList = "toDoItems");
// }
// }



addButton.addEventListener("click", () => addItem(textBox.value));

const remover = (element) => {
    if (element.classList == "toDoitemsDone") {
        setTimeout(() => newElement.remove(), 1500);
    }
}

