function checkDays(month, year) {
    return new Date(year, month, 0).getDate();
}
console.log(checkDays(2, 2021));