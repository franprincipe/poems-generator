function generatePoem(event) {
    event.preventDefault();

new Typewriter("#poem", {
    strings: "I love flowers",
    autoStart: true,
    delay: 1,
    cursor: "",
  });

}

let poemFormElement= document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);