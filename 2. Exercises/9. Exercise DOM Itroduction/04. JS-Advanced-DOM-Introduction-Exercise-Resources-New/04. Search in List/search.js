function search() {

    let input = document.getElementById('searchText').value;

    let count = 0;

    let towns = document.getElementsByTagName('li');

    for (const town of towns) {
        if (town.innerHTML.includes(input)) {
            town.style.textDecoration = 'underline';
            town.style.fontWeight = 'bold';
            count++;
        } else {
            town.style.textDecoration = 'none';
            town.style.fontWeight = 'normal';
        }
    }
    document.getElementById('result').textContent = `${count} matches found`;
}