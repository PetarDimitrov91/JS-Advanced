function solve() {
    //store reference to input and output text fields
    const [input, output] = Array.from(document.querySelectorAll('textarea'));

    //store reference to generate and buy buttons
    const [genBtn, buyBtn] = Array.from(document.querySelectorAll('button'));

    //add event to the buttons
    genBtn.addEventListener('click', generate);
    buyBtn.addEventListener('click', buy);

    // taking reference to tableBody
    const tBodyRef = document.getElementsByTagName('tbody')[0];

    // take the data from the input field and generate new item rows

    function generate(e) {
        const furniture = JSON.parse(input.value);
        for (const item of furniture) {

            const tableRow = document.createElement('tr');

            tableRow.appendChild(createContent('img', {src: item['img']}));
            tableRow.appendChild(createContent('p', {}, item['name']));
            tableRow.appendChild(createContent('p', {}, item['price']));
            tableRow.appendChild(createContent('p', {}, item['decFactor']));
            tableRow.appendChild(createContent('input', {type: 'checkbox'}));

            tBodyRef.appendChild(tableRow);

        }
    }

    //factory function
    function createContent(givenTag, attributes, content) {
        const cell = document.createElement('td');
        const tag = document.createElement(givenTag);

        for (const prop in attributes) {
            tag[prop] = attributes[prop];
        }
        if (content) {
            tag.textContent = content;
        }
        cell.appendChild(tag);
        return cell;
    }

    function buy(e) {


       const boxes =  Array.from(document.querySelectorAll('input[type=checkbox]:checked'))
           .map(b => b.parentElement.parentElement)
           .map(r => ({
               name:r.children[1].textContent,
               price: Number(r.children[2].textContent),
               deFactor: Number(r.children[3].textContent)
           }))
           .reduce((acc,c,i,a) =>{
               acc.names.push(c.name);
               acc.total += c.price;
               acc.deFactor += c.deFactor / a.length;
               return acc;
           }, {names: [],total: 0, deFactor: 0});

       output.value = `Bought furniture: ${boxes.names.join(', ')}\nTotal price: ${boxes.total.toFixed(2)}\nAverage decoration factor: ${boxes.deFactor}`
    }
}