function solve() {
    document.querySelector('#searchBtn').addEventListener('click', onClick);

    function onClick() {

        let serched = document.getElementById('searchField').value.toLowerCase();
        console.log(serched);

        let tableRows = Array.from(document.querySelectorAll('tbody tr'));
        tableRows.forEach((e) => {
            let text = e.textContent.toLowerCase();
            if (text.includes(serched)) {
                e.classList.add('select');
            } else {
                e.classList.remove('select');
            }
        });
        serched.value = '';
    }
}