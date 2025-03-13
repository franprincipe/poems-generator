function displayPoem(response) {

new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
    event.preventDefault();

    let instructionsInput = document.querySelector("#user-instructions");
    let apiKey = "26oc32fb0bb79b0843abctf92a0a6446";
    let context = "You are an expert in writing romantic poems. Generate 4 line poem in basic words and separate each line with <br />. Sign in at the end of the poem in a <strong> element '-AI Poet'. Make sure to follow user instructions.";
    let prompt = `User instructions: Generate a poem about ${instructionsInput.value}`;
    let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`

    let poemElement =document.querySelector("#poem");
    poemElement.classList.remove("hidden");
    poemElement.innerHTML = `<div class=" generating"> *** Generating a poem just for you about ${instructionsInput.value}...</div>`

    axios.get(apiUrl).then(displayPoem);
}

let poemFormElement= document.querySelector("#poem-form-generator");
poemFormElement.addEventListener("submit", generatePoem);