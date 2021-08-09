
const MAIN_BUTTON = document.getElementById('mainBtn');
const WRAPPER = document.getElementById('wrapper');
const MODAL = document.getElementById('modal');

const NAME_FIELD = document.getElementById('beerName');
const IMG_FIELD = document.getElementById('beerSrc');
const DESC_FIELD = document.getElementById('beerDesc');
const BEER_CONTAINER = document.getElementById('beerContainer');

const ADD_BUTTON = document.getElementById('addBtn');


const BEERS = [];

// MAIN_BUTTON.onclick = function () {
//     MODAL.style.display = 'block';
// }

MAIN_BUTTON.addEventListener('click', function open() {
    MODAL.style.display = 'block';
})

function modalClose() {
    MODAL.style.display = 'none';
}


function clearValues() {
    NAME_FIELD.value = '';
    IMG_FIELD.value = '';
    DESC_FIELD.value = '';
}

function render() {
    let html = '';
    BEERS.forEach((item) => {
        html += item.getHtml();
    });

    BEER_CONTAINER.innerHTML = html;
}

function Beer(name, imgSrc, description) {
    this.name = name;
    this.imgSrc = imgSrc;
    this.description = description;
}

Beer.prototype.logBeer = function () {
    console.log('BEER: ');
    console.log(this);
}

Beer.prototype.getHtml = function () {
    return `
        <div class="card">
            <p>${this.name}</p>
            <p>${this.imgSrc}</p>
            <p>${this.description}</p>
        </div>
    `

}


ADD_BUTTON.addEventListener('click', function addBeer() {
    const newBeer = new Beer(NAME_FIELD.value, IMG_FIELD.value, DESC_FIELD.value);
    newBeer.logBeer();
    BEERS.push(newBeer);

    console.log('BEER ARRAY: ');
    console.log(BEERS);

    clearValues();
    render();
    modalClose();
});
