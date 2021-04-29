//hide functionality for the learning/work log

const hiddenL = document.querySelector("#hideLearn");
const hiddenW = document.querySelector('#hideWork');
const dropDownLearning = document.querySelector('#learningDropDown');
const dropDownWork = document.querySelector('#workDropDown');

const hide = (hidden) => {
    if (hidden.style.display === "none") {
        hidden.style.display = "block";
        hidden.classList = "transition";
    } else {
        hidden.style.display = "none";
    }
}

dropDownLearning.addEventListener("click", () => hide(hiddenL));
dropDownWork.addEventListener("click", () => hide(hiddenW));