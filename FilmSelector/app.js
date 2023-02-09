const submitTitle = document.getElementById('submitTitle');
const filmTitle = document.getElementById('filmTitle');
const films = document.getElementById('films');

function writeList() {
    films.innerHTML = filmTitle.value;
}

submitTitle.addEventListener('click', writeList);



