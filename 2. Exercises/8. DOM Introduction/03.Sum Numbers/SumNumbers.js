function calc() {
    let a = document.getElementById('num1').value;
    let b = document.getElementById('num2').value;
    let sum = Number(a) + Number(b);

    if (Number.isNaN(sum)) {
        document.getElementById('sum').value = 'Please enter a Number';
    } else {
        document.getElementById('sum').value = sum;
    }
}