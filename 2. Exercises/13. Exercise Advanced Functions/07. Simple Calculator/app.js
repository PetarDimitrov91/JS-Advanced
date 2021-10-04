function calculator() {

    let num1Ref;
    let num2Ref;
    let resRef;

    function init(selector1,selector2,resultSelector){
        num1Ref = document.querySelector(selector1);
        num2Ref = document.querySelector(selector2);
        resRef = document.querySelector(resultSelector)
    }


    function add() {
        resRef.value = Number(num1Ref.value) + Number(num2Ref.value);
    }

    function subtract() {
        resRef.value = Number(num1Ref.value) - Number(num2Ref.value);
    }

    return {
        init,
        add,
        subtract
    }
}

const calculate = calculator();
calculate.init('#num1', '#num2', '#result');





