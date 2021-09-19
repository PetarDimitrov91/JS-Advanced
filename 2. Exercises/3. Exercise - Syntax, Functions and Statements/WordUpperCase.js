/**
 *
 * @param {string}str
 */

function toUpper(str) {
    let arr = str.split("");
    let arrToPrint = [];
    let word = "";
    for (let i = 0; i < arr.length; i++) {
        if(i === 62){
            let abc = "";
        }
        if (/[a-zA-Z]/.test(arr[i])) {
            word += arr[i];
            if (i === arr.length - 1 ){
                arrToPrint.push(word.toUpperCase());
            }
        } else if (/[/s+]/) {
            if (word !== "") {
                arrToPrint.push(word.toUpperCase());
            }
            word = ""
        }
    }
    console.log(arrToPrint.join(", "));
}

toUpper('Hi, how are you?');
toUpper('Hello?');
toUpper('FUNCTIONS, IN, JS, CAN, BE, NESTED, I, E, HOLD, OTHER, FUNCTIONS');
