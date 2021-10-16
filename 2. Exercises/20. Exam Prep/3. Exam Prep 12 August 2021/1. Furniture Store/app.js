window.addEventListener('load', solve);

function solve() {
    // getting ref to all needed fields and buttons
    const model = document.getElementById('model');
    const year = document.getElementById('year');
    const description = document.getElementById('description');
    const price = document.getElementById('price');
    const addBtn = document.getElementById('add');
    const tableBody = document.getElementById('furniture-list');
    const totalPriceField = document.getElementsByClassName('total-price')[0];

    // btn add event listener and prevent default
    addBtn.addEventListener('click', add);

    function add(e) {
        // when btn is clicked add all info into the tbody
        e.preventDefault();
        // validate if all fields are filed
        if (!model.value || !description.value || Number(year.value) <= 0 || Number(price.value) <= 0) {
            return;
        }

        const moreInfoBtn = create('button', {className: 'moreBtn'}, 'More Info');
        const buyBtn = create('button', {className: 'buyBtn'}, 'Buy it');

        const elementToAttach = create('tr', {className: 'info'},
            create('td', {}, `${model.value}`),
            create('td', {}, `${Number(price.value).toFixed(2)}`),
            create('td', {}, moreInfoBtn, buyBtn),
        );

        const descriptionElement = create('tr', {className: 'hide'},
            create('td', {}, `Year: ${year.value}`),
            create('td', {colSpan: "3"}, `Description: ${description.value}`)
        );
        // descriptionElement.classList.add('hide');

        Array.from(document.querySelectorAll('input')).forEach(e => e.value = '');
        description.value = '';

        tableBody.appendChild(elementToAttach);
        tableBody.appendChild(descriptionElement);

        moreInfoBtn.addEventListener('click', showMoreInfo);

        function showMoreInfo(e) {
            if (e.target.textContent === 'Less Info') {
                descriptionElement.style.display = 'none';
                moreInfoBtn.textContent = 'More Info';
            } else {
                descriptionElement.style.display = 'contents';
                moreInfoBtn.textContent = 'Less Info';
            }
        }

        buyBtn.addEventListener('click', buy);

        function buy(e) {
            const row = e.target.parentNode.parentNode;
            let price = Number(row.children[1].textContent);
            let currentTotalPrice = Number(totalPriceField.textContent);
            totalPriceField.textContent = (price + currentTotalPrice).toFixed(2);
            row.remove();

        }


    }

    // add event listeners to the 2 buttons
    // when the more info btn is clicked, create additional row with the description an the year of the furniture
    // when the buy it btn is clicked, remove the row an add the price to the total price;
    function create(type, attr, ...content) {
        const element = document.createElement(type);

        for (let prop in attr) {
            element[prop] = attr[prop];
        }
        for (let item of content) {
            if (typeof item === 'string' || typeof item === 'number') {
                item = document.createTextNode(item);
            }
            element.appendChild(item);
        }
        return element;

    }
}
