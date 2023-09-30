/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.getElementById('temples');
let templesList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
    temples.forEach(temple => {
        const article = document.createElement('article');
        
        const h3 = document.createElement('h3');
        h3.textContent = temple.templeName;

        const img = document.createElement('img');
        img.setAttribute('src', temple.imageUrl);
        img.setAttribute('alt', temple.location);

        article.appendChild(h3)
        article.appendChild(img)

        templesElement.appendChild(article);
        
    });
}

/* async getTemples Function using fetch()*/
const getTemples = async () => {
    const response = await fetch("https://byui-cse.github.io/cse121b-ww-course/resources/temples.json");
    const templesData = await response.json();
    templesList = templesData;
    displayTemples(templesList);
}

/* reset Function */
const reset = () => {
    templesElement.querySelectorAll('article').forEach(e => e.remove());
}

/* sortBy Function */
const sortBy = function (temples) {
    reset();
    let filter = document.querySelector('#sortBy').value;
    let newList;

    switch (filter) {
        case 'utah':
            newList = temples.filter(temple => temple.location.includes('Utah'));
            break;
            case 'notutah':
            newList = temples.filter(temple => !temple.location.includes('Utah'));
            break;
        case 'older':
            newList = temples.filter(temple => new Date(temple.dedicated) < new Date(1950,0,1))
            break;
        case 'all':
        default:
            newList = temples;
            break;
    }

    displayTemples(newList)
}

getTemples();

/* Event Listener */
document.querySelector("#sortBy").addEventListener('change', () => {sortBy(templesList)})