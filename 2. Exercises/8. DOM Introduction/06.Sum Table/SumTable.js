function sumTable() {
    let sum = 0;
    const elements = document.querySelectorAll('table tr');
    for (let i = 1; i < elements.length - 1; i++) {
        sum += Number(elements[i].lastElementChild.textContent);
    }
    elements[elements.length - 1].lastElementChild.textContent = sum;
}