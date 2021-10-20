let dates = '2020/09/29 - 18:00';

let newDates = dates.replace(' - ', '/');
console.log(newDates)

const arr= newDates.split(/[\/\-:}]/);

console.log(arr)


//let date = new Date(2021,12,23,18,14);
//
//console.log(date.getTime())
