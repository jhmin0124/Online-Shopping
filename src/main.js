//fetch the item from the JSON file
function loadItems() {
    return fetch('data/data.json')
    .then(response => response.json())
    .then(json => json.items);
}
// update the list with the given items
function dispalayItem(items) {
    const container = document.querySelector('.items');
    const html = items.map(item => createHTMLString(item));
    container.innerHTML = items.map(item => createHTMLString(item)).join('');
}

// create HTML list from the given data item
function createHTMLString(item) {
    return '
    <li class="item">
        <img src="${item.image}" alt="${item.type}" class="item_thumbnail" />
        <span class="item_description">${item.gender}, ${item.size}</span>
    </li>
    ';      
}

function onButtonClick(event, items) {
    const dataset = event.
    console.log(event.target.dataset.key);
    console.log(event.target.dataset.vlaue);    

}

function setEventListeners(items) {
    const logo = document.querySelector('.logo');
    const buttons = document.querySelector('butttons');
    logo.addEventListener('click', () => displayItems(items));
    buttons.addEventListener('click', event => onButtonClick(event, items));
}

//main
loadItems()
.then(items => {
    console.log(items);
    displayItems(items);
    //  setEventListeners(items)
})
.catch(console.log);