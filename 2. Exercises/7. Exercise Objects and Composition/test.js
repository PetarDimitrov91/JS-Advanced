//["PizzaHut - Peter 500, George 300, Mark 800",
//  "TheLake - Bob 1300, Joe 780, Jane 660"]

const obj = {
    "PizzaHut":{
        "Petar": 500,
        "George": 300,
        "Mark": 800
    },
    "TheLake":{
        "Bob": 1300,
        "Joe": 780,
        "Jane":660
    }
}

let sum = 0;
let count = 0;
let average = 0;
const a = Object.values(obj);
for (const aElement of a) {
    for (const x of Object.values(aElement) ) {
        sum += Number(x);
    }
}

