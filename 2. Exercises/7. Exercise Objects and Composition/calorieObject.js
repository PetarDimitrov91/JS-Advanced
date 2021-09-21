/**
 *
 * @param {array} strings
 */
function calorieObject(strings) {

    const obj = {};

    for (let i = 0; i < strings.length; i += 2) {
        let product = strings[i];
        obj[product] = Number(strings[i + 1]);

    }
    console.log(obj);
}

calorieObject(['Yoghurt', '48', 'Rise', '138', 'Apple', '52']);