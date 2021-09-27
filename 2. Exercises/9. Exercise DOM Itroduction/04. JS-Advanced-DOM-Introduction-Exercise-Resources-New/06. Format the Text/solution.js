/**
 * 
 * @param {array} text
 */
function solve() {

    const input = document.getElementById('input').value;
    const text = input.split('.').filter((e) => e != '');
    const output = document.getElementById('output');

    for (let i = 0; i < text.length; i += 3) {
        let arr = [];
        for (let y = 0; y < 3; y++) {
            if (text[i + y]) {
                arr.push(text[i + y]);
            }
        }
        let paragraph = arr.join('. ') + '.';
        output.innerHTML += `<p>${paragraph}</p>`;
    }
}