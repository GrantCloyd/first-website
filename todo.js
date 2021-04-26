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
        newElement.addEventListener("click", () => done(newElement));
        textBox.value = null;
        const time = new Date;
        newElement.append(` --- added on ${time.toDateString()}`)
        toDoList.appendChild(newElement);
    }
}

const finishStatements = ["Aww yeah!", "Crushed it!", "Nailed it!", "Party on!", "Congrats!", "Way to finish that!", "Hot diggity damn!", "That nonsense is done!", "Did someone say party time?!"]

//strike through and remove to-do item function
function done(element) {
    element.classList.replace("toDoItems", "toDoItemsDone")
    element.innerText = finishStatements[Math.floor(Math.random() * finishStatements.length)]
    setTimeout(() => element.remove(), 1200);

}


//event listeners with the same function, one bound to enter key on the textbox, the other bound on the add button
addButton.addEventListener("click", () => addItem(textBox.value));
textBox.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        addItem(textBox.value);
    }
});
