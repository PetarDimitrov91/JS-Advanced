const person = {
    firstName: 'Petar',
    lastName: 'Dimitrov',
    age: 22
};

console.log(person['firstName'])

person['Beruf'] = "Programmer";

person.car = 'Kia';
person.gender = 'Male';

console.log(`${person.car} <-> ${person.gender}`);

const { firstName, car } = person;
console.log(firstName + " " + car);


for (const key in person) {
    console.log(key + " " + person[key])
}