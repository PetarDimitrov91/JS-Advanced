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


// let capital = "Sofia";
// let population = 123424324;
// let country = "Bulgaria";

// let town = {
//     capital,
//     population,
//     chef: {
//         kmet: "Petar"
//     },
//     country
// }

// console.log(town);

// town.location = {
//     lat: 42.321,
//     lng: 23.322
// };


// const person = {
//     firstName: 'Petar',
//     lastName: 'Dimitrov',
//     company: {
//         name: 'PVD GmbH',
//         employees: {
//             name: 'Ivan Petrov',

//         }
//     }
// };

// const { company: { employees: { name } } } = person;

// console.log(name);

// const employees = [
//     { name: 'John', position: 'worker' }, //first element
//     { name: 'Jane', position: 'secretary' }
// ];
// const [{ name }] = employees;

// console.log(name);

// function print() {
//     console.log(`${this.name} is printing a page`);
// }

// function scan() {
//     console.log(`${this.name} is scanning a document`);
// }
// const printer = {
//     name: 'ACME Printer',
//     print
// };
// const scanner = {
//     name: 'Initech Scanner',
//     scan
// };
// const copier = {
//     name: 'ComTron Copier',
//     print,
//     scan
// };

// copier.scan();
// copier.print();
// printer.print();

// function createRect(width, height) {
//     const rect = { width, height };
//     rect.getArea = () => {
//         return rect.width * rect.height;
//     };
//     return rect;
// }

// const area = createRect(5, 5);
// console.log(area);
// console.log(area.getArea());

const obj = {
    '1': 21,
    2: 23,
    3: 213
}

console.log(obj);