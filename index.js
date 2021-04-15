console.log("Hello World");

const button = document.querySelector("button");

button.addEventListener("mouseenter", () => button.style.borderColor = "white");
button.addEventListener("mouseleave", () => button.style.borderColor = "");