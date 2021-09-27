function solve() {
    const stringToConvert = document.getElementById('text').value.toLowerCase().split(' ');
    const caseToConvert = document.getElementById('naming-convention').value.split(' ')[0].toLowerCase();

    let result = '';

    const transform = {
        camel() {
            result = stringToConvert[0];
            for (let i = 1; i < stringToConvert.length; i++) {
                result += stringToConvert[i].charAt(0).toUpperCase() + stringToConvert[i].slice(1);
            }

        },
        pascal() {
            for (let i = 0; i < stringToConvert.length; i++) {
                result += stringToConvert[i].charAt(0).toUpperCase() + stringToConvert[i].slice(1);
            }

        }
    };
    if (caseToConvert == 'camel' || caseToConvert == 'pascal') {
        transform[caseToConvert]();
    } else {
        result = 'Error!';
    }
    document.getElementById('result').textContent = result;
}