// const person = {
//     firstName: 'Petar',
//     lastName: 'Dimitrov',
//     age: 22
// };

// console.log(person['firstName'])

// person['Beruf'] = "Programmer";

// person.car = 'Kia';
// person.gender = 'Male';

// console.log(`${person.car} <-> ${person.gender}`);

// const { firstName, car } = person;
// console.log(firstName + " " + car);


// for (const key in person) {
//     console.log(key + " " + person[key])
// }

// let command = 'reset';
// let count = 5;

// const parser = {
//     increment() {
//         count++;
//     },

//     decrement() {
//         count--;
//     },

//     reset() {
//         count = 0;
//     }
// }

// parser[command]();

// console.log(count);

// console.log(person['age']);


let capital = "Sofia";
let population = 123424324;
let country = "Bulgaria";

let town = {
    capital,
    population,
    chef: {
        kmet: "Petar"
    },
    country
}

console.log(town);

town.location = {
    lat: 42.321,
    lng: 23.322
};

console.log(chef: { kmet }) = town;


const {}