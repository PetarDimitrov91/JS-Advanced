document.getElementById('items').addEventListener('click', removeElement);

function removeElement(ev) {
    if (ev.target.tagName == 'A') {
        const parent = ev.target.parentNode;
        parent.remove();
    }
}

function addItem() {
    // select input field and read value
    const input = document.getElementById('newItemText');

    // create new <li> element and set its content to input value
    const liElement = document.createElement('li');
    liElement.textContent = input.value;

    // create Delete button
    const button = document.createElement('a');
    button.href = '#';
    button.textContent = '[Delete]';

    liElement.appendChild(button);

    // select <ul> and append new <li> element
    document.getElementById('items').appendChild(liElement);


    // nice-to-have: clear input field
    input.value = '';
}