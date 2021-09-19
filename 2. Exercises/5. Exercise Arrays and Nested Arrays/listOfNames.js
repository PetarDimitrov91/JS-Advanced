function arrayOfNames(arr) {
    arr.sort((a, b) => a.localeCompare(b));
    arr.forEach((e, i) => console.log(++i + "." + e));
}

arrayOfNames(["John", "Bob", "Christina", "Ema"]);