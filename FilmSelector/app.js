const form = document.querySelector("#film");
const input = document.querySelector("#filmTitle");
const list = document.querySelector("#filmList");

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const filmName = input.value;
    const newLI = document.createElement("LI");
    newLI.innerText = filmName;
    list.append(newLI);
});







