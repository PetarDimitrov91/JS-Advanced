function create(words) {
    let contentDiv = document.getElementById('content');

    for (const word of words) {
        let div = document.createElement('div');
        let paragraph = document.createElement('p');
        paragraph.textContent = word;
        paragraph.style.display = 'none';
        div.appendChild(paragraph);

        div.addEventListener('click', function() {
            paragraph.style.display = 'block'
        });

        contentDiv.appendChild(div);


    }

}